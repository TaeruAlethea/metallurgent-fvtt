import { localizeMU } from "../../helpers/utils.mjs";
import muSystemModel from "../systemBase.mjs";

const fields = foundry.data.fields;

export default class muItemBaseModel extends muSystemModel {
  /**
   * Key information about this item subtype.
   * @type {import("./_types").ItemMetaData}
   */
  static get metadata() {
    return {
      ...super.metadata,
      type: "itemBase",
      invalidActorTypes: [],
      packOnly: false,
    };
  }

  /** @inheritdoc */
  static defineSchema() {
    const schema = super.defineSchema();

    const details = {
      costUnit: new fields.NumberField({
        label: localizeMU("general.costUnit"),
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      costBulk: new fields.NumberField({
        label: localizeMU("general.costBulk"),
        required: true,
        integer: false,
        positive: true,
        initial: 1,
        nullable: true,
      }),
      description: new fields.HTMLField({
        label: localizeMU("general.description"),
        required: true,
        blank: true,
      }),
      origin: new fields.StringField({
        label: localizeMU("general.origin"),
        required: true,
        blank: true,
      }),
      manufacturer: new fields.StringField({
        label: localizeMU("general.manufacturer"),
        required: true,
        blank: true,
      }),
      introductionYear: new fields.NumberField({
        label: localizeMU("general.introductionYear"),
        required: true,
        integer: true,
        positive: true,
        initial: 1800,
        nullable: true,
      }),
    };

    schema.details = new fields.SchemaField(details, {
      label: localizeMU("general.details"),
    });
    return schema;
  }

  /** @inheritdoc */
  static LOCALIZATION_PREFIXES = [
    "METALLURGENT.item.base",
    "METALLURGENT.SOURCE",
  ];

  get actor() {
    return this.parent.actor;
  }
}
