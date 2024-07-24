import type { Caido } from "@caido/sdk-frontend";
import { EvenBetterAPI } from "@bebiks/evenbetter-api";
import { getEvenBetterAPI, setEvenBetterAPI } from "./utils/evenbetterapi";
import { getCaidoAPI, setCaidoAPI } from "./utils/caidoapi";
import { customPluginsPage } from "./pages";
import { logger } from "./utils/logger";
import { PluginsManager } from "./plugins";
import { LibraryPage } from "./pages/library/library";
import { SettingsPage } from "./pages/settings/settings";
import { PageOpenEvent } from "@bebiks/evenbetter-api/src/events/onPageOpen";
import { getSetting } from "@bebiks/evenbetter-api/src/storage";

const CURRENT_VERSION = "2.1.0";
export const init = (caido: Caido) => {
  setCaidoAPI(caido);

  const evenBetterAPI = new EvenBetterAPI(caido, {
    manifestID: "evenbetter-extensions",
    name: "EvenBetter: Extensions",
  });

  setEvenBetterAPI(evenBetterAPI);

  evenBetterAPI.eventManager.on("onPageOpen", (data: PageOpenEvent) => {
    if (data.oldUrl !== "") {
      localStorage.setItem("ebe:previousPath", data.newUrl);
    }
  });

  evenBetterAPI.eventManager.on("onCaidoLoad", () => {
    const previousPath = localStorage.getItem("ebe:previousPath");
    if (previousPath) {
      caido.navigation.goTo(previousPath.slice(1));
      localStorage.removeItem("ebe:previousPath");
    }
  });

  const pluginsManager = new PluginsManager();

  customPluginsPage();

  const libraryPage = new LibraryPage(pluginsManager);
  libraryPage.init();

  const settingsPage = new SettingsPage(pluginsManager);
  settingsPage.init();

  pluginsManager.fetchPlugins();

  if (localStorage.getItem("ebe:migrateAttempt")) {
    localStorage.removeItem("ebe:migrateAttempt");

    evenBetterAPI.toast.showToast({
      message:
        "Successfully migrated EvenBetter: Extensions to the new Caido plugin system!",
      duration: 5000,
    });
  }

  checkUpdates();

  logger.info("EvenBetterExtensions initialized");
};


const MANIFEST_URL = "https://raw.githubusercontent.com/bebiksior/EvenBetterExtensions/main/manifest.json"
const checkUpdates = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if(!getSetting("show-update-notifications")) return;

  const response = await fetch(MANIFEST_URL);
  const manifest = await response.json();
  
  if (manifest.version !== CURRENT_VERSION) {
    const modalBody = document.createElement("div");
    modalBody.innerHTML = `A new version of EvenBetter: Extensions is available!`;
    modalBody.innerHTML += `<br>Current version: ${CURRENT_VERSION}`;
    modalBody.innerHTML += `<br>New version: ${manifest.version}`;
    modalBody.innerHTML += `<br><br>To update, download the latest plugin.zip file from the Releases page, in your Caido go to the Plugins page, uninstall the current version and install the new one.`;

    const goToReleasesButton = getCaidoAPI().ui.button({
      label: "Go to Releases",
      variant: "primary",
      size: "small",
    })
    
    goToReleasesButton.addEventListener("click", () => {
      getEvenBetterAPI().helpers.openInBrowser("https://github.com/bebiksior/EvenBetterExtensions/releases")
    })

    modalBody.style.display = "flex"
    modalBody.style.flexDirection = "column"
    modalBody.style.gap = "10px"
    modalBody.style.fontSize = "15px"

    modalBody.appendChild(goToReleasesButton)
    
    getEvenBetterAPI().modal.openModal({
      title: "New version available!",
      content: modalBody
    })
  }
}