import EvenBetterAPI from "@evenbetter/evenbetter-api";
import loadCSS from "@evenbetter/evenbetter-api/src/css";
import settingsCSS from "./settings.css";

export const SettingsPageBody = () => {
  loadCSS({ id: "eb-extensions-settings", cssText: settingsCSS.toString() });
  const bodyContent = document.createElement("div");
  bodyContent.classList.add("eb-extensions__settings");
  bodyContent.innerHTML = `
    <div class="eb-extensions__settings-header">
        <div style="font-weight: 600; font-size: 17px;">
            EvenBetter: Extensions - Settings
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
        </div>
    </div>
  `;

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

  return bodyContent;
};
