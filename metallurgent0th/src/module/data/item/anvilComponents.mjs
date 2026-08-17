import muItemBaseModel from "./itemBase.mjs";
import { localizedSchemaChoices } from "../../helpers/utils.mjs";

const { NumberField, SchemaField, StringField } = foundry.data.fields;

export class anvlComponentModel extends muItemBaseModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVLCOMPONENTMODEL",
  ];
  static metadata = Object.freeze({
    SubtypeMetadata: {
      type: "Anvil_Component",
      icon: "",
    },
  });
  static defineSchema() {
    return {
      ...super.defineSchema(),
      armorPoints: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      resistance: new SchemaField({
        kenetic: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
        chemical: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
        thermal: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
      }),
      load: new NumberField({
        required: true,
        integer: false,
        positive: true,
        initial: 1,
      }),
      energyDrain: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
    };
  }
}

export class anvlCoreModel extends anvlComponentModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVLCOMPONENTMODEL.ANVLCOREMODEL",
  ];
  static defineSchema() {
    return {
      ...super.defineSchema(),
      blockBonus: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      blockCost: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      defenceValue: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      criticalOutput: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      hardpoints: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
    };
  }
}

export class anvlMobilityBaseModel extends anvlComponentModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVLCOMPONENTMODEL.ANVLMOBILITYBASEMODEL",
  ];
  static defineSchema() {
    // const localization_prefix = "MU.ANVLCOMPONENTMODEL.ANVLMOBILITYBASEMODEL";
    return {
      ...super.defineSchema(),
      dodgeBonus: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      dodgeCost: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      speed: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      manoeuvreCost: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      initiative: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      chassisType: new StringField({
        required: true,
        blank: false,
        initial: "biped",
        choices: localizedSchemaChoices(
          {
            biped: "",
            hover: "",
            quadruped: "",
            reverseJoint: "",
            tracked: "",
            wheeled: "",
          },
          "chassisType",
          this,
        ),
      }),
      loadTolerance: new SchemaField({
        1: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
        2: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
        3: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
        4: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
        5: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
      }),
    };
  }
}

export class anvlArmLeftModel extends anvlComponentModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVLCOMPONENTMODEL.ANVLARMMODEL",
  ];
  static defineSchema() {
    return {
      ...super.defineSchema(),
      agility: new NumberField({
        required: true,
        integer: true,
        positive: false,
        initial: 1,
      }),
      strength: new NumberField({
        required: true,
        integer: false,
        positive: true,
        initial: 1,
      }),
      hardpoints: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
    };
  }
}

export class anvlArmRightModel extends anvlComponentModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVLCOMPONENTMODEL.ANVLARMMODEL",
  ];
  static defineSchema() {
    return {
      ...super.defineSchema(),
      agility: new NumberField({
        required: true,
        integer: true,
        positive: false,
        initial: 1,
      }),
      strength: new NumberField({
        required: true,
        integer: false,
        positive: true,
        initial: 1,
      }),
      hardpoints: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
    };
  }
}

export class anvlGeneratorModel extends anvlComponentModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVLCOMPONENTMODEL.ANVLGENERATORMODEL",
  ];
  static defineSchema() {
    return {
      ...super.defineSchema(),
      enOutput: new NumberField(),
      enCapacity: new NumberField(),
      fuelCapacity: new NumberField(),
      chargeCapacity: new NumberField(),
      heatTolerance: new NumberField(),
      chassisType: new StringField({
        required: true,
        blank: false,
        initial: "gas",
        choices: localizedSchemaChoices(
          {
            gas: "",
            liquid: "",
            plasma: "",
          },
          "chassisType",
          this,
        ),
      }),
    };
  }
}

export class anvlElectronicsModel extends anvlComponentModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVLCOMPONENTMODEL.ANVLELECTRONICSMODEL",
  ];
  static defineSchema() {
    return {
      ...super.defineSchema(),
      interceptBonus: new NumberField(),
      interceptCost: new NumberField(),
      cameraModifier: new NumberField(),
      refreshCost: new NumberField(),
      hardwareType: new StringField({
        required: true,
        blank: false,
        initial: "efficient",
        choices: localizedSchemaChoices(
          {
            efficient: "",
            gunheadKE: "",
            gunheadCE: "",
            gunheadTE: "",
            hardened: "",
            lowProfile: "",
            multiEye: "",
            networkSiphon: "",
            quicklock: "",
            rangefinder: "",
          },
          "hardwareType",
          this,
        ),
      }),
    };
  }
}
