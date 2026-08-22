import { systemPath } from "../../constants.mjs";
import { muItemSheet } from "./itemSheet.mjs";

class muAnvlComponentSheet extends muItemSheet {
  /** @inheritdoc */
  static TABS = {
    ...super.TABS,
    primary: {
      tabs: [
        { id: "anvlComponentAttributes" },
        { id: "componentAttributes" },
        { id: "description" },
      ],
      initial: "anvlComponentAttributes",
      labelPrefix: "MU.Sheets.Tabs",
    },
  };

  /** @inheritdoc */
  static PARTS = {
    ...super.PARTS,
    anvlComponentAttributes: {
      template: systemPath("templates/shared/anvlComponentAttributes.hbs"),
      scrollable: [""],
    },
    description: {
      template: systemPath("templates/shared/description.hbs"),
      scrollable: [""],
    },
  };
}

export class muAnvlCoreSheet extends muAnvlComponentSheet {
  /** @inheritdoc */
  static PARTS = {
    ...super.PARTS,
    componentAttributes: {
      template: systemPath("templates/item/anvil/core.hbs"),
      scrollable: [""],
    },
  };
}

export class muAnvlMobilityBaseSheet extends muAnvlComponentSheet {
  /** @inheritdoc */
  static PARTS = {
    ...super.PARTS,
    componentAttributes: {
      template: systemPath("templates/item/anvil/mobilityBase.hbs"),
      scrollable: [""],
    },
  };
}

export class muAnvlArmLeftSheet extends muAnvlComponentSheet {
  /** @inheritdoc */
  static PARTS = {
    ...super.PARTS,
    componentAttributes: {
      template: systemPath("templates/item/anvil/arm.hbs"),
      scrollable: [""],
    },
  };
}

export class muAnvlArmRightSheet extends muAnvlComponentSheet {
  /** @inheritdoc */
  static PARTS = {
    ...super.PARTS,
    componentAttributes: {
      template: systemPath("templates/item/anvil/arm.hbs"),
      scrollable: [""],
    },
  };
}

export class muAnvlGeneratorSheet extends muAnvlComponentSheet {
  /** @inheritdoc */
  static PARTS = {
    ...super.PARTS,
    componentAttributes: {
      template: systemPath("templates/item/anvil/generator.hbs"),
      scrollable: [""],
    },
  };
}

export class muAnvlElectronicsSheet extends muAnvlComponentSheet {
  /** @inheritdoc */
  static PARTS = {
    ...super.PARTS,
    componentAttributes: {
      template: systemPath("templates/item/anvil/electronics.hbs"),
      scrollable: [""],
    },
  };
}
