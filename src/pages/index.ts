import { getEvenBetterAPI } from "../utils/evenbetterapi";

export const customPluginsPage = () => {
  getEvenBetterAPI().eventManager.on("onPageOpen", (data: any) => {
    if (data.newUrl === "#/plugins") modifyPluginsPage();
  });
};

const modifyPluginsPage = () => {
  const tableHeaderTitle = document.querySelector(
    ".c-table-header__title"
  ) as HTMLElement;
  if (!tableHeaderTitle) return;

  if (document.getElementById("plugins-navigation-bar")) return;

  const tableHeader = tableHeaderTitle.parentElement;
  if (tableHeader) {
    tableHeader.style.padding = "0";
    tableHeader.style.display = "block";
    const tableHeaderParent = tableHeader.parentElement;
    if (tableHeaderParent) {
      tableHeaderParent.style.padding = "0";
    }
  }

  const installPackageButton = document.querySelector(
    ".c-table-header__actions .c-button"
  ) as HTMLElement;
  const pluginsNavigationBar =
    getEvenBetterAPI().components.createNavigationBar({
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
        }
      ],
      customButtons: [installPackageButton],
    });

  pluginsNavigationBar.id = "plugins-navigation-bar";

  tableHeaderTitle.textContent = "";
  tableHeaderTitle.appendChild(pluginsNavigationBar);
};
