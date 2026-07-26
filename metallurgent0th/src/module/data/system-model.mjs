/**
 * @import { SubtypeMetadata } from "./_types";
 */

export default class metallurgentSystemModel
  extends foundry.abstract.TypeDataModel
{
  /**
   * Metadata for this document subtype.
   * @type { SubtypeMetadata }
   */
  static get metadata() {
    return {
      embedded: {},
    };
  }
}
