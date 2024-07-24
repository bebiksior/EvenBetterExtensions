import { getSetting } from "@bebiks/evenbetter-api/src/storage";
import { getCaidoAPI, importPlugin } from "../utils/caidoapi";
import { getEvenBetterAPI } from "../utils/evenbetterapi";
import { logger } from "../utils/logger";
import {
  CaidoInstalledPlugin,
  CaidoPlugin,
} from "./types";


let PLUGIN_URL = "https://raw.githubusercontent.com/bebiksior/EvenBetterExtensions/main/extensions.json";

export class PluginsManager {
  private plugins: CaidoPlugin[] = [];
  private callbacks: ((plugin: CaidoPlugin) => void)[] = [];

  constructor() {}

  register(plugin: CaidoPlugin) {
    this.plugins.push(plugin);
    if (this.callbacks) {
      this.callbacks.forEach((callback) => callback(plugin));
    }
  }

  getMainPluginsURL() {
    return getSetting("extensions-url") || PLUGIN_URL;
  }

  getAdditionalPluginsURLs() {
    return getSetting("additional-extensions-urls")?.split(",") || [];
  }

  getPlugins() {
    return this.plugins;
  }

  async uninstallPlugin(plugin: CaidoPlugin, onlyUninstall = false) {
    const { showToast, setWelcomeMessage } = getEvenBetterAPI().toast;

    try {
      const data = await getCaidoAPI().graphql.pluginPackages();
      const installedPackage = data.pluginPackages.find(
        (installedPackage) =>
          installedPackage.manifestId === plugin.manifestPackageID
      );

      if (!installedPackage) {
        throw new Error("Plugin is not installed");
      }

      await getCaidoAPI().graphql.uninstallPluginPackage({
        id: installedPackage.id,
      });

      if (onlyUninstall) {
        return;
      }

      setWelcomeMessage({
        message: `Plugin ${plugin.name} uninstalled successfully`,
        type: "success",
      });

      localStorage.setItem("ebe:previousPath", location.hash);
      setTimeout(() => {
        location.reload();
      }, 50);
    } catch (error: any) {
      showToast({
        message: `Failed to uninstall plugin ${plugin.name}: ${error.message}`,
        type: "error",
      });
    }
  }

  async installPlugin(plugin: CaidoPlugin, onlyInstall = false) {
    const content = await fetch(plugin.downloadUrl).then((response) =>
      response.blob()
    );
    const file = new File([content], `${plugin.manifestPackageID}.zip`, {
      type: "application/zip",
    });

    const { showToast, setWelcomeMessage } = getEvenBetterAPI().toast;

    importPlugin(file)
      .then((data) => {
        const err = data.installPluginPackage.error;
        if (err) {
          if (err.__typename == "PluginUserError") {
            throw new Error(err.reason);
          }

          throw new Error(err.code);
        }

        if (onlyInstall) {
          return;
        }

        setWelcomeMessage({
          message: `Plugin ${plugin.name} installed successfully`,
          type: "success",
        });

        localStorage.setItem("ebe:previousPath", location.hash);
        setTimeout(() => {
          location.reload();
        }, 50);
      })
      .catch((error) => {
        showToast({
          message: `Failed to install plugin ${plugin.name}: ${error.message}`,
          type: "error",
        });
      });
  }

  async updatePlugin(plugin: CaidoPlugin) {
    const { showToast, setWelcomeMessage } = getEvenBetterAPI().toast;

    try {
      const installedPackage = await this.getInstalledPlugin(plugin);
      if (!installedPackage) {
        throw new Error("Plugin is not installed");
      }

      await this.uninstallPlugin(plugin, true);
      await this.installPlugin(plugin, true);

      setWelcomeMessage({
        message: `Plugin ${plugin.name} updated successfully`,
        type: "success",
      });

      localStorage.setItem("ebe:previousPath", location.hash);
      setTimeout(() => {
        location.reload();
      }, 150);
    } catch (error: any) {
      showToast({
        message: `Failed to update plugin ${plugin.name}: ${error.message}`,
        type: "error",
      });
    }
  }

