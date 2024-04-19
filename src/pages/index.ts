import { Caido } from "@caido/sdk-frontend";
import EvenBetterAPI from "@bebiks/evenbetter-api";
import { escapeHTML } from "../utils";
import extensionsManager, { Extension } from "../extensions";
import { SettingsPageBody } from "./settings";
import { PageOpenEvent } from "@bebiks/evenbetter-api/src/events/onPageOpen";
import { TableAPI } from "@bebiks/evenbetter-api/src/components/table";

export enum ExtensionSubPage {
  ALL = "all",
  INSTALLED = "installed",
  CUSTOM = "custom",
  SETTINGS = "settings",
}

const extensionTables = new Map<ExtensionSubPage, TableAPI>();
export const ExtensionsPage = (subPage: ExtensionSubPage) => {
  const page = document.createElement("div");
  page.style.height = "100%";
  page.innerHTML = `
    <div class="eb-extensions">
      <div class="eb-extensions__content">
      </div>
    </div>
  `;

  const ebExtensions = page.querySelector(".eb-extensions");
  if (!ebExtensions) return page;

  const extensionsTableColumns = [
    { name: "Name", width: "25em" },
    { name: "Version", width: "9em" },
    { name: "Description", width: "30em" },
    { name: "Author", width: "9em" },
    { name: "Actions", width: "13em" },
  ];

  const extensionsTable = EvenBetterAPI.components.createTable({
    columns: extensionsTableColumns,
    tableHeight: "100%",
  });
  extensionTables.set(subPage, extensionsTable);

  const customButtons = [];
  customButtons.push(refreshButton(subPage));
  if (subPage === ExtensionSubPage.CUSTOM) {
    customButtons.push(importButton(subPage));
  }

  const navigationBar = EvenBetterAPI.components.createNavigationBar({
    title: "Extensions",
    items: [
      { title: "All", url: "#/extensions/all", icon: "fa-globe" },
      {
        title: "Installed",
        url: "#/extensions/installed",
        icon: "fa-download",
      },
      { title: "Custom", url: "#/extensions/custom", icon: "fa-wrench" },
      { title: "Settings", url: "#/extensions/settings", icon: "fa-cog" },
    ],
    customButtons: customButtons,
  });
  ebExtensions.prepend(navigationBar);

  if (subPage === ExtensionSubPage.SETTINGS) {
    ebExtensions
      .querySelector(".eb-extensions__content")
      .appendChild(SettingsPageBody());
    return page;
  }

  EvenBetterAPI.eventManager.on("onPageOpen", (data: PageOpenEvent) => {
    if (data.newUrl.startsWith("#/extensions/")) {
      refreshExtensionsTable(subPage);
    }
  });

  const libraryElement = document.createElement("div");
  libraryElement.classList.add("eb-extensions__library");
  ebExtensions
    .querySelector(".eb-extensions__content")
    .appendChild(libraryElement);

  if (libraryElement) {
    libraryElement.appendChild(extensionsTable.getHTMLElement());
  }

  return page;
};

const importButton = (subPage: ExtensionSubPage) => {
  const importButton = Caido.ui.button({
    label: "Import",
    variant: "tertiary",
    leadingIcon: "fas fa-file-import",
    size: "small",
  });

  importButton.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const extension = JSON.parse(reader.result as string) as Extension;
          if (!extension) return;

          await extensionsManager.importCustomExtension(extension);
          refreshExtensionsTable(subPage);
        } catch (error) {
          EvenBetterAPI.modal.openModal({
            title: "Error importing extension",
            content: error.toString(),
          });
        }
      };

      reader.readAsText(file);
    });
  });

  return importButton;
};

const refreshButton = (subPage: ExtensionSubPage) => {
  const refreshButton = Caido.ui.button({
    label: "Refresh",
    variant: "primary",
    leadingIcon: "fas fa-sync",
    size: "small",
  });

  refreshButton.addEventListener("click", async () => {
    await extensionsManager.initExtensions();
    refreshExtensionsTable(subPage);
  });

  return refreshButton;
};

