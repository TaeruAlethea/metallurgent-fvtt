import { systemPath } from "../../constants.mjs";
import { muItemSheet } from "./itemSheet.mjs";

export class muFireControlSystem extends muItemSheet {
  /** @inheritdoc */
  static TABS = {
    ...super.TABS,
    primary: {
      tabs: [{ id: "fireControlAttributes" }, { id: "description" }],
      initial: "fireControlAttributes",
      labelPrefix: "MU.Sheets.Tabs",
    },
  };

  /** @inheritdoc */
  static PARTS = {
    ...super.PARTS,
    fireControlAttributes: {
      template: systemPath("templates/item/fireControlSystem.hbs"),
      scrollable: [""],
    },
    description: {
      template: systemPath("templates/shared/description.hbs"),
      scrollable: [""],
    },
  };
}
