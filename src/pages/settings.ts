import EvenBetterAPI from "@bebiks/evenbetter-api";
import loadCSS from "@bebiks/evenbetter-api/src/css";
import settingsCSS from "./settings.css";
import {
  CURRENT_VERSION,
  EXTENSIONS_JS_FILE,
  EXTENSIONS_URL,
  VERSION_CHECK_URL,
} from "../constants";
import { Caido } from "@caido/sdk-frontend";

const updateViewerSettings = async (js: string) => {
  const viewerSettings = await fetchUserSettings();
  if (!viewerSettings) return;

  const newViewerSettings = {
    input: {
      data: viewerSettings.data,
      migrations: viewerSettings.migrations,
    },
  };

  newViewerSettings.input.data.js = js;

  return Caido.graphql.updateViewerSettings(newViewerSettings);
};

const fetchUserSettings = async () => {
  return await Caido.graphql.userSettings().then((data) => {
    return data.viewer.settings;
  });
};

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

export const SettingsPageBody = () => {
  loadCSS({ id: "eb-extensions-settings", cssText: settingsCSS.toString() });

  const bodyContent = document.createElement("div");
  bodyContent.classList.add("eb-extensions__settings");
  bodyContent.innerHTML = `
    <div class="eb-extensions__settings-header">
        <div style="font-weight: 600; font-size: 17px;">
            EvenBetter: Extensions ${CURRENT_VERSION} - Settings
        </div>
        <div style="color: var(--c-fg-subtle); font-size: 15px;">
            Configure EvenBetter: Extensions settings. Here you can toggle auto-updates, notifications and more.
        </div>
    </div>
    <div class="eb-extensions__settings-content">
        <div class="eb-extensions__settings--group">
            <div class="eb-extensions__setting-title">Extensions</div>
            <div class="eb-extensions__setting">
                <div class="eb-extensions__setting-checkbox" data-key="auto-update">
                </div>
                <div class="eb-extensions__setting-label">
                    Auto-update extensions: Never miss an update - automatically update installed extensions when new versions are available.
                </div>
            </div>
            <div class="eb-extensions__setting">
                <div class="eb-extensions__setting-checkbox" data-key="show-notifications">
                </div>
                <div class="eb-extensions__setting-label">
                    Show notifications: Show notifications when new versions of installed extensions are available.
                </div>
            </div>
        </div>
        <div class="eb-extensions__settings--group">
            <div class="eb-extensions__setting-title">EvenBetter: Extensions</div>
            <div class="eb-extensions__setting">
                <div class="eb-extensions__setting-checkbox" data-key="show-update-notification">
                </div>
                <div class="eb-extensions__setting-label">
                    Show update notification: Show notification when new version of EvenBetter: Extensions is available.
                </div>
            </div>
            <div class="eb-extensions__setting eb-extensions__textinput-setting">
              <div class="eb-extensions__setting-label">
                URL to fetch extensions from:
              </div>
              <div class="eb-extensions__setting-textinput" data-key="extensions-url">
              </div>
          </div>
        </div>
    </div>
  `;

  if (localStorage.getItem("eb-show-updated-notification") === "true") {
    EvenBetterAPI.toast.showToast({
      message: "EvenBetter: Extensions updated successfully!",
      duration: 3500,
      position: "bottom",
      type: "success",
    });
    localStorage.removeItem("eb-show-updated-notification");
  }

  checkForUpdates().then((response) => {
    if (!response.isLatest) {
      const updateButton = Caido.ui.button({
        label: "Update now",
        variant: "primary",
        size: "small",
      });

      updateButton.addEventListener("click", async () => {
        const newJS = await fetch(EXTENSIONS_JS_FILE).then((res) => res.text());
        await updateViewerSettings(newJS);
        localStorage.setItem("eb-show-updated-notification", "true");

        setTimeout(() => {
          localStorage.setItem("previousPage", location.hash);
          location.reload();
        }, 250);
      });

      if (localStorage.getItem("eb-show-update-notification") === "true") {
        EvenBetterAPI.toast.showToast({
          message:
            "New EvenBetter Extensions version available. Go to Extensions -> Settings to update.",
          duration: 3500,
          position: "bottom",
          type: "info",
        });
      }

      bodyContent
        .querySelector(".eb-extensions__settings-content")
        .prepend(updateButton);
    }
  });

  bodyContent
    .querySelectorAll(".eb-extensions__setting-checkbox")
    .forEach((checkbox) => {
      const key = checkbox.getAttribute("data-key");
      const isChecked = localStorage.getItem(`eb-${key}`) === "true";

      const caidoCheckbox = EvenBetterAPI.components.createCheckbox();
      const input = caidoCheckbox.querySelector(
        'input[type="checkbox"]'
      ) as HTMLInputElement;
      input.checked = isChecked;

      checkbox.appendChild(caidoCheckbox);
      checkbox.addEventListener("change", () => {
        localStorage.setItem(`eb-${key}`, input.checked ? "true" : "false");
      });
    });

  bodyContent
    .querySelectorAll(".eb-extensions__setting-textinput")
    .forEach((textinput) => {
      const key = textinput.getAttribute("data-key");
      let value = localStorage.getItem(`eb-${key}`);
      if (!value) {
        localStorage.setItem(`eb-${key}`, EXTENSIONS_URL);
        value = EXTENSIONS_URL;
      }

      const caidoTextinput = EvenBetterAPI.components.createTextInput("50em");
      const input = caidoTextinput.querySelector("input") as HTMLInputElement;
      input.value = value;

      textinput.appendChild(caidoTextinput);
      textinput.addEventListener("change", () => {
        localStorage.setItem(`eb-${key}`, input.value);
      });
    });

  // button to restart to default settings
  const resetButton = Caido.ui.button({
    label: "Reset settings",
    variant: "tertiary",
    size: "small",
  });

  resetButton.addEventListener("click", () => {
    localStorage.setItem("eb-auto-update", "false");
    localStorage.setItem("eb-show-notifications", "true");
    localStorage.setItem("eb-show-update-notification", "true");
    localStorage.setItem("eb-extensions-url", EXTENSIONS_URL);

    syncInputs(bodyContent);
  });

  bodyContent.appendChild(resetButton);

  return bodyContent;
};

const syncInputs = (bodyContent: HTMLElement) => {
  bodyContent
    .querySelectorAll(".eb-extensions__setting-checkbox")
    .forEach((checkbox) => {
      const key = checkbox.getAttribute("data-key");
      const isChecked = localStorage.getItem(`eb-${key}`) === "true";

      const input = checkbox.querySelector(
        'input[type="checkbox"]'
      ) as HTMLInputElement;
      input.checked = isChecked;
    });

  bodyContent
    .querySelectorAll(".eb-extensions__setting-textinput")
    .forEach((textinput) => {
      const key = textinput.getAttribute("data-key");
      const value = localStorage.getItem(`eb-${key}`);

      const input = textinput.querySelector("input") as HTMLInputElement;
      input.value = value;
    });
};
