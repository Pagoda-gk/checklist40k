export default [
  {
    name: "Hatred Eternal (Pain)",
    timing: ["myShooting", "myFight"],
    shortDesc: "Re-roll Hit roll (unit)",
    fullRules: `In your Shooting phase or the Fight phase, when you select this model’s unit to shoot or fight, you can spend 1 Pain token to Empower that unit. While that unit is Empowered, each time a model in that unit makes an attack, you can re-roll the Hit roll.`,
    addedBy: "Archon",
    type: "ability"
  },
  {
    name: "Battlefield Butchery (Pain)",
    timing: ["myFight", "oppFight"],
    shortDesc: "Add 1 to Attacks and Strength",
    fullRules: `In the Fight phase, when you select this unit to fight, you can spend 1 Pain token to Empower this unit. While Empowered, add 1 to the Attacks and Strength characteristics of this unit's melee weapons.`,
    addedBy: "Hellions",
    type: "ability"
  },
  {
    name: "Skyboard Evasion",
    timing: ["oppMove"],
    shortDesc: "Reactive move",
    fullRules: `Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9" of this unit, this unit can make a Normal move of up to D6".`,
    addedBy: "Hellions",
    type: "ability"
  },
  {
    name: "Cruel Enforcers",
    timing: ["myCommand"],
    shortDesc: "Sticky objectives",
    fullRules: "(full description here)",
    addedBy: "Kabalite Warriors",
    type: "ability"
  },
  {
    name: "Sadistic Raiders (Pain)",
    timing: ["myShooting", "myFight"],
    shortDesc: "Reroll wound of 1.",
    fullRules: "(full description here)",
    addedBy: "Kabalite Warriors",
    type: "ability"
  },
  {
    name: "Master of Blades (Pain)",
    timing: ["myFight", "oppFight"],
    shortDesc: "Add 1 to Wound roll (Unit)",
    fullRules: `In the Fight phase, when you select this model's unit to fight, you can spend 1 Pain token to Empower that unit. While that unit is Empowered, each time a model in that unit makes a melee attack, add 1 to the Wound roll.`,
    addedBy: "Drazhar",
    type: "ability"
  },

  {
    name: "Fleshcraft (Pain)",
    timing: ["myCommand"],
    shortDesc: "Return D3+1 Bodyguard",
    fullRules: `In your Command phase, you can spend 1 Pain token to Empower this model's unit. Each time you do, you can return up to D3+1 destroyed Bodyguard models to that unit.`,
    addedBy: "Haemonculus",
    type: "ability"
  },

  {
    name: "Fear Incarnate",
    timing: ["oppCommand"],
    shortDesc: "Battleshock if within 6\" and below Start Str",
    fullRules: `While an enemy unit is within 6" of this model, worsen the Leadership characteristic of models in that unit by 1. In addition, in the Battle-shock step of your opponent's Command phase, if such an enemy unit is below its Starting Strength, it must take a Battle-shock test.`,
    addedBy: "Haemonculus",
    type: "ability"
  },
  {
    name: "Archon of the Poisoned Tongue (Pain)",
    timing: ["myShooting", "myFight", "oppFight"],
    shortDesc: "Sustained hits 1 or Lethal hits (Unit)",
    fullRules: `In your Shooting phase or the Fight phase, when you select this model's
unit to shoot or fight, you can spend 1 Pain token to Empower that unit. If you do, select one of the following abilities: [SUSTAINED HITS 1]; [LETHAL HITS]. Until the end of the phase, while that unit is Empowered, weapons equipped by models in that unit have that selected ability.`,
    addedBy: "Lady Malys",
    type: "ability"
  },


  {
    name: "Brides of Death (Pain)",
    timing: ["oppFight", "myfight"],
    shortDesc: "Improve Str&AP by 1 (Unit)",
    fullRules: `In the Fight phase, when you select this model's unit to fight, you can spend 1 Pain token to Empower that unit. While that unit is Empowered, each time a model in that unit makes a melee attack, improve the Strength and Armour Penetration characteristics of that attack by 1.`,
    addedBy: "Lelith Hesperax",
    type: "ability"
  },


  {
    name: "Thrilling Spectacle",
    timing: ["oppFight", "myfight"],
    shortDesc: "Once per battle 3+ Invul & 12 Attacks",
    fullRules: `Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, this model has a 3+ invulnerable save and change the Attacks characteristic of melee weapons equipped by this model to 12.`,
    addedBy: "Lelith Hesperax",
    type: "ability"
  },


  {
    name: "Lithe Agility (Pain)",
    timing: ["myMove", "myCharge"],
    shortDesc: "Re-roll Advance & Charge",
    fullRules: `In your Movement phase when you select this model’s unit to Advance, or in your Charge phase before you make a Charge roll for this model's unit, you can spend 1 Pain token to Empower that unit. While that unit is Empowered, you can re-roll Advance and Charge rolls made for that unit.`,
    addedBy: "Succubus",
    type: "ability"
  },


  {
    name: "Experimental Enhancements (Pain)",
    timing: ["myFight", "oppFight"],
    shortDesc: "3 attacks/4 attacks with Hazardous",
    fullRules: `In the Fight phase, when you select this unit to fight, you can spend 1 Pain token to Empower this unit. Each time you do, select one of the following to apply to this unit until the end of the phase:
Melee weapons equipped by non-CHARACTER models in this unit have an Attacks characteristic of 3.
Melee weapons equipped by non-CHARACTER models in this unit have an Attacks characteristic of 4 and the [HAZARDOUS] ability.`,
    addedBy: "Wracks",
    type: "ability"
  },


  {
    name: "Acrobatic Gladiators (Pain)",
    timing: ["myCharge"],
    shortDesc: "Advance/Fall back and charge",
    fullRules: `At the start of your Charge phase, you can spend 1 Pain token to Empower this unit. While Empowered, this unit is eligible to declare a charge in a turn in which it Advanced or Fell Back.`,
    addedBy: "Wyches",
    type: "ability"
  },


  {
    name: "Splinter Racks (Pain)",
    timing: ["myShooting"],
    shortDesc: "Re-roll Hit roll for [ANTI] weapons",
    fullRules: `In your Shooting phase, when you select this model to shoot, you can spend 1 Pain token to Empower this model. While Empowered, if one or more units are embarked within this model, each time this model makes an attack with a ranged weapon that has the [ANTI] ability, you can re-roll the Hit roll.`,
    addedBy: "Raider",
    type: "ability"
  },


  {
    name: "Splinter Racks (Pain)",
    timing: ["myShooting"],
    shortDesc: "Re-roll Hit roll for [ANTI] weapons",
    fullRules: `In your Shooting phase, when you select this model to shoot, you can spend 1 Pain token to Empower this model. While Empowered, if one or more units are embarked within this model, each time this model makes an attack with a ranged weapon that has the [ANTI] ability, you can re-roll the Hit roll.`,
    addedBy: "Raider",
    type: "ability"
  },


  {
    name: "Vanguard of the Dark City",
    timing: ["myCommand"],
    shortDesc: "Choose a bonus for the turn.",
    fullRules: `Vanguard of the Dark City: At the start of your Command phase, select one of the abilities in the Vanguard of the Dark City section (see above) for this model. Until the start of your next Command phase, this model has that ability.`,
    addedBy: "Raider",
    type: "ability"
  },


  {
    name: "Rapid Deployment (Pain)",
    timing: ["myMove"],
    shortDesc: "Advance and Disembark",
    fullRules: `In your Movement phase, when you select this model to Advance, you can spend 1 Pain token to Empower this model. While Empowered, units can disembark from this model after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally in the remainder of the turn.`,
    addedBy: "Venom",
    type: "ability"
  },


  {
    name: "Aerialists",
    timing: ["myEndOfFight"],
    shortDesc: "Embark within 6\" ",
    fullRules: `At the end of the Fight phase, if there are no models currently embarked within this TRANSPORT, you can select one friendly DRUKHARI INFANTRY unit that has 6 or fewer models that is wholly within 6" of this TRANSPORT (you cannot select a unit that can FLY). Unless that unit is within Engagement Range of one or more enemy units, it can embark within this TRANSPORT.`,
    addedBy: "Venom",
    type: "ability"
  },
  {
    name: "Master of Blades (Pain)",
    timing: ["myFight", "oppFight"],
    shortDesc: "Add 1 to Wound roll (Unit)",
    fullRules: `In the Fight phase, when you select this model's unit to fight, you can spend 1 Pain token to Empower that unit. While that unit is Empowered, each time a model in that unit makes a melee attack, add 1 to the Wound roll.`,
    addedBy: "Drazhar",
    type: "ability"
  },

  {
    name: "Pain Adept",
    timing: ["myCommand"],
    shortDesc: "Extra Pain Token on 4+",
    fullRules: `In your Command phase, if one or more models from your army with this ability are on the battlefield, roll one D6: on a 4+, you gain 1 Pain token.`,
    addedBy: "Haemonculus",
    type: "ability"
  },


  {
    name: "Brides of Death (Pain)",
    timing: ["oppFight", "myfight"],
    shortDesc: "Improve Str&AP by 1 (Unit)",
    fullRules: `In the Fight phase, when you select this model's unit to fight, you can spend 1 Pain token to Empower that unit. While that unit is Empowered, each time a model in that unit makes a melee attack, improve the Strength and Armour Penetration characteristics of that attack by 1.`,
    addedBy: "Lelith Hesperax",
    type: "ability"
  },


  {
    name: "Thrilling Spectacle",
    timing: ["oppFight", "myfight"],
    shortDesc: "Once per battle 3+ Invul & 12 Attacks",
    fullRules: `Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, this model has a 3+ invulnerable save and change the Attacks characteristic of melee weapons equipped by this model to 12.`,
    addedBy: "Lelith Hesperax",
    type: "ability"
  },

  {
    name: "Splinter Racks (Pain)",
    timing: ["myShooting"],
    shortDesc: "Re-roll Hit roll for [ANTI] weapons",
    fullRules: `In your Shooting phase, when you select this model to shoot, you can spend 1 Pain token to Empower this model. While Empowered, if one or more units are embarked within this model, each time this model makes an attack with a ranged weapon that has the [ANTI] ability, you can re-roll the Hit roll.`,
    addedBy: "Raider",
    type: "ability"
  },


  {
    name: "Splinter Racks (Pain)",
    timing: ["myShooting"],
    shortDesc: "Re-roll Hit roll for [ANTI] weapons",
    fullRules: `In your Shooting phase, when you select this model to shoot, you can spend 1 Pain token to Empower this model. While Empowered, if one or more units are embarked within this model, each time this model makes an attack with a ranged weapon that has the [ANTI] ability, you can re-roll the Hit roll.`,
    addedBy: "Raider",
    type: "ability"
  },


  {
    name: "Vanguard of the Dark City",
    timing: ["myCommand"],
    shortDesc: "Choose a bonus for the turn.",
    fullRules: `Vanguard of the Dark City: At the start of your Command phase, select one of the abilities in the Vanguard of the Dark City section (see above) for this model. Until the start of your next Command phase, this model has that ability.`,
    addedBy: "Raider",
    type: "ability"
  },


  {
    name: "Rapid Deployment (Pain)",
    timing: ["myMove"],
    shortDesc: "Advance and Disembark",
    fullRules: `In your Movement phase, when you select this model to Advance, you can spend 1 Pain token to Empower this model. While Empowered, units can disembark from this model after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally in the remainder of the turn.`,
    addedBy: "Venom",
    type: "ability"
  },


  {
    name: "Aerialists",
    timing: ["myEndOfFight"],
    shortDesc: "Embark within 6\" ",
    fullRules: `At the end of the Fight phase, if there are no models currently embarked within this TRANSPORT, you can select one friendly DRUKHARI INFANTRY unit that has 6 or fewer models that is wholly within 6" of this TRANSPORT (you cannot select a unit that can FLY). Unless that unit is within Engagement Range of one or more enemy units, it can embark within this TRANSPORT.`,
    addedBy: "Venom",
    type: "ability"
  },

  {
    name: "Pain Parasite (Pain)",
    timing: ["myFight", "myShoot", "oppFight"],
    shortDesc: "Regain 3 lost wounds if an enemy model was destroyed",
    fullRules: `In your Shooting phase or the Fight phase, when you select this unit to shoot or fight, you can spend 1 Pain token to Empower this unit. While Empowered, each time this unit shoots or fights, after it has resolved its attacks, if one or more enemy models were destroyed as a result of those attacks, one model in this unit regains up to 3 lost wounds (if all models in this unit have their starting number of wounds and this unit is below its Starting Strength, 1 model is returned to this unit with 3 wounds remaining).`,
    addedBy: "Cronos",
    type: "ability"
  },



  {
    name: "Assassins' Poisons (Pain)",
    timing: ["myShoot", "myFight", "oppFight"],
    shortDesc: "Gain Lethal Hits and Precision",
    fullRules: `In your Shooting phase or the Fight phase, when you select this unit to shoot or fight, you can spend 1 Pain token to Empower this unit. While Empowered, weapons equipped by models in this unit (excluding blast pistols, blasters and dark lances) have the [LETHAL HITS] and [PRECISION] abilities.`,
    addedBy: "Hand of the Archon",
    type: "ability"
  },

  {
    name: "Decapitating Stikes (Pain)",
    timing: ["myFight", "oppFight"],
    shortDesc: "Devestating Wounds against Infantry",
    fullRules: `In the Fight phase, when you select this unit to fight, you can spend 1 Pain token to Empower this unit. While Empowered, each time a model in this unit makes a melee attack that targets an INFANTRY unit, that attack has the [DEVASTATING WOUNDS] ability.`,
    addedBy: "Incubi",
    type: "ability"
  },

  {
    name: "Tormentors",
    timing: ["myFight", "oppFight"],
    shortDesc: "Enemy unit takes Battle-shock test",
    fullRules: `At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test. Each time a model in this unit makes a melee attack that targets a Battle-shocked unit, add 1 to the Hit roll.`,
    addedBy: "Incubi",
    type: "ability"
  },

  {
    name: "Fade Away (Pain)",
    timing: ["oppEndOfFight"],
    shortDesc: "Place into Strategic Reserves",
    fullRules: `At the end of your opponent's Fight phase, if this unit is not within Engagement Range of one or more enemy units, you can spend 1 Pain token to Empower this unit. Each time you do, remove this unit from the battlefield and place it into Strategic Reserves.`,
    addedBy: "Mandrakes",
    type: "ability"
  },

  {
    name: "Agonising Suppression (Pain)",
    timing: ["myShoot"],
    shortDesc: "Suppress a unit (-1 to hit)",
    fullRules: `In your Shooting phase, when you select this model to shoot, you can spend 1 Pain token to Empower this model. While Empowered, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.`,
    addedBy: "Ravager",
    type: "ability"
  },

  {
    name: "Matchless Swiftness (Pain)",
    timing: ["myMove"],
    shortDesc: "Advance +8\" ",
    fullRules: `In your Movement phase, when you select this unit to Advance, you can spend 1 Pain token to Empower this unit. While Empowered, each time this unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 8" to the Move characteristic of models in this unit.`,
    addedBy: "Reavers",
    type: "ability"
  },

  {
    name: "Winged Strike (Pain)",
    timing: ["myShoot"],
    shortDesc: "Re-roll Hit roll",
    fullRules: `In your Shooting phase, when you select this unit to shoot, you can spend 1 Pain token to Empower this unit. While Empowered, each time a model in this unit makes a ranged attack, you can re-roll the Hit roll.`,
    addedBy: "Scourges (Heavy Weapons)",
    type: "ability"
  },

  {
    name: "Airborne Evasion",
    timing: ["myShoot"],
    shortDesc: "Move 6\" after shooting",
    fullRules: `In your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6". If it does, until the end of the turn, this unit is not eligible to declare a charge.`,
    addedBy: "Scourges (Heavy Weapons)",
    type: "ability"
  }
];
