import muSystemModel from "../systemBase.mjs";

const fields = foundry.data.fields;

export default class muItemBaseModel extends muSystemModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.MUITEMBASEMODEL",
  ];
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
    var schema = super.defineSchema();

    const details = {
      costUnit: new fields.NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      costBulk: new fields.NumberField({
        required: true,
        integer: false,
        positive: true,
        initial: 1,
        nullable: true,
      }),
      description: new fields.HTMLField({
        required: true,
        blank: true,
      }),
      origin: new fields.StringField({
        required: true,
        blank: true,
      }),
      manufacturer: new fields.StringField({
        required: true,
        blank: true,
      }),
      introductionYear: new fields.NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1800,
        nullable: true,
      }),
    };

    schema.details = new fields.SchemaField(details);
    return schema;
  }

  get actor() {
    return this.parent.actor;
  }
}
