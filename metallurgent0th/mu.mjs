import * as apps from "./src/module/apps/_module.mjs";
import * as dataModels from "./src/module/data/_module.mjs";

import MU from "./src/module/config.mjs";

import { localizeHelper } from "./src/module/helpers/utils.mjs";

Hooks.once("init", () => {
  console.log("metallurgent | Initialising Metallurgent System");

  CONFIG.MU = MU;

  // Assign document classes
  // for (const docCls of Object.values(documents)) {
  //   CONFIG[docCls.documentName].documentClass = docCls;
  // }

  Object.assign(CONFIG.Item.dataModels, dataModels.Item.config);

  CONFIG.Actor.defaultType = "token";

  foundry.documents.collections.Items.registerSheet(
    "MU",
    apps.Item.MUItemSheet,
    {
      makeDefault: true,
      label: "MU.Sheets.Labels.ItemSheet",
    },
  );

  console.log("metallurgent | Initialisation Complete");
});

Hooks.once("i18nInit", () => {
  // Localizing the sytem's CONFIG object
  localizeHelper(CONFIG.MU);
});
