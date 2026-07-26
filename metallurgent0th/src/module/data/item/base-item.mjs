import { localizeMU } from "../../helpers/utils.mjs";
import metallurgentSystemModel from "../system-model.mjs";

const fields = foundry.data.fields;

export default class baseItemModel extends metallurgentSystemModel {
  /**
   * Key information about this item subtype.
   * @type {import("./_types").ItemMetaData}
   */
  static get metadata() {
    return {
      ...super.metadata,
      type: "base",
      invalidActorTypes: [],
      packOnly: false,
    };
  }

  /** @inheritdoc */
  static defineSchema() {
    const schema = super.defineSchema;

    const details = {};
    details.costUnit = new fields.NumberField({
      label: localizeMU("general.costUnit"),
      required: true,
      integer: true,
      positive: true,
      initial: 1,
    });
    details.costBulk = new fields.NumberField({
      label: localizeMU("general.costBulk"),
      required: true,
      integer: false,
      positive: true,
      initial: 1,
      nullable: true,
    });
    details.description = new fields.HTMLField({
      label: localizeMU("general.description"),
      required: true,
      blank: true,
    });
    details.origin = new fields.StringField({
      label: localizeMU("general.origin"),
      required: true,
      blank: true,
    });
    details.manufacturer = new fields.StringField({
      label: localizeMU("general.manufacturer"),
      required: true,
      blank: true,
    });
    details.introductionYear = new fields.NumberField({
      label: localizeMU("general.introductionYear"),
      required: true,
      integer: true,
      positive: true,
      initial: 1800,
      nullable: true,
    });

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

  /** @returns { MUActor | null } */
  get actor() {
    return this.parent.actor;
  }
}
