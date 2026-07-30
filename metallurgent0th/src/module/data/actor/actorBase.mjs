import { localizeMU } from "../../helpers/utils.mjs";
import muSystemModel from "../systemBase.mjs";

const fields = foundry.data.fields;

export default class muActorBaseModel extends muSystemModel {
  /**
   * Key information about this item subtype.
   * @type {import("./_types").ItemMetaData}
   */
  static get metadata() {
    return {
      ...super.metadata,
      type: "actorBase",
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
