import {
  muAnvlCoreSheet as muAnvlCoreSheet,
  muAnvlMobilityBaseSheet as muAnvlMobilityBaseSheet,
  muAnvlArmLeftSheet as muAnvlArmLeftSheet,
  muAnvlArmRightSheet as muAnvlArmRightSheet,
  muAnvlGeneratorSheet as muAnvlGeneratorSheet,
  muAnvlElectronicsSheet as muAnvlElectronicsSheet,
} from "./anvlSheets.mjs";
import { muFireControlSystem } from "./fireControlSystem.mjs";
import { muItemSheet } from "./itemSheet.mjs";

const config = {
  // Item Type: Default Sheet
  anvlComponent: muItemSheet,
  anvlCore: muAnvlCoreSheet,
  anvlMobilityBase: muAnvlMobilityBaseSheet,
  anvlArmLeft: muAnvlArmLeftSheet,
  anvlArmRight: muAnvlArmRightSheet,
  anvlGenerator: muAnvlGeneratorSheet,
  anvlElectronics: muAnvlElectronicsSheet,
  fireControlSystem: muFireControlSystem,
};

export {
  muItemSheet,
  muAnvlCoreSheet,
  muAnvlMobilityBaseSheet,
  muAnvlArmLeftSheet,
  muAnvlArmRightSheet,
  muAnvlGeneratorSheet,
  muAnvlElectronicsSheet,
  muFireControlSystem,
  config,
};
