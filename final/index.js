// Migration script from the old plugin system to the new one
const NEW_PLUGIN_URL =
  "https://raw.githubusercontent.com/bebiksior/EvenBetterExtensions/main/dist-zip/plugin.zip";

const getNewPluginFile = async (url) => {
  const response = await fetch(url);
  const data = await response.blob();
  return new File([data], "plugin.zip", { type: "application/zip" });
};

const installPlugin = async (file) => {
  window.Caido.graphql.installPluginPackage({
    input: {
      source: {
        file: file,
      },
    },
  });
};

const fetchUserSettings = async () => {
  return await Caido.graphql.userSettings().then((data) => {
    return data.viewer.settings;
  });
};

const clearCustomJS = async () => {
  const viewerSettings = await fetchUserSettings();
  if (!viewerSettings) return;

  const newViewerSettings = {
    input: {
      data: viewerSettings.data,
      migrations: viewerSettings.migrations,
    },
  };

  if (viewerSettings.data.js) newViewerSettings.input.data.js = "";

  return Caido.graphql.updateViewerSettings(newViewerSettings);
};

const migrate = async () => {
  if (localStorage.getItem("ebe:migrateAttempt")) {
    return;
  }

  localStorage.setItem("ebe:migrateAttempt", "true");

  await new Promise((resolve) => {
    const interval = setInterval(() => {
      if (document.querySelector(".c-content")) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });

  const content = document.querySelector(".c-content");
  content.innerHTML =
    "Migrating EvenBetter: Extensions to the new plugin system.<br>This will take a few seconds.<br>Please wait, and have a great day 😎";

  content.style.display = "flex";
  content.style.justifyContent = "center";
  content.style.alignItems = "center";
  content.style.textAlign = "center";
  content.style.fontSize = "2rem";

  await clearCustomJS();
  const file = await getNewPluginFile(NEW_PLUGIN_URL);
  await installPlugin(file);

  setTimeout(() => {
    window.location.reload();
  }, 3000);
};

migrate();
