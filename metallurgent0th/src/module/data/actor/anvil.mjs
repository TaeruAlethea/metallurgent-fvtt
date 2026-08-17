import muSystemModel from "../systemBase.mjs";

const fields = foundry.data.fields;

export default class muAnvilActorModel extends muSystemModel {
  /**
   * Key information about this item subtype.
   * @type {import("./_types").ItemMetaData}
   */
  static get metadata() {
    return {
      ...super.metadata,
      type: "AnvilActor",
      invalidActorTypes: [],
      packOnly: false,
    };
  }

  /** @inheritdoc */
  static defineSchema() {
    const schema = super.defineSchema();

    return schema;
  }
}
