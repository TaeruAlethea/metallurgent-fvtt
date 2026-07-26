/**
 * A simple extension that adds a hook at the end of data prep.
 */
export default class MUItem extends foundry.documents.Item {
  /** @inheritdoc */
  prepareDerivedData() {
    super.prepareDerivedData();

    /**
     * Flexible hook for modules to alter derived document data.
     * @param {MUItem} item      The item preparing derived data.
     */
    Hooks.callAll("MU.prepareItemData", this);
  }
}
