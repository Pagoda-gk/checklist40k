export default [
  {
    name: "Command Re-roll",
    timing: ["myCommand", "myMove", "myShooting", "myCharge", "myFight", "myEndOfFight", "oppCommand", "oppMove", "oppShooting", "oppCharge", "oppFight", "oppEndOfFight"],
    shortDesc: "Re-roll 1 dice",
    fullRules: `WHEN: Any phase, just after you make an Advance roll, a Charge roll, a Desperate Escape test or a Hazardous test for a unit from your army, or a Hit roll, a Wound roll, a Damage roll or a saving throw for a model in that unit, or a roll to determine the number of attacks made with a weapon equipped by a model in that unit. If you are using fast dice rolling, this Stratagem can still be used after rolling multiple rolls or saving throws at once.

TARGET: That unit or model from your army.

EFFECT: You re-roll that roll, test or saving throw. If you are using fast dice rolling, select one of those rolls or saving throws to re-roll.`,
    addedBy: "Universal",
    cost: 1,
    type: "universalStratagem"
  },

  {
    name: "Counter-Offensive",
    timing: ["myFight", "oppFight"],
    shortDesc: "Interrupt fight",
    fullRules: `WHEN: Fight phase, just after an enemy unit has fought.

TARGET: One unit from your army that is within Engagement Range of one or more enemy units and that has not already been selected to fight this phase.

EFFECT: Your unit fights next.`,
    addedBy: "Universal",
    cost: 2,
    type: "universalStratagem"
  },

  {
    name: "Epic Challenge",
    timing: ["myFight", "oppFight"],
    shortDesc: "Gain [PRECISION]",
    fullRules: `WHEN: Fight phase, when a CHARACTER unit from your army that is within Engagement Range of one or more Attached units is selected to fight.

TARGET: One CHARACTER model in your unit.

EFFECT: Until the end of the phase, all melee attacks made by that model have the [PRECISION] ability.`,
    addedBy: "Universal",
    cost: 1,
    type: "universalStratagem"
  },

  {
    name: "Insane Bravery",
    timing: ["myCommand"],
    shortDesc: "Auto-pass battle shock",
    fullRules: `WHEN: Battle-shock step of your Command phase, just before you take a Battle-shock test for a unit from your army.

TARGET: That unit from your army.

EFFECT: Your unit automatically passes that Battle-shock test.

RESTRICTIONS: You cannot use this Stratagem more than once per battle.`,
    addedBy: "Universal",
    cost: 1,
    type: "universalStratagem"
  },

  {
    name: "Grenade",
    timing: ["myShooting"],
    shortDesc: "6d6, each 4+ causes 1 Mortal Wound",
    fullRules: `WHEN: Your Shooting phase.

TARGET: One GRENADES unit from your army (excluding units that Advanced, Fell Back or have shot this turn) that is not within Engagement Range of one or more enemy units.

EFFECT: Select one GRENADES model in your unit and one enemy unit that is not within Engagement Range of any units from your army and is within 8" of and visible to your GRENADES model. Roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.`,
    addedBy: "Universal",
    cost: 1,
    type: "universalStratagem"
  },


  {
    name: "Tank Shock",
    timing: ["myCharge"],
    shortDesc: "1d6 for each Toughness, 1 Mortal Wound on 5+",
    fullRules: `WHEN: Your Charge phase, just after a VEHICLE unit from your army ends a Charge move.

TARGET: That VEHICLE unit.

EFFECT: Select one enemy unit within Engagement Range of your unit, and select one VEHICLE model in your unit that is within Engagement Range of that enemy unit. Roll a number of D6 equal to the Toughness characteristic of the selected VEHICLE model. For each 5+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).`,
    addedBy: "Universal",
    cost: 1,
    type: "universalStratagem"
  },

  {
    name: "Rapid Ingress",
    timing: ["oppMove"],
    shortDesc: "Deep Strike out of sequence",
    fullRules: `WHEN: End of your opponent's Movement phase.

TARGET: One unit from your army that is in Reserves.

EFFECT: Your unit can arrive on the battlefield as if it were the Reinforcements step of your Movement phase, and if every model in that unit has the Deep Strike ability, you can set that unit up as described in the Deep Strike ability (even though it is not your Movement phase).

RESTRICTIONS: You cannot use this Stratagem to enable a unit to arrive on the battlefield during a battle round it would not normally be able to do so in.`,
    addedBy: "Universal",
    cost: 1,
    type: "universalStratagem"
  },


  {
    name: "Fire Overwatch",
    timing: ["oppMove", "oppCharge"],
    shortDesc: "Shoot moving unit within 24\" ",
    fullRules: `WHEN: Your opponent's Movement or Charge phase, just after an enemy unit is set up or when an enemy unit starts or ends a Normal, Advance or Fall Back move, or declares a charge.

TARGET: One unit from your army that is within 24" of that enemy unit and that would be eligible to shoot if it were your Shooting phase.

EFFECT: If that enemy unit is visible to your unit, your unit can shoot that enemy unit as if it were your Shooting phase.

RESTRICTIONS: You cannot target a TITANIC unit with this Stratagem. Until the end of the phase, each time a model in your unit makes a ranged attack, an unmodified Hit roll of 6 is required to score a hit, irrespective of the attacking weapon’s Ballistic Skill or any modifiers. You can only use this Stratagem once per turn.`,
    addedBy: "Universal",
    cost: 1,
    type: "universalStratagem"
  },


  {
    name: "Go to Ground",
    timing: ["oppShooting"],
    shortDesc: "6+ Invul, Benefit of Cover",
    fullRules: `WHEN: Your opponent's Shooting phase, just after an enemy unit has selected its targets.

TARGET: One INFANTRY unit from your army that was selected as the target of one or more of the attacking unit’s attacks.

EFFECT: Until the end of the phase, all models in your unit have a 6+ invulnerable save and have the Benefit of Cover.`,
    addedBy: "Universal",
    cost: 1,
    type: "universalStratagem"
  },


  {
    name: "Smokescreen",
    timing: ["oppShooting"],
    shortDesc: "Benefit of Cover, Stealth",
    fullRules: `WHEN: Your opponent's Shooting phase, just after an enemy unit has selected its targets.

TARGET: One SMOKE unit from your army that was selected as the target of one or more of the attacking unit’s attacks.

EFFECT: Until the end of the phase, all models in your unit have the Benefit of Cover and the Stealth ability.`,
    addedBy: "Universal",
    cost: 1,
    type: "universalStratagem"
  },


  {
    name: "Heroic Intervention",
    timing: ["oppCharge"],
    shortDesc: "Counter charge within 6\" ",
    fullRules: `WHEN: Your opponent's Charge phase, just after an enemy unit ends a Charge move.

TARGET: One unit from your army that is within 6" of that enemy unit and would be eligible to declare a charge against that enemy unit if it were your Charge phase.

EFFECT: Your unit now declares a charge that targets only that enemy unit, and you resolve that charge as if it were your Charge phase.

RESTRICTIONS: You can only select a VEHICLE unit from your army if it is a WALKER. Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.`,
    addedBy: "Universal",
    cost: 1,
    type: "universalStratagem"
  }
];
