const { api, sheets } = foundry.applications;

/**
 * Extend the basic ActorSheetV2
 */
export class muActorSheet extends api.HandlebarsApplicationMixin(
  sheets.ActorSheetV2,
) {}
