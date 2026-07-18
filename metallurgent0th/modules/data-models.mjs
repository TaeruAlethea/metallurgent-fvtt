const { HTMLField, NumberField, SchemaField, StringField } =
  foundry.data.fields;

class anvlComponentDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      armorPoints: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      // resistance: new SchemaField({
      //   kenetic: new NumberField({
      //     required: true,
      //     integer: true,
      //     positive: true,
      //     initial: 0,
      //   }),
      //   chemical: new NumberField({
      //     required: true,
      //     integer: true,
      //     positive: true,
      //     initial: 0,
      //   }),
      //   thermal: new NumberField({
      //     required: true,
      //     integer: true,
      //     positive: true,
      //     initial: 0,
      //   }),
      // }),
      // load: new NumberField({
      //   required: true,
      //   integer: false,
      //   positive: true,
      //   initial: 0,
      // }),
      // energyDrain: new NumberField({
      //   required: true,
      //   integer: true,
      //   positive: true,
      //   initial: 0,
      // }),
      // cost: new NumberField({
      //   required: true,
      //   integer: true,
      //   positive: true,
      //   initial: 0,
      // }),
      // description: new HTMLField({ required: true, blank: true })
    };
  }
}

export class anvlCoreDataModel extends anvlComponentDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      blockBonus: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      // blockCost: new NumberField({
      //   required: true,
      //   integer: true,
      //   positive: true,
      //   initial: 0,
      // }),
      // criticalOutput: new NumberField({
      //   required: true,
      //   integer: true,
      //   positive: true,
      //   initial: 0,
      // }),
      // hardpoints: new NumberField({
      //   required: true,
      //   integer: true,
      //   positive: true,
      //   initial: 0,
      // })
    };
  }
}

export class anvlMobilityBaseDataModel extends anvlComponentDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      dodgeBonus: new NumberField({
        required: true,
        integer: true,
        positive: true,
        initial: 1,
      }),
      // dodgeCost: new NumberField({
      //   required: true,
      //   integer: true,
      //   positive: true,
      //   initial: 0,
      // }),
      // speed: new NumberField({
      //   required: true,
      //   integer: true,
      //   positive: true,
      //   initial: 0,
      // }),
      // manoeuvreCost: new NumberField({
      //   required: true,
      //   integer: true,
      //   positive: true,
      //   initial: 0,
      // }),
      // initiative: new NumberField({
      //   required: true,
      //   integer: true,
      //   positive: true,
      //   initial: 0,
      // })
    };
  }
}
