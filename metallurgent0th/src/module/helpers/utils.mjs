/**
 * Searches through an object recursively and localizes strings.
 * @param {Record<string, unknown>} object
 */
export function localizeHelper(object) {
  for (const [key, value] of Object.entries(object)) {
    // const type = foundry.utils.getType(value)
    switch (typeof value) {
      case "object":
        if (value) localizeHelper(value);
        break;
      case "string":
        if (key === "label") object[key] = game.i18n.localize(value);
        break;
    }
  }
}

/**
 * A helper function that Prepends a Key with METALLURGENT and returns a localized string with that Key.
 * @param {string} keyString - A realitive localization key
 * @returns {string} - A string Localized to the METALLUGENT Space.
 */
export function localizeMU(keyString) {
  return game.i18n.localize(`MU.${keyString}`);
}

export function localizedSchemaChoices(choices, field_name, model) {
  return Object.fromEntries(
    Object.entries(choices).map(([k, v]) => {
      const newV = model.LOCALIZATION_PREFIXES.map(
        (p) => `${p}.FIELDS.${field_name}.CHOICES.${v === "" ? k : v}`,
      ).find((k) => foundry.utils.getProperty(game.i18n.translations, k));
      return [k, newV ?? v];
    }),
  );
}
