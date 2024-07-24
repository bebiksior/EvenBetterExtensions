import { TableAPI } from "@bebiks/evenbetter-api/src/components/table";
import { PluginsManager } from "../../plugins";
import { CaidoPlugin } from "../../plugins/types";
import { getCaidoAPI } from "../../utils/caidoapi";
import { getEvenBetterAPI } from "../../utils/evenbetterapi";
import "./library.css";

const EXPANDED_SVG = `<button class="p-row-toggler p-link" type="button" aria-expanded="true" aria-controls="pv_id_10_0_expansion" aria-label="Row Expanded" data-pc-section="rowtoggler" data-pc-group-section="rowactionbutton"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-row-toggler-icon" aria-hidden="true" data-pc-section="rowtogglericon"><path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path></svg></button>`;
const COLLAPSED_SVG = `<svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-row-toggler-icon" aria-hidden="true" data-pc-section="rowtogglericon" viewbox="0 0 14 14"><path d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z" fill="currentColor"></path></svg>`;

const pluginArrowElement = (plugin: CaidoPlugin) => {
  const button = document.createElement("button");

  button.classList.add("p-row-toggler", "p-link");
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", "pv_id_7_0_expansion");
  button.setAttribute("aria-label", "Row Collapsed");
  button.setAttribute("data-pc-section", "rowtoggler");
  button.setAttribute("data-pc-group-section", "rowactionbutton");
  button.innerHTML = COLLAPSED_SVG;

  let isExpanded = false;
  const toggleArrow = () => {
    isExpanded = !isExpanded;
    button.setAttribute("aria-expanded", isExpanded.toString());
    button.innerHTML = isExpanded ? EXPANDED_SVG : COLLAPSED_SVG;
  };

  button.addEventListener("click", (event) => {
    event.preventDefault();

    if (isExpanded) {
      const target = event.target as HTMLElement;
      const tr = target.closest("tr");
      if (tr) {
        tr.nextElementSibling?.remove();
        toggleArrow();
      }
    } else {
      const target = event.target as HTMLElement;
      const tr = target.closest("tr");
      if (tr) {
        tr.after(pluginExpansionElement(plugin));
        toggleArrow();
      }
    }
  });

  return button;
};

const pluginExpansionElement = (plugin: CaidoPlugin) => {
  const tr = document.createElement("tr");
  tr.className = "p-datatable-row-expansion";
  tr.setAttribute("role", "row");
  tr.setAttribute("data-pc-section", "rowexpansion");

  const td = document.createElement("td");
  td.colSpan = 6;
  td.setAttribute("data-pc-section", "rowexpansioncell");

  const divTableExpansion = document.createElement("div");
  divTableExpansion.className = "c-table-expansion";

  const divMeta = document.createElement("div");
  divMeta.className = "c-table-expansion__meta";

  const h3Website = document.createElement("h3");
  h3Website.textContent = "Website";

  const aWebsite = document.createElement("a") as HTMLAnchorElement;
  aWebsite.href = plugin.author.url;
  aWebsite.textContent = plugin.author.url;

  const h3Description = document.createElement("h3");
  h3Description.textContent = "Description";

  const pDescription = document.createElement("p");
  pDescription.textContent = plugin.description;

  aWebsite.addEventListener("click", (event) => {
    event.preventDefault();

    getEvenBetterAPI().helpers.openInBrowser(plugin.author.url);
  });

  divMeta.appendChild(h3Website);
  divMeta.appendChild(aWebsite);

  divMeta.appendChild(h3Description);
  divMeta.appendChild(pDescription);

  const divPlugins = document.createElement("div");
  divPlugins.className = "c-table-expansion__plugins";

  divTableExpansion.appendChild(divMeta);
  divTableExpansion.appendChild(divPlugins);
  td.appendChild(divTableExpansion);
  tr.appendChild(td);

  return tr;
};

export class LibraryPage {
  private pluginsManager: PluginsManager;
  private table: TableAPI;

