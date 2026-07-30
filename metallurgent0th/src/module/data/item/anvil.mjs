import muItemBaseModel from "./itemBase.mjs";
import { localizeMU } from "../../helpers/utils.mjs";

const { NumberField, SchemaField, StringField } = foundry.data.fields;

export class anvlComponentModel extends muItemBaseModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      anvlComponent: new SchemaField(
        {
          armorPoints: new NumberField({
            label: localizeMU("stats.armorPoints"),
            required: true,
            integer: true,
            positive: true,
            initial: 1,
          }),
          resistance: new SchemaField(
            {
              kenetic: new NumberField({
                label: localizeMU("stats.resistances.kenetic"),
                required: true,
                integer: true,
                positive: true,
                initial: 1,
              }),
              chemical: new NumberField({
                label: localizeMU("stats.resistances.chemical"),
                required: true,
                integer: true,
                positive: true,
                initial: 1,
              }),
              thermal: new NumberField({
                label: localizeMU("stats.resistances.thermal"),
                required: true,
                integer: true,
                positive: true,
                initial: 1,
              }),
            },
            {
              label: localizeMU("stats.resistance"),
            },
          ),
          load: new NumberField({
            label: localizeMU("stats.load"),
            required: true,
            integer: false,
            positive: true,
            initial: 1,
          }),
          energyDrain: new NumberField({
            label: localizeMU("stats.energyDrain"),
            required: true,
            integer: true,
            positive: true,
            initial: 1,
          }),
        },
        {
          label: localizeMU("anvil.anvilComponent"),
        },
      ),
    };
  }
}

export class anvlCoreModel extends anvlComponentModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      anvlCore: new SchemaField(
        {
          blockBonus: new NumberField({
            label: localizeMU("stats.blockBonus"),
            required: true,
            integer: true,
            positive: true,
            initial: 1,
          }),
          blockCost: new NumberField({
            label: localizeMU("stats.blockCost"),
            required: true,
            integer: true,
            positive: true,
            initial: 1,
          }),
          defenceValue: new NumberField({
            label: localizeMU("stats.defenceValue"),
            required: true,
            integer: true,
            positive: true,
            initial: 1,
          }),
          criticalOutput: new NumberField({
            label: localizeMU("stats.criticalOutput"),
            required: true,
            integer: true,
            positive: true,
            initial: 1,
          }),
          hardpoints: new NumberField({
            label: localizeMU("stats.hardpoints"),
            required: true,
            integer: true,
            positive: true,
            initial: 1,
          }),
        },
        {
          label: localizeMU("anvil.components.core"),
        },
      ),
    };
  }
}

export class anvlMobilityBaseModel extends anvlComponentModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      anvlMobilityBase: new SchemaField(
        {
          dodgeBonus: new NumberField({
            label: localizeMU("stats.dodgeBonus"),
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
            choices: {
              biped: localizeMU("anvil.mobilityBaseTypes.biped"),
              hover: localizeMU("anvil.mobilityBaseTypes.hover"),
              quadruped: localizeMU("anvil.mobilityBaseTypes.quadruped"),
              reverseJoint: localizeMU("anvil.mobilityBaseTypes.reverseJoint"),
              tracked: localizeMU("anvil.mobilityBaseTypes.tracked"),
              wheeled: localizeMU("anvil.mobilityBaseTypes.wheeled"),
            },
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
        },
        {
          label: localizeMU("anvil.components.mobilityBase"),
        },
      ),
    };
  }
}

export class anvlArmLeftModel extends anvlComponentModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      armLeft: new SchemaField(
        {
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
        },
        {
          label: localizeMU("anvil.components.armLeft"),
        },
      ),
    };
  }
}

export class anvlArmRightModel extends anvlComponentModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      armRight: new SchemaField(
        {
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
        },
        {
          label: localizeMU("anvil.components.armRight"),
        },
      ),
    };
  }
}

export class anvlGeneratorModel extends anvlComponentModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      generator: new SchemaField(
        {
          enOutput: new NumberField(),
          enCapacity: new NumberField(),
          fuelCapacity: new NumberField(),
          chargeCapacity: new NumberField(),
          heatTolerance: new NumberField(),
          chassisType: new StringField({
            required: true,
            blank: false,
            initial: "gas",
            choices: {
              gas: localizeMU("anvil.coolingTypes.gas"),
              liquid: localizeMU("anvil.coolingTypes.liquid"),
              plasma: localizeMU("anvil.coolingTypes.plasma"),
            },
          }),
        },
        {
          label: localizeMU("anvil.components.generator"),
        },
      ),
    };
  }
}

export class anvlElectronicsModel extends anvlComponentModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      electronics: new SchemaField(
        {
          interceptBonus: new NumberField(),
          interceptCost: new NumberField(),
          cameraModifier: new NumberField(),
          refreshCost: new NumberField(),
          chassisType: new StringField({
            required: true,
            blank: false,
            initial: "efficient",
            choices: {
              efficient: localizeMU("anvil.hardwareTypes.efficient"),
              gunheadKE: localizeMU("anvil.hardwareTypes.gunheadKE"),
              gunheadCE: localizeMU("anvil.hardwareTypes.gunheadCE"),
              gunheadTE: localizeMU("anvil.hardwareTypes.gunheadTE"),
              hardened: localizeMU("anvil.hardwareTypes.hardened"),
              lowProfile: localizeMU("anvil.hardwareTypes.lowProfile"),
              multiEye: localizeMU("anvil.hardwareTypes.multiEye"),
              networkSiphon: localizeMU("anvil.hardwareTypes.networkSiphon"),
              quicklock: localizeMU("anvil.hardwareTypes.quicklock"),
              rangefinder: localizeMU("anvil.hardwareTypes.rangefinder"),
            },
          }),
        },
        {
          label: localizeMU("anvil.components.electronics"),
        },
      ),
    };
  }
}
