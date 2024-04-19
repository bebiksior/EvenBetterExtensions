import { EXTENSIONS_URL } from "../constants";
import { escapeHTML } from "../utils";

export interface Extension {
  id: string;
  name: string;
  description: string;
  author: string;
  url: string;
  latestVersion: string;
  isCustom: boolean;

  versionUrl?: string;
  customJSUrl?: string;
  customCSSUrl?: string;
}

export interface InstalledExtension {
  installedVersion: string;
  extensionID: string;
}

class ExtensionsManager {
  private installedExtensions: InstalledExtension[] = [];
  private extensions: Extension[] = [];

  async installExtension(extensionID: string): Promise<void> {
    // Check if the extension is already installed
    if (this.isExtensionInstalled(extensionID)) {
      throw new Error(`Extension with ID ${extensionID} is already installed.`);
    }

    // Find the extension in the list of extensions
    const extension = this.extensions.find((ext) => ext.id === extensionID);
    if (!extension) {
      throw new Error(`No data found for extension with ID ${extensionID}`);
    }

    // Fetch custom JS and CSS, then store them in local storage
    if (extension.customJSUrl) {
      const jsCode = await this.fetchBody(extension.customJSUrl);
      localStorage.setItem(`extensions_${extension.id}_javascript`, jsCode);
    }
    if (extension.customCSSUrl) {
      const cssCode = await this.fetchBody(extension.customCSSUrl);
      localStorage.setItem(`extensions_${extension.id}_css`, cssCode);
    }

    // Add extension to the list of installed extensions
    this.installedExtensions.push({
      installedVersion: extension.latestVersion,
      extensionID: extension.id,
    });

    // Update installed extensions list in local storage
    localStorage.setItem(
      "installedExtensions",
      JSON.stringify(this.installedExtensions)
    );

    // Reload the page to apply changes
    localStorage.setItem("previousPath", window.location.hash);
    window.location.reload();
  }

  uninstallExtension(extensionID: string): void {
    // Remove extension's JS and CSS from local storage
    localStorage.removeItem(`extensions_${extensionID}_javascript`);
    localStorage.removeItem(`extensions_${extensionID}_css`);

    // Remove extension from the list of installed extensions
    this.installedExtensions = this.installedExtensions.filter(
      (ext) => ext.extensionID !== extensionID
    );

    // Update installed extensions list in local storage
    localStorage.setItem(
      "installedExtensions",
      JSON.stringify(this.installedExtensions)
    );

    // Reload the page to apply changes
    localStorage.setItem("previousPath", window.location.hash);
    window.location.reload();
  }

  async updateExtension(extensionID: string): Promise<void> {
    const installedExtension = this.installedExtensions.find(
      (ext) => ext.extensionID === extensionID
    );
    if (!installedExtension) {
      throw new Error(`Extension with ID ${extensionID} is not installed.`);
    }

    const extension = this.extensions.find((ext) => ext.id === extensionID);
    if (!extension || !extension.versionUrl) {
      throw new Error(
        `No data found for extension with ID ${extensionID} or version URL not provided.`
      );
    }

    await this.fetchBody(extension.versionUrl).then((latestVersion) => {
      installedExtension.installedVersion = latestVersion;
      localStorage.setItem(
        "installedExtensions",
        JSON.stringify(this.installedExtensions)
      );
    });

    if (extension.customJSUrl) {
      await this.fetchBody(extension.customJSUrl).then((jsCode) => {
        localStorage.setItem(`extensions_${extensionID}_javascript`, jsCode);
      });
    }

    if (extension.customCSSUrl) {
      await this.fetchBody(extension.customCSSUrl).then((cssCode) => {
        localStorage.setItem(`extensions_${extensionID}_css`, cssCode);
      });
    }

    localStorage.setItem("previousPath", window.location.hash);
    window.location.reload();
  }

  getInstalledExtension(extensionID: string): InstalledExtension | undefined {
    return this.installedExtensions.find(
      (ext) => ext.extensionID === extensionID
    );
  }

  isExtensionInstalled(extensionID: string): boolean {
    return this.installedExtensions.some(
      (ext) => ext.extensionID === extensionID
    );
  }

  loadInstalledExtensions(): void {
    const installedExtensionsJSON = localStorage.getItem("installedExtensions");
    if (installedExtensionsJSON) {
      this.installedExtensions = JSON.parse(installedExtensionsJSON);
    }
  }

