import * as apps from "./src/module/apps/_module.mjs";
import * as dataModels from "./src/module/data/_module.mjs";

import MU from "./src/module/config.mjs";

import { localizeHelper } from "./src/module/helpers/utils.mjs";

Hooks.once("init", () => {
  console.log("metallurgent | Initialising Metallurgent System");

  CONFIG.MU = MU;
  Object.assign(CONFIG.Item.dataModels, dataModels.Item.config);

  foundry.documents.collections.Items.registerSheet(
    "MU",
    apps.Item.MUItemSheet,
    {
      makeDefault: true,
      label: "MU.Sheets.Labels.ItemSheet",
    },
  );

  CONFIG.ui.chat.CHAT_COMMANDS.hitcheck = {
    rgx: /(?:hitcheck) ?(\d*) ?(\d*) ?(\d*)/,
    fn: (a, b, c) => hitcheckCommand(a, b, c),
  };

  console.log("metallurgent | Initialisation Complete");
});

Hooks.once("i18nInit", () => {
  // Localizing the sytem's CONFIG object
  localizeHelper(CONFIG.MU);
});

async function hitcheckCommand(command, match, chatData) {
  console.log(command);
  console.log(match);

  var par = match[1] ? Math.clamp(parseInt(match[1]), 1, 6) : 4;
  var qty = match[2] ? Math.clamp(parseInt(match[2]), 1, 25) : 6;
  var burst = match[3] ? Math.clamp(parseInt(match[3]), 1, 25) : 1;

  const attacks = await hitcheck(par, qty, burst);
  var message = "<div>";

  attacks.forEach((attack, i, _) => {
    if (attack[0] > 0) {
      console.log(
        `Attack ${i + 1}: Successes: ${attack[0]}, Hit Location: ${attack[1]}`,
      );
      message += `Attack ${i + 1}: Successes: ${attack[0]}, Hit Location: ${attack[1]}`;
    } else {
      console.log(`Attack ${i + 1}: failed.`);
      message += `Attack ${i + 1}: failed.`;
    }
    message += "<br>";
  });
  message += "</div>";

  const messageData = {
    content: message,
  };

  console.log(command);
  console.log(match);

  ChatMessage.implementation.create(messageData);

  return false;
}

async function hitcheck(par = 4, qty = 6, burst = 1) {
  console.debug(
    `metallurgent | Hit Check: Par: ${par}, Qty: ${qty}, Burst: ${burst}`,
  );
  var attacks = [];
  for (let burstIndex = 0; burstIndex < burst; burstIndex++) {
    var successes = 0;

    for (let rollIndex = 0; rollIndex < qty + burstIndex; rollIndex++) {
      const roll = await new Roll(`1d6`).evaluate();
      if (par <= roll.total) {
        if (roll.total == 6) {
          successes++; // bonus success on 6's
        }
        successes++;
      }
    }
    if (0 < successes) {
      const hitlocation = await new Roll("1d6").evaluate();
      // console.debug(
      //   `Attack ${burstIndex + 1}: Successes: ${successes}, Hit location: ${hitlocation.total}`,
      // );
      attacks.push([successes, hitlocation.total]);
    } else {
      // console.debug(`Attack ${burstIndex + 1}: No successes.`);
      attacks.push([successes]);
    }
  }
  return attacks;
}
