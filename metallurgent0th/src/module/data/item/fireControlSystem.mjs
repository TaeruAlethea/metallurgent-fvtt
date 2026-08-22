import { localizedSchemaChoices } from "../../helpers/utils.mjs";
import muItemBaseModel from "./itemBase.mjs";

const { NumberField, StringField } = foundry.data.fields;

export class fireControlSystemModel extends muItemBaseModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.FIRECONTROLSYSTEMMODEL",
  ];
  static defineSchema() {
    return {
      ...super.defineSchema(),
      enDrain: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      rangeInner: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      rangeOuter: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      targetingType: new StringField({
        required: true,
        blank: false,
        initial: "optical",
        choices: localizedSchemaChoices(
          {
            ewacs: "",
            infrared: "",
            laser: "",
            optical: "",
            spotting: "",
            tracking: "",
          },
          "targetingType",
          this,
        ),
      }),
    };
  }
}