  constructor(pluginsManager: PluginsManager) {
    this.pluginsManager = pluginsManager;
    this.table = getEvenBetterAPI().components.createTable({
      columns: [
        { name: "", width: "3rem" },
        { name: "Name" },
        { name: "Description" },
        { name: "Author" },
        { name: "Version" },
        { name: "Actions" },
      ],
    });
  }

  public init() {
    getCaidoAPI().navigation.addPage("/plugins/library", {
      body: this.createLibraryBody(),
    });

    getCaidoAPI().commands.register("plugins:library", {
      name: "Plugins: Library",
      group: "EvenBetter: Navigation",
      run: () => {
        getCaidoAPI().navigation.goTo("/plugins/library");
      },
    });

    getCaidoAPI().commandPalette.register("plugins:library");
  }

  private createLibraryBody(): HTMLElement {
    const container = document.createElement("div");
    container.classList.add("eb-plugins-library");
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

    const refreshButton = caidoAPI.ui.button({
      label: "Refresh",
      size: "small",
      variant: "tertiary",
      leadingIcon: "fas fa-sync",
    });

    refreshButton.setAttribute("data-outline", "true");

    refreshButton.addEventListener("click", () => {
      this.table.clearRows();
      this.pluginsManager.fetchPlugins();
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
      customButtons: [refreshButton, contributeButton],
    });

    pluginsNavigationBar.id = "plugins-navigation-bar";
    return pluginsNavigationBar;
  }

  private getInstallElement(plugin: CaidoPlugin) {
    const installButton = getCaidoAPI().ui.button({
      label: "Install",
      size: "small",
      variant: "primary",
      leadingIcon: "fas fa-download",
    });

    installButton.addEventListener("click", async () => {
      installButton.setAttribute("data-disabled", "true");
      await this.pluginsManager.installPlugin(plugin);
    });

    return installButton;
  }

  private getUpdateElement(plugin: CaidoPlugin) {
    const updateButton = getCaidoAPI().ui.button({
      label: "Update",
      size: "small",
      variant: "primary",
      leadingIcon: "fas fa-download",
    });

    updateButton.setAttribute("data-variant", "danger");
    updateButton.setAttribute("data-outline", "true");

    updateButton.addEventListener("click", async () => {
      updateButton.setAttribute("data-disabled", "true");
      await this.pluginsManager.updatePlugin(plugin);
    });

    return updateButton;
  }

  private getUninstallElement(plugin: CaidoPlugin) {
    const uninstallButton = getCaidoAPI().ui.button({
      label: "Uninstall",
      size: "small",
      variant: "primary",
      leadingIcon: "fas fa-trash",
    });

    uninstallButton.setAttribute("data-variant", "danger");
    uninstallButton.setAttribute("data-outline", "true");

    uninstallButton.addEventListener("click", async () => {
      uninstallButton.setAttribute("data-disabled", "true");
      await this.pluginsManager.uninstallPlugin(plugin);
    });

    return uninstallButton;
  }

  private createContent(): HTMLElement {
    const container = document.createElement("div");
    container.classList.add("eb-plugins-library__content");

    this.pluginsManager.onNewPlugin(async (plugin) => {
      const installedPlugin = await this.pluginsManager.getInstalledPlugin(
        plugin
      );

      let actionButton: HTMLElement;

      if (!installedPlugin) {
        actionButton = this.getInstallElement(plugin);
      } else if (installedPlugin.installedVersion !== plugin.version) {
        actionButton = this.getUpdateElement(plugin);
      } else {
        actionButton = this.getUninstallElement(plugin);
      }

      this.table.addRow([
        {
          columnName: "",
          value: pluginArrowElement(plugin),
        },
        {
          columnName: "Name",
          value: plugin.name,
        },
        {
          columnName: "Description",
          value: plugin.description,
        },
        {
          columnName: "Author",
          value: `${plugin.author.name} <${plugin.author.email}>`,
        },
        {
          columnName: "Version",
          value: plugin.version,
        },
        {
          columnName: "Actions",
          value: actionButton,
        },
      ]);
    });

    container.appendChild(this.table.getHTMLElement());
    return container;
  }
}
