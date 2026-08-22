import {
  anvlComponentBaseModel as anvlComponentBaseModel,
  anvlCoreModel as anvlCoreModel,
  anvlMobilityBaseModel as anvlMobilityBaseModel,
  anvlArmLeftModel as anvlArmLeftModel,
  anvlArmRightModel as anvlArmRightModel,
  anvlGeneratorModel as anvlGeneratorModel,
  anvlElectronicsModel as anvlElectronicsModel,
} from "./anvilComponents.mjs";
import { default as muItemBaseModel } from "./itemBase.mjs";
import { fireControlSystemModel as fireControlSystemModel } from "./fireControlSystem.mjs";

const config = {
  // Item Type: Data Model
  anvlComponent: anvlComponentBaseModel,
  anvlCore: anvlCoreModel,
  anvlMobilityBase: anvlMobilityBaseModel,
  anvlArmLeft: anvlArmLeftModel,
  anvlArmRight: anvlArmRightModel,
  anvlGenerator: anvlGeneratorModel,
  anvlElectronics: anvlElectronicsModel,
  fireControlSystem: fireControlSystemModel,
};

export {
  anvlComponentBaseModel,
  anvlCoreModel,
  anvlMobilityBaseModel,
  anvlArmLeftModel,
  anvlArmRightModel,
  anvlGeneratorModel,
  anvlElectronicsModel,
  fireControlSystemModel,
  muItemBaseModel,
  config,
};
