import "./src/modules/_types";

declare global {
  namespace globalThis {
    const Hooks: typeof foundry.helpers.Hooks;
    const Roll: typeof foundry.dice.Roll;
    const Math: typeof primitives.Math;
    const ChatMessage: typeof foundry.documents.ChatMessage;
    const Color: typeof foundry.utils.Color;
    const fromUuid: typeof foundry.utils.fromUuid;
    const fromUuidSync: typeof foundry.utils.fromUuidSync;
  }
}