  validatePlugin(plugin: CaidoPlugin) {
    if (!plugin.manifestPackageID)
      return new Error("manifestPackageID is required");
    if (!plugin.pluginsIDs) return new Error("pluginsIDs is required");
    if (!plugin.name) return new Error("name is required");
    if (!plugin.version) return new Error("version is required");
    if (!plugin.description) return new Error("description is required");
    if (!plugin.author) return new Error("author is required");
    if (!plugin.downloadUrl) return new Error("downloadUrl is required");

    if (!plugin.author.name) return new Error("author.name is required");
    if (!plugin.author.url) return new Error("author.url is required");

    if (!Array.isArray(plugin.pluginsIDs))
      return new Error("pluginsIDs should be an array");

    try {
      const downloadUrl = new URL(plugin.downloadUrl);
      if (downloadUrl.protocol !== "https:" && downloadUrl.protocol !== "http:")
        return new Error("downloadUrl should be a valid http/https URL");
    } catch (error) {
      return new Error("downloadUrl is not a valid URL");
    }

    try {
      const authorUrl = new URL(plugin.author.url);
      if (authorUrl.protocol !== "https:" && authorUrl.protocol !== "http:")
        return new Error("author.url should be a valid http/https URL");
    } catch (error) {
      return new Error("author.url is not a valid URL");
    }
  }

  async checkForUpdates() {
    this.plugins.forEach(async (plugin) => {
      const installedPlugin = await this.getInstalledPlugin(plugin);
      if (!installedPlugin) {
        return;
      }

      if (plugin.version !== installedPlugin.installedVersion) {
        if (getSetting("notifications") === "true") {
          getEvenBetterAPI().toast.showToast({
            message: `New version of ${plugin.name} is available!`,
            type: "info",
          });
        }

        if (getSetting("auto-update") === "true") {
          this.updatePlugin(plugin);
        }
      }
    });
  }

  async fetchPlugins() {
    this.plugins = [];

    const processResponse = async (data: any) => {
      for (const pluginReference of data.plugins) {
        const pluginManifestResponse = await fetch(pluginReference.manifestURL);
        const pluginManifest = await pluginManifestResponse.json();
  
        const caidoPlugin = {
          manifestPackageID: pluginManifest.id,
          pluginsIDs: pluginManifest.plugins.map((plugin: any) => plugin.id),
          name: pluginManifest.name,
          version: pluginManifest.version,
          description: pluginManifest.description,
          author: pluginManifest.author,
          downloadUrl: pluginReference.downloadURL,
        };
  
        const error = this.validatePlugin(caidoPlugin);
        if (error) {
          logger.error(`Error validating plugin: ${error.message}`);
          getEvenBetterAPI().toast.showToast({
            message: `Error validating plugin: ${error.message}`,
            type: "error",
          });
          continue;
        }
  
        logger.info(`Registering plugin: ${caidoPlugin.name}`);
        this.register(caidoPlugin);
      }
    }
  
    try {
      const response = await fetch(this.getMainPluginsURL());
      const data = await response.json();

      await processResponse(data);
      if (this.getAdditionalPluginsURLs().length > 0) {
        for (const url of this.getAdditionalPluginsURLs()) {
          if (!url || !this.validateURL(url)) {
            continue;
          }

          const response = await fetch(url);
          const data = await response.json();
          await processResponse(data);
        }
      }
  
      await this.checkForUpdates();
    } catch (error: any) {
      logger.error(`Error fetching plugins: ${error.message}`);
      getEvenBetterAPI().toast.showToast({
        message: `Error fetching plugins: ${error.message}`,
        type: "error",
      });
    }
  }

  private validateURL(url: string) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  // TODO: i probably should do some caching here, this function is called a lot
  async getInstalledPlugin(
    plugin: CaidoPlugin
  ): Promise<CaidoInstalledPlugin | null> {
    try {
      const data = await getCaidoAPI().graphql.pluginPackages();

      const installedPlugin = data.pluginPackages.filter(
        (installedPackage) =>
          installedPackage.manifestId === plugin.manifestPackageID
      )[0];

      if (!installedPlugin) {
        return null;
      }

      return {
        installedVersion: installedPlugin.version,
        packageID: installedPlugin.id,
      };
    } catch (error) {
      console.error("Error checking if plugin is installed:", error);
      return null;
    }
  }

  onNewPlugin(callback: (plugin: CaidoPlugin) => void) {
    this.callbacks.push(callback);
  }
}
