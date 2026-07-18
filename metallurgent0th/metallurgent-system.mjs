const { api, sheets } = foundry.applications;
import { METALLURGENT } from "./modules/config.mjs";
import {
  anvlCoreDataModel,
  anvlMobilityBaseDataModel,
} from "./modules/data-models.mjs";
import metallurgentItemSheet from "./modules/sheets/metallurgentItemSheet.mjs";

Hooks.once("init", () => {
  console.log("metallurgent | Initialising Metallurgent System");

  // Set up global config object
  CONFIG.METALLURGENT = METALLURGENT;
  CONFIG.INIT = true;
  // CONFIG.Item.documentClass = metallurgentItemSheet;

  // Register custom Sheets and unregister the start Sheets
  registerActorSheets();
  registerItemSheets();
  // Actors.unregisterSheet("core", ActorSheet);

  // Register DataModels
  registerActorDataModels();
  registerItemDataModels();

  // Load all Partial-Handlebar Files
  preloadHandlebarsTemplates();

  // Register Additional Handelbar Helpers
  registerHandelbarsHelpers();
});

Hooks.once("ready", async () => {
  console.log("metallurgent | Initialisation Complete");
  // Finished Initalization Phase and release lock
  CONFIG.INIT = false;

  // Only execute when run as Gamemaster
  if (!game.user.isGM) return;
});

function registerActorSheets() {
  console.log("metallurgent | Registering Actor Sheets");
}

function registerItemSheets() {
  console.log("metallurgent | Registering Item Sheets");
  const DocumentSheetConfig = foundry.applications.apps.DocumentSheetConfig;

  DocumentSheetConfig.registerSheet(
    foundry.documents.Item,
    game.system.id,
    metallurgentItemSheet,
    {
      makeDefault: true,
    },
  );
}

function registerActorDataModels() {
  console.log("metallurgent | Registering Actor DataModels");
}

function registerItemDataModels() {
  console.log("metallurgent | Registering Item DataModels");
  CONFIG.Item.dataModels = {
    anvlCore: anvlCoreDataModel,
    anvlMobilityBase: anvlMobilityBaseDataModel,
  };
}

function preloadHandlebarsTemplates() {
  const templatePaths = [
    "systems/metallurgent0th/templates/partials/template.hbs",
  ];

  return foundry.applications.handlebars.loadTemplates(templatePaths);
}

function registerHandelbarsHelpers() {
  Handlebars.registerHelper("equals", function (v1, v2) {
    return v1 === v2;
  });

  Handlebars.registerHelper("contains", function (element, search) {
    return element.includes(search);
  });

  Handlebars.registerHelper("concat", function (s1, s2, s3 = "") {
    return s1 + s2 + s3;
  });

  Handlebars.registerHelper("isGreater", function (p1, p2) {
    return p1 > p2;
  });

  Handlebars.registerHelper("isEqualORGreater", function (p1, p2) {
    return p1 >= p2;
  });

  Handlebars.registerHelper("ifOR", function (conditional1, conditional2) {
    return conditional1 || conditional2;
  });

  Handlebars.registerHelper("doLog", function (value) {
    console.log(value);
  });

  Handlebars.registerHelper("toBoolean", function (string) {
    return string === "true";
  });

  Handlebars.registerHelper("for", function (from, to, incr, content) {
    let result = "";

    for (let i = from; i < to; i += incr) result += content.fn(i);

    return result;
  });

  Handlebars.registerHelper("times", function (n, content) {
    let result = "";

    for (let i = 0; i < n; i++) result += content.fn(i);

    return result;
  });

  Handlebars.registerHelper("notEmpty", function (value) {
    if (value == 0 || value == "0") return true;
    if (value == null || value == "") return false;
    return true;
  });
}
