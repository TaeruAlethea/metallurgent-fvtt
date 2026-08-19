import * as Module from "./src/module/_module.mjs";

import MU from "./src/module/config.mjs";

import { localizeHelper } from "./src/module/helpers/utils.mjs";

Hooks.once("init", () => {
  console.log("Metallurgent | Initialising Metallurgent System");

  CONFIG.MU = MU;
  Object.assign(CONFIG.Actor.dataModels, Module.Data.Actor.config);
  Object.assign(CONFIG.Item.dataModels, Module.Data.Item.config);

  foundry.documents.collections.Actors.registerSheet(
    "MU",
    Module.Apps.Actor.muActorSheet,
    {
      makeDefault: true,
      label: "MU.Sheets.Labels.ActorSheet",
    },
  );

  foundry.documents.collections.Items.registerSheet(
    "MU",
    Module.Apps.Item.muItemSheet,
    {
      makeDefault: true,
      label: "MU.Sheets.Labels.ItemSheet",
    },
  );

  CONFIG.ui.chat.CHAT_COMMANDS.hitcheck = {
    rgx: /(?:hitcheck) ?(\d*) ?(\d*) ?(\d*)/,
    fn: (a, b, c, d) => Rolls.hitcheckCommand(a, b, c, d),
  };
  CONFIG.ui.chat.CHAT_COMMANDS.hc = {
    rgx: /(?:hc) ?(\d*) ?(\d*) ?(\d*)/,
    fn: (a, b, c, d) => Rolls.hitcheckCommand(a, b, c, d),
  };

  console.log("Metallurgent | Initialisation Complete");
});

Hooks.once("i18nInit", () => {
  // Localizing the sytem's CONFIG object
  localizeHelper(CONFIG.MU);
});
