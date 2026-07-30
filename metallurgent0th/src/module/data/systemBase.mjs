export default class muSystemBaseModel extends foundry.abstract.TypeDataModel {
  static metadata = Object.freeze({
    SubtypeMetadata: {
      type: "",
      icon: "",
    },
  });

  static defineSchema() {
    return {
      ...super.defineSchema,
    };
  }
}
