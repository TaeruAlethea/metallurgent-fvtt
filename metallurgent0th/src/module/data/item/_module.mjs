import {
  anvlComponentModel as anvlComponentModel,
  anvlCoreModel as anvlCoreModel,
  anvlMobilityBaseModel as anvlMobilityBaseModel,
  anvlArmLeftModel as anvlArmLeftModel,
  anvlArmRightModel as anvlArmRightModel,
  anvlGeneratorModel as anvlGeneratorModel,
  anvlElectronicsModel as anvlElectronicsModel,
} from "./anvil.mjs";
import { default as muItemBaseModel } from "./itemBase.mjs";

const config = {
  component: anvlComponentModel,
  anvlCore: anvlCoreModel,
  anvlMobilityBase: anvlMobilityBaseModel,
  anvlArmLeft: anvlArmLeftModel,
  anvlArmRight: anvlArmRightModel,
  anvlGenerator: anvlGeneratorModel,
  anvlElectronics: anvlElectronicsModel,
};

export {
  anvlComponentModel,
  anvlCoreModel,
  anvlMobilityBaseModel,
  anvlArmLeftModel,
  anvlArmRightModel,
  anvlGeneratorModel,
  anvlElectronicsModel,
  muItemBaseModel,
  config,
};
