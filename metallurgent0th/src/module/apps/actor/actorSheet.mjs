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
          id: "items",
        },
        // {
        //   id: "cover",
        // },
        {
          id: "components",
        },
      ],
      initial: "items",
      labelPrefix: "MU.Sheets.Tabs",
    },
  };

  /** @inheritdoc */
  static PARTS = {
    header: {
      template: systemPath("templates/actor/header.hbs"),
    },
    tabs: {
      template: "templates/generic/tab-navigation.hbs",
    },
    items: {
      template: systemPath("templates/actor/items.hbs"),
      scrollable: [""],
    },
    // cover: {
    //   // TODO
    //   template: systemPath("templates/actor/cover.hbs"),
    //   scrollable: [""],
    // },
    components: {
      template: systemPath("templates/shared/components.hbs"),
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
      flags: this.actor.flags,
      actorFields: this.actor.schema.fields,
      config: CONFIG,
    });

    console.log(this.actor);

    return context;
  }

  /* -------------------------------------------------- */

  /** @inheritdoc */
  async _preparePartContext(partId, context) {
    switch (partId) {
      // case "properties":
      //   context.fields = await this._getFields();
      //   context.tab = context.tabs[partId];
      //   break;
      case "items":
        context.itemTypes = this._getItems();
        context.tab = context.tabs[partId];
        break;
    }
    return context;
  }

  /**
   * Adapted from Actor#itemTypes.
   */
  _getItems() {
    const types = Object.fromEntries(
      game.documentTypes.Item.map((t) => {
        return [
          t,
          { label: game.i18n.localize(CONFIG.Item.typeLabels[t]), items: [] },
        ];
      }),
    );
    for (const item of this.actor.items) {
      types[item.type].items.push(item);
    }
    // Only show Base if it's actually being used
    if (types.base.items.length === 0) delete types.base;
    return types;
  }

  /**
   * Callback actions which occur when a dragged element is dropped on a target.
   * @param {DragEvent} event       The originating DragEvent.
   * @protected
   */
  async _onDrop(event) {
    this.render();
  }
}
