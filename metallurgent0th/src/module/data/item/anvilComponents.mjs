import muItemBaseModel from "./itemBase.mjs";
import { localizedSchemaChoices } from "../../helpers/utils.mjs";

const { NumberField, SchemaField, StringField, BooleanField } =
  foundry.data.fields;

export class anvlComponentBaseModel extends muItemBaseModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVL.COMPONENTBASEMODEL",
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
      isEnabled: new BooleanField({
        required: true,
        initial: true,
      }),
      status: new StringField({
        required: true,
        blank: false,
        initial: "nominal",
        choices: localizedSchemaChoices(
          {
            nominal: "",
            damaged: "",
            degraded: "",
            disabled: "",
            destroyed: "",
          },
          "status",
          this,
        ),
      }),
      armorPointsCurrent: new NumberField({
        required: false,
        integer: true,
      }),
      armorPointsMax: new NumberField({
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

export class anvlCoreModel extends anvlComponentBaseModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVL.COREMODEL",
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

export class anvlMobilityBaseModel extends anvlComponentBaseModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVL.MOBILITYBASEMODEL",
  ];
  static defineSchema() {
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
        first: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
        second: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
        third: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
        fourth: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
        fifth: new NumberField({
          required: true,
          integer: true,
          positive: true,
          initial: 1,
        }),
      }),
    };
  }
}

export class anvlArmLeftModel extends anvlComponentBaseModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVL.ARMMODEL",
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

export class anvlArmRightModel extends anvlComponentBaseModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVL.ARMMODEL",
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

export class anvlGeneratorModel extends anvlComponentBaseModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVL.GENERATORMODEL",
  ];
  static defineSchema() {
    return {
      ...super.defineSchema(),
      enOutput: new NumberField({
        required: true,
        integer: true,
        positive: false,
        initial: 1,
      }),
      enCapacity: new NumberField({
        required: true,
        integer: true,
        positive: false,
        initial: 1,
      }),
      fuelCapacity: new NumberField({
        required: true,
        integer: true,
        positive: false,
        initial: 1,
      }),
      chargeCapacity: new NumberField({
        required: true,
        integer: true,
        positive: false,
        initial: 1,
      }),
      heatTolerance: new NumberField({
        required: true,
        integer: true,
        positive: false,
        initial: 1,
      }),
      coolingType: new StringField({
        required: true,
        blank: false,
        initial: "gas",
        choices: localizedSchemaChoices(
          {
            gas: "",
            liquid: "",
            plasma: "",
          },
          "coolingType",
          this,
        ),
      }),
    };
  }
}

export class anvlElectronicsModel extends anvlComponentBaseModel {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    "MU.ANVL.ELECTRONICSMODEL",
  ];
  static defineSchema() {
    return {
      ...super.defineSchema(),
      interceptBonus: new NumberField({
        required: true,
        integer: true,
        positive: false,
        initial: 1,
      }),
      interceptCost: new NumberField({
        required: true,
        integer: true,
        positive: false,
        initial: 1,
      }),
      cameraModifier: new NumberField({
        required: true,
        integer: true,
        positive: false,
        initial: 1,
      }),
      refreshCost: new NumberField({
        required: true,
        integer: true,
        positive: false,
        initial: 1,
      }),
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