  getExtensions(): Extension[] {
    return this.extensions;
  }

  getInstalledExtensions(): InstalledExtension[] {
    return this.installedExtensions;
  }

  async importCustomExtension(extension: Extension): Promise<void> {
    if(this.extensions.some(ext => ext.id === extension.id)) {
      throw new Error(`Extension with ID ${extension.id} already exists.`);
    }

    extension.isCustom = true;

    const latestVersion = await this.fetchBody(extension.versionUrl);
    extension.latestVersion = escapeHTML(latestVersion);

    let customExtensions = localStorage.getItem("customExtensions");
    if (!customExtensions) {
      customExtensions = "[]";
    }

    const customExtensionsArray = JSON.parse(customExtensions);
    customExtensionsArray.push(extension);

    localStorage.setItem(
      "customExtensions",
      JSON.stringify(customExtensionsArray)
    );

    this.extensions.push(extension);
  }

  deleteCustomExtension(extensionID: string): void {
    let customExtensions = localStorage.getItem("customExtensions");
    if (!customExtensions) {
      return;
    }

    const customExtensionsArray = JSON.parse(customExtensions);
    const updatedExtensions = customExtensionsArray.filter(
      (ext: Extension) => ext.id !== extensionID
    );

    localStorage.setItem("customExtensions", JSON.stringify(updatedExtensions));

    this.extensions = this.extensions.filter((ext) => ext.id !== extensionID);

    if (this.isExtensionInstalled(extensionID)) {
      this.uninstallExtension(extensionID);
    }
  }

  async initExtensions(): Promise<Extension[]> {
    try {
      const response = await fetch(EXTENSIONS_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch extensions from ${EXTENSIONS_URL}`);
      }
      const extensionsData = await response.json();
      const latestExtensions = extensionsData.extensions as Extension[];

      for (const ext of latestExtensions) {
        const latestVersion = await this.fetchBody(ext.versionUrl);
        ext.latestVersion = escapeHTML(latestVersion);
      }

      this.extensions = latestExtensions;

      let customExtensions = localStorage.getItem("customExtensions");
      if (customExtensions) {
        const customExtensionsArray = JSON.parse(customExtensions);
        this.extensions.push(...customExtensionsArray);
      }

      return this.extensions;
    } catch (error) {
      console.error(`Failed to load extensions from URL: ${error}`);
      throw error;
    }
  }

  runExtension(extensionID: string): void {
    const installedExtension = this.installedExtensions.find(
      (ext) => ext.extensionID === extensionID
    );
    if (!installedExtension) {
      throw new Error(`Extension with ID ${extensionID} is not installed.`);
    }

    const jsCode = localStorage.getItem(`extensions_${extensionID}_javascript`);
    if (jsCode) {
      try {
        eval(jsCode);
      } catch (error) {
        console.error(`Failed to run extension ${extensionID}: ${error}`);
      }
    }

    const cssCode = localStorage.getItem(`extensions_${extensionID}_css`);
    if (cssCode) {
      const style = document.createElement("style");
      style.textContent = cssCode;
      document.head.appendChild(style);
    }
  }

  async checkForUpdates(
    extensionID: string
  ): Promise<{ latestVersion: string; isLatest: boolean }> {
    const installedExtension = this.installedExtensions.find(
      (ext) => ext.extensionID === extensionID
    );
    if (!installedExtension) {
      throw new Error(`Extension with ID ${extensionID} is not installed.`);
    }

    const extension = this.extensions.find((ext) => ext.id === extensionID);
    if (!extension || !extension.versionUrl) {
      throw new Error(
        `No data found for extension with ID ${extensionID} or version URL not provided.`
      );
    }

    try {
      const latestVersion = await this.fetchBody(extension.versionUrl);
      if (latestVersion !== installedExtension.installedVersion) {
        return { latestVersion, isLatest: false };
      } else {
        return { latestVersion, isLatest: true };
      }
    } catch (error) {
      console.error(
        `Failed to check for updates for extension ${extensionID}: ${error}`
      );
      throw error;
    }
  }

  private async fetchBody(url: string): Promise<string> {
    const response = await fetch(url);
    if (response.ok) {
      return response.text();
    } else {
      throw new Error(`Failed to fetch code from ${url}`);
    }
  }
}

const extensionsManager = new ExtensionsManager();
export default extensionsManager;
