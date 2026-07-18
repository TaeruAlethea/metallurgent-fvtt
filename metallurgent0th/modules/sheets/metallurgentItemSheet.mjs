const api = foundry.applications.api;
const sheets = foundry.applications.sheets;

export default class metallurgentItemSheet extends api.HandlebarsApplicationMixin(
  sheets.ItemSheetV2,
) {
  sheetContext = {};

  static DEFAULT_OPTIONS = {
    tag: "form",
    classes: ["metallurgent", "sheet", "itemSheet"],
    actions: {},
    form: {
      submitOnChange: true,
      closeOnSubmit: false,
    },
    position: {
      width: 650,
    },
  };

  static PARTS = {
    header: {
      template: "systems/metallurgent0th/templates/sheets/item/header.hbs",
    },
  };

  get title() {
    return this.item.name;
  }

  /** @override */
  _configureRenderOptions(options) {
    super._configureRenderOptions(options);

    if (this.document.limited) options.parts = ["header"];
    else options.parts = ["header"];
  }
}
