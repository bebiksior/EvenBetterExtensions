export interface CaidoPluginReference {
  manifestURL: string;
  downloadURL: string;
}

export interface CaidoPlugin {
  manifestPackageID: string;
  pluginsIDs: string[];
  name: string;
  version: string;
  description: string;
  author: CaidoPluginAuthor;
  downloadUrl: string;
}

export interface CaidoPluginAuthor {
  name: string;
  email: string;
  url: string;
}

export interface CaidoInstalledPlugin {
    installedVersion: string;
    packageID: string;
}