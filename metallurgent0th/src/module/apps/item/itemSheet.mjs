import { systemPath } from "../../constants.mjs";

const { api, sheets } = foundry.applications;

/**
 * Extend the basic ItemSheet
 */
export class muItemSheet extends api.HandlebarsApplicationMixin(
  sheets.ItemSheetV2,
) {
  /** @inheritdoc */
  static DEFAULT_OPTIONS = {
    classes: ["mu", "item"],
    window: {
      minimizable: true,
      positioned: true,
      resizable: true,
    },
    form: {
      submitOnChange: true,
    },
    dragDrop: [{ dragSelector: ".draggable", dropSelector: null }],
  };

  /* -------------------------------------------------- */

  /** @inheritdoc */
  static PARTS = {
    header: {
      template: systemPath("templates/item/header.hbs"),
    },
    tabs: {
      // Foundry generic template
      template: "templates/generic/tab-navigation.hbs",
    },
  };

  /* -------------------------------------------------- */

  /** @inheritdoc */
  _initializeApplicationOptions(options) {
    const initialized = super._initializeApplicationOptions(options);

    initialized.classes.push(initialized.document.type);

    return initialized;
  }

  /* -------------------------------------------------- */

  /** @inheritdoc */
  async _prepareContext(options) {
    const context = await super._prepareContext(options);

    Object.assign(context, {
      owner: this.document.isOwner,
      limited: this.document.limited,
      item: this.item,
      actor: this.actor,
      system: this.item.system,
      flags: this.item.flags,
      itemFields: this.item.schema.fields,
      systemFields: this.item.system.schema.fields,
      config: CONFIG,
    });

    // console.log(this.item.system);
    // console.log(this.item.system.schema.fields);

    return context;
  }

  /* -------------------------------------------------- */

  /** @inheritdoc */
  async _preparePartContext(partId, context) {
    switch (partId) {
      case "header":
        break;
      default:
        context.tab = context.tabs[partId];
    }
    return context;
  }
}
