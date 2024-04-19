import { Caido } from "@caido/sdk-frontend";
import { ExtensionsPage, ExtensionSubPage } from "./pages";
import EvenBetterAPI from "@evenbetter/evenbetter-api";
import extensionsManager from "./extensions";
import { OnExtensionLoad } from "./events/onExtensionLoad";
import { escapeHTML } from "./utils/index";
import { PageOpenEvent } from "@evenbetter/evenbetter-api/src/events/onPageOpen";
import styles from "./style.css";
import loadCSS from "@evenbetter/evenbetter-api/src/css";
import { CURRENT_VERSION, VERSION_CHECK_URL } from "./constants";

function setDefaultValues() {
  if (!localStorage.getItem("eb-show-notifications")) {
    localStorage.setItem("eb-show-notifications", "true");
  }

  if (!localStorage.getItem("eb-show-update-notification")) {
    localStorage.setItem("eb-show-update-notification", "true");
  }
}

function setupEventListeners() {
  EvenBetterAPI.eventManager.on("onSettingsTabOpen", (data) => {
    switch (data) {
      case "developer":
        const jsSaveButton = document.querySelector(".c-custom-js__footer");
        jsSaveButton.removeEventListener("click", reloadPage);
        jsSaveButton.addEventListener("click", reloadPage);
    }
  });

  EvenBetterAPI.eventManager.on("onPageOpen", (data: PageOpenEvent) => {
    const extensionsSidebarItems = Array.from(
      document.querySelectorAll(".c-sidebar-item")
    ).filter((item) => item.textContent == "Extensions");
    if (extensionsSidebarItems.length == 0) return;

    const extensionsSidebarItem = extensionsSidebarItems[0] as HTMLElement;
    extensionsSidebarItem.setAttribute(
      "data-is-active",
      data.newUrl.startsWith("#/extensions/") ? "true" : "false"
    );
  });
}

function registerExtensionsPages() {
  Caido.navigation.addPage("/extensions/all", {
    body: ExtensionsPage(ExtensionSubPage.ALL),
  });
  Caido.navigation.addPage("/extensions/installed", {
    body: ExtensionsPage(ExtensionSubPage.INSTALLED),
  });
  Caido.navigation.addPage("/extensions/custom", {
    body: ExtensionsPage(ExtensionSubPage.CUSTOM),
  });
  Caido.navigation.addPage("/extensions/settings", {
    body: ExtensionsPage(ExtensionSubPage.SETTINGS),
  });
}

function registerSidebarItem() {
  Caido.sidebar.registerItem("Extensions", "/extensions/all", {
    icon: "fas fa-puzzle-piece",
    group: "EvenBetter",
  });
}

function registerCommands() {
  Caido.commands.register("eb:openExtensionsPage", {
    name: "Go to Extensions",
    group: "EvenBetter: Navigation",
    run: () => {
      Caido.navigation.goTo("/extensions/all");
    },
  });
  Caido.commandPalette.register("eb:openExtensionsPage");
}

async function checkForUpdates() {
  try {
    const response = await fetch(VERSION_CHECK_URL, {
      cache: "no-store",
    });
    const latestVersion = await response.text();

    const latestVersionNumber = parseFloat(latestVersion.replace("v", ""));
    const currentVersionNumber = parseFloat(CURRENT_VERSION.replace("v", ""));

    if (currentVersionNumber > latestVersionNumber) {
      return {
        isLatest: true,
        message: `You are using a development version: ${CURRENT_VERSION}.`,
      };
    }

    if (latestVersion.trim() === CURRENT_VERSION) {
      return {
        isLatest: true,
        message: "You are using the latest version! 🎉",
      };
    } else {
      return {
        isLatest: false,
        message: `New EvenBetter Extensions version available: ${latestVersion}.`,
        latestVersion: latestVersion,
      };
    }
  } catch (error) {
    return {
      isLatest: false,
      message: "Failed to check for updates",
    };
  }
}

async function onCaidoLoad() {
  loadCSS({
    id: "eb-extensions",
    cssText: styles.toString(),
  });
  setDefaultValues();

  const onExtensionLoad = new OnExtensionLoad();
  EvenBetterAPI.eventManager.registerEvent("onExtensionLoad", onExtensionLoad);

  registerExtensionsPages();
  registerCommands();
  registerSidebarItem();
  setupEventListeners();

  if (localStorage.getItem("eb-message-onload")) {
    EvenBetterAPI.modal.openModal({
      title: "EvenBetter Extensions",
      content: escapeHTML(localStorage.getItem("eb-message-onload")),
    });
    localStorage.removeItem("eb-message-onload");
  }

  if (location.hash == "#/settings/developer") {
    const jsSaveButton = document.querySelector(".c-custom-js__footer");
    jsSaveButton.removeEventListener("click", reloadPage);
    jsSaveButton.addEventListener("click", reloadPage);
  }

  const extensions = await extensionsManager.initExtensions();
  extensions.forEach((extension) => {
    const installedExtension = extensionsManager.getInstalledExtension(
      extension.id
    );
    if (!installedExtension) return;
    if (installedExtension.installedVersion != extension.latestVersion) {
      console.log(
        `New version available for extension ${extension.id}: ${extension.latestVersion}`
      );
      if (localStorage.getItem("eb-auto-update") === "true") {
        localStorage.setItem(
          `eb-message-onload`,
          `Auto-updated extension ${extension.name} to version ${extension.latestVersion}. If you want to disable auto-updates, go to Extensions -> Settings.`
        );
        extensionsManager.updateExtension(installedExtension.extensionID);
      }
      if (localStorage.getItem("eb-show-notifications") === "true") {
        EvenBetterAPI.modal.openModal({
          title: "New extension version available",
          content: `New version available for extension <b style='color:var(--c-fg-default);'>${extension.name}</b> (<span style='color:var(--c-bg-danger);'>${installedExtension.installedVersion}</span> -> <span style='color:var(--c-bg-success);'>${extension.latestVersion}</span>).`,
        });
      }
    }
  });
  EvenBetterAPI.eventManager.triggerEvent("onExtensionLoad");

  if (localStorage.getItem("eb-show-update-notification") === "true") {
    const response = await checkForUpdates();
    if (!response.isLatest) {
      EvenBetterAPI.modal.openModal({
        title: `EvenBetter Extensions: Update from ${CURRENT_VERSION} to ${response.latestVersion}`,
        content:
          "You are using an outdated version of EvenBetter Extensions. Please update to the latest version on http://github.com/bebiksior/EvenBetterExtensions.",
      });
    }
  }

  if (localStorage.getItem("previousPage")) {
    const previousPage = localStorage.getItem("previousPage").split("#")[1];

    console.log("Restoring previous path: " + previousPage);
    Caido.navigation.goTo(previousPage);
    localStorage.removeItem("previousPage");
  }
}

const reloadPage = () => {
  setTimeout(() => {
    location.reload();
  }, 250);
};

extensionsManager.loadInstalledExtensions();
extensionsManager.getInstalledExtensions().forEach((installedExtension) => {
  console.log("Running extension: " + installedExtension.extensionID);
  extensionsManager.runExtension(installedExtension.extensionID);
});

EvenBetterAPI.eventManager.on("onCaidoLoad", () => {
  onCaidoLoad();
});
