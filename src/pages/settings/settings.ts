import { InputType, SettingsPageOptions } from "@bebiks/evenbetter-api/src/templates/settingsPage/types";
import { PluginsManager } from "../../plugins";
import { getCaidoAPI } from "../../utils/caidoapi";
import { getEvenBetterAPI } from "../../utils/evenbetterapi";
import "./settings.css";

export class SettingsPage {
  private pluginsManager: PluginsManager;

  constructor(pluginsManager: PluginsManager) {
    this.pluginsManager = pluginsManager;
  }

  public init() {
    getCaidoAPI().navigation.addPage("/plugins/settings", {
      body: this.createSettingsBody(),
    });

    getCaidoAPI().commands.register("plugins:settings", {
      name: "Plugins: Settings",
      group: "EvenBetter: Navigation",
      run: () => {
        getCaidoAPI().navigation.goTo("/plugins/settings");
      },
    });

    getCaidoAPI().commandPalette.register("plugins:settings");
  }

  private createSettingsBody(): HTMLElement {
    const container = document.createElement("div");
    container.classList.add("eb-plugins-settings");
    container.appendChild(this.createNavigation());
    container.appendChild(this.createContent());
    return container;
  }

  private createNavigation(): HTMLElement {
    const caidoAPI = getCaidoAPI();
    const evenBetterAPI = getEvenBetterAPI();

    const contributeButton = caidoAPI.ui.button({
      label: "Contribute",
      size: "small",
      variant: "primary",
      leadingIcon: "fas fa-plus",
    });

    contributeButton.addEventListener("click", () => {
      evenBetterAPI.helpers.openInBrowser(
        "https://github.com/bebiksior/EvenBetterExtensions"
      );
    });

    const pluginsNavigationBar = evenBetterAPI.components.createNavigationBar({
      title: "Plugins",
      items: [
        {
          title: "Installed",
          url: "#/plugins",
          icon: "fa-plug",
          sidebarItemName: "Plugins",
        },
        {
          title: "Library",
          url: "#/plugins/library",
          icon: "fa-download",
          sidebarItemName: "Plugins",
        },
        {
          title: "Settings",
          url: "#/plugins/settings",
          icon: "fa-cog",
          sidebarItemName: "Plugins",
        },
      ],
      customButtons: [contributeButton],
    });

    pluginsNavigationBar.id = "plugins-navigation-bar";
    return pluginsNavigationBar;
  }

  private createContent(): HTMLElement {
    const container = document.createElement("div");
    container.classList.add("eb-plugins-settings__content");

    const options: SettingsPageOptions = {
      title: "EvenBetter: Extensions Settings",
      description: "Configure EvenBetter: Extensions settings. Here you can toggle auto-updates, notifications and more.",
      inputGroups: [
        {
          width: "100%",
          groupName: "Extensions",
          groupDescription: "Configure extensions settings.",
          separateWithLine: true,
          inputs: [
            { type: InputType.CHECKBOX, labelAsHTML: true, label: "<b>Auto-update extensions:</b> Never miss an update - automatically update installed extensions when new versions are available.", id: "auto-updates", defaultValue: 'false' },
            { type: InputType.CHECKBOX, labelAsHTML: true, label: "<b>Enable notifications:</b> Get notified about new extensions, updates and more.", id: "notifications", defaultValue: 'true' },
          ],
        },
        {
          width: "100%",
          groupName: "EvenBetter: Extensions",
          groupDescription: "Configure settings for EvenBetter: Extensions.",
          separateWithLine: true,
          inputs: [
            { type: InputType.CHECKBOX, labelAsHTML: true, label: "<b>Show update notifications:</b> Get notified when new versions of EvenBetter: Extensions are available.", id: "show-update-notifications", defaultValue: 'true' },
            { type: InputType.TEXT, labelAsHTML: true, label: "<b>URL to fetch extensions from:</b>", id: "extensions-url", defaultValue: this.pluginsManager.getMainPluginsURL() },
            { type: InputType.TEXT, labelAsHTML: true, label: "<b>Additional URLs (splitted by comma) to fetch extensions from:</b>", id: "additional-extensions-urls", defaultValue: "" },
          ],
        }
      ],
    };

    const settingsPage =
      getEvenBetterAPI().templates.createSettingsPage(options);

    container.appendChild(settingsPage.render());
    return container;
  }
}