const refreshExtensionsTable = (subPage: ExtensionSubPage) => {
  if (!extensionTables.get(subPage)) return;
  const extensionsTable = extensionTables.get(subPage);
  extensionsTable.clearRows();

  extensionsManager.getExtensions().forEach((extension) => {
    if (
      subPage === ExtensionSubPage.INSTALLED &&
      !extensionsManager.isExtensionInstalled(extension.id)
    )
      return;
    if (subPage === ExtensionSubPage.CUSTOM && !extension.isCustom) return;

    const installedVersion =
      extensionsManager.getInstalledExtension(extension.id)?.installedVersion ||
      "-";

    let version =
      extension.latestVersion === installedVersion
        ? extension.latestVersion
        : `${installedVersion} (<span style='color:var(--c-bg-success);'>${extension.latestVersion}</span>)`;

    if (installedVersion === "-") {
      version = extension.latestVersion;
    }
    
    extensionsTable.addRow(
      [
        {
          columnName: "Name",
          value: textElement(extension.name),
        },
        {
          columnName: "Version",
          value: textElement(version),
        },
        {
          columnName: "Description",
          value: textElement(extension.description),
        },
        {
          columnName: "Author",
          value: textElement(extension.author),
        },
        {
          columnName: "Actions",
          value: actionsElement(extension, subPage),
        },
      ],
      () => {
        EvenBetterAPI.modal.openModal({
          title: extension.name,
          content: `<div class="eb-extensions__modal">
              <div class="eb-extensions__modal-description">
                <div class="eb-extensions__modal-key">
                  Description
                </div>
                <div class="eb-extensions__modal-value">
                  ${escapeHTML(extension.description)}
                </div>
              </div>
              <div class="eb-extensions__modal-author">
                <div class="eb-extensions__modal-key">
                  Author
                </div>
                <div class="eb-extensions__modal-value">
                  ${escapeHTML(extension.author)}
                </div>
              </div>
              <div class="eb-extensions__modal-url">
                <div class="eb-extensions__modal-key">
                  URL
                </div>
                <div class="eb-extensions__modal-value">
                  <a href="${escapeHTML(
                    extension.url
                  )}" target="_blank">${escapeHTML(extension.url)}</a>
                </div>
              </div>
              
              ${
                installedVersion !== "-"
                  ? `
                  <div class="eb-extensions__modal-installed">
                    <div class="eb-extensions__modal-key">
                      Installed Version
                    </div>
                    <div class="eb-extensions__modal-value">
                      ${escapeHTML(installedVersion)}
                    </div>
                  </div>
              `
                  : ""
              }

              <div class="eb-extensions__modal-latest">
                <div class="eb-extensions__modal-key">
                  Latest Version
                </div>
                <div class="eb-extensions__modal-value">
                  ${escapeHTML(extension.latestVersion)}
                </div>
              </div>
            </div>`,
        });
      }
    );
  });
};

const actionsElement = (extension: Extension, subPage: ExtensionSubPage) => {
  const extensionID = extension.id;

  const actions = document.createElement("div");
  actions.innerHTML = `
    <div class="evenbetter-table-actions">
        <div class="evenbetter-table-actions__select">
            <div class="c-evenbetter_button" id="eb-install-ext" data-size="small" data-block="true" data-variant="secondary" data-outline="true" data-plain="false" style="--9bad4558: center;">
                <div class="formkit-outer" data-family="button" data-type="button" data-empty="true">
                    <div class="formkit-wrapper">
                        <button class="formkit-input c-evenbetter_button__input" type="button" name="button_82" id="input_83">
                            <div class="c-evenbetter_button__label">
                                Install
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  if (extension?.isCustom) {
    const deleteButton = Caido.ui.button({
      label: "Delete",
      variant: "primary",
      size: "small",
      leadingIcon: "fas fa-trash",
    });

    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();

      extensionsManager.deleteCustomExtension(extension.id);

      refreshExtensionsTable(subPage);
    });

    actions
      .querySelector(".evenbetter-table-actions")
      .appendChild(deleteButton);
  }

  const installButton = actions.querySelector("#eb-install-ext") as HTMLElement;
  if (!installButton) return actions;

  let isInstalling = false;
  installButton.addEventListener("click", async (e) => {
    e.stopPropagation();
    if (isInstalling) return;

    const installedExtension =
      extensionsManager.getInstalledExtension(extensionID);
    if (installedExtension) {
      const result = await extensionsManager.checkForUpdates(extensionID);

      if (!result.isLatest) {
        isInstalling = true;

        await extensionsManager.updateExtension(extensionID);

        isInstalling = false;
        return;
      }

      extensionsManager.uninstallExtension(extensionID);
      return;
    }

    isInstalling = true;
    await extensionsManager.installExtension(extensionID);
    isInstalling = false;
  });

  if (extensionsManager.isExtensionInstalled(extensionID)) {
    switchToUninstall(installButton);
  }

  const installedExtension =
    extensionsManager.getInstalledExtension(extensionID);
  if (
    installedExtension &&
    extension.latestVersion !== installedExtension.installedVersion
  ) {
    switchToUpdate(installButton);
  }

  return actions;
};

const switchToUninstall = (button: HTMLElement) => {
  const label = button.querySelector(
    ".c-evenbetter_button__label"
  ) as HTMLElement;
  if (label) {
    label.innerText = "Uninstall";
    label.classList.add("c-evenbetter_button__label--uninstall");
  }

  const input = button.querySelector(
    ".c-evenbetter_button__input"
  ) as HTMLElement;
  if (input) {
    input.classList.add("c-evenbetter_button__input--uninstall");
  }
};

const switchToUpdate = (button: HTMLElement) => {
  const label = button.querySelector(
    ".c-evenbetter_button__label"
  ) as HTMLElement;
  if (label) {
    label.innerText = "Update";
    label.classList.remove("c-evenbetter_button__label--uninstall");
    label.classList.add("c-evenbetter_button__label--update");
  }

  const input = button.querySelector(
    ".c-evenbetter_button__input"
  ) as HTMLElement;
  if (input) {
    input.classList.remove("c-evenbetter_button__input--uninstall");
    input.classList.add("c-evenbetter_button__input--update");
  }
};

const textElement = (text: string) => {
  const element = document.createElement("span");
  element.innerHTML = text;
  return element;
};
