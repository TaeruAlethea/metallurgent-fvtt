/**
 * A {ChatCommandCallback} for a simple mu Hit Check with Burst support
 * @param {string} command
 * @param {RegExpMatchArray[]} match
 * @param {object} chatData
 * @param {object} createOptions
 */
export async function hitcheckCommand(command, match, chatData, createOptions) {
  var par = match[1] ? Math.clamp(parseInt(match[1]), 1, 6) : 4;
  var qty = match[2] ? Math.clamp(parseInt(match[2]), 1, 25) : 6;
  var burst = match[3] ? Math.clamp(parseInt(match[3]), 1, 25) : 1;

  const attacks = await hitcheck(par, qty, burst);

  var message = "<div>";
  switch (true) {
    case game.user.targets.size > 1:
      message += `WARNING: MULTIPLE-TARGETS-SELECTED <br>`;
    case game.user.targets.size > 0:
      message += `Attacking: ${game.user.targets.first().document.name} <br>`;
      break;
    case game.user.targets.size === 0:
      message += `WARNING: NO-TARGETS-SELECTED <br>`;
      message += `Attacking: NO-TARGET <br>`;
      break;
  }

  if (burst > 1) {
    message += `Par: ${par}, Qty: ${qty}, Burst: ${burst} <br>`;
  } else {
    message += `Par: ${par}, Qty: ${qty} <br>`;
  }

  attacks.forEach((attack, i, _) => {
    if (attack[0] > 0) {
      message += `Attack ${i + 1}: Successes: ${attack[0]} (${attack[1]}), Hit Location: ${attack[2]}`;
    } else {
      message += `Attack ${i + 1}: failed.`;
    }
    message += "<br>";
  });
  message += "</div>";

  const messageData = {
    content: message,
  };

  ChatMessage.implementation.create(messageData);

  return false;
}

/**
 * A function that roles a Hitcheck
 * @param {number} [par=4] parValue - The Par roll that needs to be met or beat
 * @param {number} [qty=6] quantity - The starting number of dice to roll
 * @param {number} [burst=1] burst - How many over all attacks to execute
 */
async function hitcheck(par = 4, qty = 6, burst = 1) {
  let attacks = [];
  for (let burstIndex = 0; burstIndex < burst; burstIndex++) {
    let successes = 0;
    let sixes = 0;

    for (let rollIndex = 0; rollIndex < qty + burstIndex; rollIndex++) {
      const roll = await new Roll(`1d6`).evaluate();
      if (par <= roll.total) {
        if (roll.total == 6) {
          successes++; // bonus success on 6's
          sixes++;
        }
        successes++;
      }
    }
    if (0 < successes) {
      const hitlocation = await new Roll("1d6").evaluate();
      attacks.push([successes, sixes, hitlocation.total]);
    } else {
      attacks.push([successes]);
    }
  }
  return attacks;
}
