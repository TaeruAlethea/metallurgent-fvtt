import { systemPath } from "../../constants.mjs";

const { api, sheets } = foundry.applications;

/**
 * Extend the basic ActorSheetV2
 */
export class muActorSheet extends api.HandlebarsApplicationMixin(
  sheets.ActorSheetV2,
) {
  /** @inheritdoc */
  static DEFAULT_OPTIONS = {
    classes: ["mu", "actor", "standard-form"],
    form: {
      submitOnChange: true,
    },
  };

  static TABS = {
    primary: {
      tabs: [
        {
          id: "cover",
        },
        {
          id: "components",
        },
      ],
      initial: "cover",
      labelPrefix: "MU.Sheets.Tabs",
    },
  };

  /** @inheritdoc */
  static PARTS = {
    header: {
      template: systemPath("templats/actor/header.hbs"),
    },
    tabs: {
      template: "templates/generic/tab-navigation.hbs",
    },
    cover: {
      // TODO
      template: systemPath("templates/actor/cover.hbs"),
      scrollable: [""],
    },
    components: {
      template: systemPath("templates/actor/components.hbs"),
      scrollable: [""],
    },
  };

  /** @inheritdoc */
  _initializeApplicationOptions(options) {
    const initialized = super._initializeApplicationOptions(options);

    initialized.classes.push(initialized.document.type);

    return initialized;
  }

  /** @inheritdoc */
  async _prepareContext(options) {
    const context = await super._prepareContext(options);

    Object.assign(context, {
      owner: this.document.isOwner,
      limited: this.document.limited,
      actor: this.actor,
      flags: system.actor.flags,
      actorFields: this.actor.schema.fields,
      config: CONFIG,
    });

    return context;
  }
}
