import { anvlMobilityBaseModel } from "./anvil.mjs";

declare module "./anvil.mjs" {
	interface anvlComponentModel {
		armorPoints: int;
		resistance: {
			kenetic: int;
			chemical: int;
			thermal: int;
		};
		load: int;
		energyDrain: int;
	}

	export default interface anvlCoreModel extends anvlComponentModel {
		core: {
			blockBonus: int;
			blockCost: int;
			defenceValue: int;
			criticalOutput: int;
			hardpoints: int;
		}
	}
	
	export default interface anvlMobilityBaseModel extends anvlComponentModel {
		mobilityBase: {
			dodgeBonus: int;
			dodgeCost: int;
			speed: int;
			manoeuvreCost: int;
			initiative: int;
			chassisType: keyof typeof ds["CONFIG"]["anvil"]["mobilityBases"];
			loadTolerance: {
				1: int;
				2: int;
				3: int;
				4: int;
				5: int;
			}
		}
	}

	export default interface anvlArmLeft extends anvlComponentModel {
		armLeft: {
			agility: int;
			stength: float;
			hardpoints: int;
		}
	}

	export default interface anvlArmRight extends anvlComponentModel {
		armRight: {
			agility: int;
			stength: float;
			hardpoints: int;
		}
	}

	export default interface anvlGenerator extends anvlComponentModel {
		generator: {
			enOutput: int;
			enCapacity: int;
			fuelCapacity: int;
			chargeCapacity: int;
			heatTolerance: int;
			coolingType: keyof typeof ds["CONFIG"]["anvil"]["coolingTypes"];
		}
	}

	export default interface anvlElectronics extends anvlComponentModel {
		electronics: {
			interceptBonus: int;
			interceptCost: int;
			cameraModifier: int;
			refrehCost: int;
			hardwareType: keyof typeof ds["CONFIG"]["anvil"]["hardwareTypes"];
		}
	}
}

declare module "./base-item.mjs" {
	export default interface baseItemModel {
		parent: MUItem;
    description: {
      value: string;
      director: string;
    }
    source: sourceModel;
	}
}
