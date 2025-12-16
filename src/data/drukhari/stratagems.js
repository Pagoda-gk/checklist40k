export default [
  {
    name: "Malicious Frenzy",
    timing: ["myShooting", "myFight", "oppFight"],
    shortDesc: "Lethal Hits or Sustained Hits",
    fullRules: `WHEN: Your Shooting phase or the Fight phase.

TARGET: One DRUKHARI or HARLEQUINS unit from your army that has not been selected to shoot or fight this phase.

EFFECT: Select [LETHAL HITS] or [SUSTAINED HITS 1]. Until the end of the phase, weapons equipped by models in your unit have the selected ability.`,
    addedBy: "Reaper's Wager",
    cost: 1,
    type: "stratagem"
  },
  {
    name: "Fateful Role",
    timing: ["myFight", "oppFight"],
    shortDesc: "Fight after death 4+",
    fullRules: `WHEN: Fight phase, just after an enemy unit has selected its targets.

TARGET: One DRUKHARI or HARLEQUINS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.

EFFECT: Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if that unit is losing the wager: on a 4+, do not remove it from play. That destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.`,
    addedBy: "Reaper's Wager",
    cost: 1,
    type: "stratagem"
  },
  {
    name: "Murderer's Circus",
    timing: ["myFight", "oppFight"],
    shortDesc: "Opponents subtract 1 to Hit",
    fullRules: `WHEN: Fight phase, just after an enemy unit has selected its targets.

TARGET: One DRUKHARI or HARLEQUINS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.

EFFECT: Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.`,
    addedBy: "Reaper's Wager",
    cost: 1,
    type: "stratagem"
  },
  {
    name: "Shorten the Odds",
    timing: ["myMove"],
    shortDesc: "Advance and Charge",
    fullRules: `WHEN: Your Movement phase, just after a DRUKHARI or HARLEQUINS unit from your army has Advanced.

TARGET: That unit.

EFFECT: Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.`,
    addedBy: "Reaper's Wager",
    cost: 1,
    type: "stratagem"
  },
  {
    name: "Scintillating Tempo",
    timing: ["myMove", "myCharge"],
    shortDesc: "No Overwatch",
    fullRules: `WHEN: Your Movement phase or your Charge phase, just after a DRUKHARI or HARLEQUINS unit from your army is selected to make a Normal, Advance or Fall Back move, is set up on the battlefield, or declares a charge.

TARGET: That unit.

EFFECT: Until the end of the turn, enemy units cannot use the Fire Overwatch Stratagem to shoot at your unit.`,
    addedBy: "Reaper's Wager",
    cost: 1,
    type: "stratagem"
  },
  {
    name: "Dance Macabre",
    timing: ["oppMove"],
    shortDesc: "Reactive Normal move",
    fullRules: `WHEN: Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.

TARGET: One DRUKHARI INFANTRY or HARLEQUINS INFANTRY unit from your army that is within 9" of that enemy unit.

EFFECT: Your unit can make a Normal move of up to D6". If your unit is currently losing the wager, it can make a Normal move of up to 6" instead.`,
    addedBy: "Reaper's Wager",
    cost: 2,
    type: "stratagem"
  },
  {
    name: "Combat Drugs",
    timing: ["myCommand"],
    shortDesc: "Roll for 2 Combat Drugs or choose 1",
    fullRules: `At the start of your Command phase, select which Combat Drugs will be active for your army until the start of your next Command phase. To do so, either select one from the list below (you cannot select the same Combat Drug more than once per battle), or randomly select two by rolling two D6. When doing so randomly, Combat Drugs you have previously selected can become active again, but if you randomly select one that is already active for your army, it has no additional effect.

1. Adrenalight
Add 1 to the Attacks characteristic of melee weapons equipped by WYCH CULT models from your army.

2. Hypex
Add 2" to the Move characteristic of WYCH CULT models from your army.

3. Serpentin
Improve the Weapon Skill characteristic of melee weapons equipped by WYCH CULT models from your army by 1.

4. Painbringer
Add 1 to the Toughness characteristic of WYCH CULT models from your army.

5. Grave Lotus
Add 1 to the Strength characteristic of melee weapons equipped by WYCH CULT models from your army.

6. Splintermind
Improve the Leadership characteristic of WYCH CULT models from your army by 1, and improve the Ballistic Skill characteristic of ranged weapons equipped by WYCH CULT models from your army by 1.`,
    addedBy: "Spectacle of Spite",
    type: "ability"
  },


  {
    name: "Berserk Fugue",
    timing: ["myFight", "oppFight"],
    shortDesc: "Fight after destroyed",
    fullRules: `WHEN: Fight phase, just after an enemy unit has selected its targets.

TARGET: One WYCH CULT unit from your army that was selected as the target of one or more of the attacking unit’s attacks.

EFFECT: Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.`,
    addedBy: "Spectacle of Spite",
    cost: 2,
    type: "stratagem"
  },

  {
    name: "Deadly Debut",
    timing: ["myFight", "oppFight"],
    shortDesc: "Lethal Hits and AP+1 for Wyches",
    fullRules: `WHEN: Fight phase.

TARGET: One DRUKHARI unit from your army that made a Charge move this turn and has not been selected to fight this phase.

EFFECT: Until the end of the phase, melee weapons equipped by models in your unit have the [LETHAL HITS] ability. If your unit is a WYCHES unit, until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1 as well.`,
    addedBy: "Spectacle of Spite",
    cost: 1,
    type: "stratagem"
  },

  {
    name: "Feigned Weakness",
    timing: ["myMove"],
    shortDesc: "Fall back, shoot and charge",
    fullRules: `WHEN: Your Movement phase, just after a DRUKHARI unit from your army Falls Back.

TARGET: That DRUKHARI unit.

EFFECT: Until the end of the turn, your unit is eligible to shoot and declare a charge in turn in which it Fell Back.`,
    addedBy: "Spectacle of Spite",
    cost: 1,
    type: "stratagem"
  },

  {
    name: "Preternatural Agility",
    timing: ["myMove", "myCharge"],
    shortDesc: "Ignore move modifiers, move through units",
    fullRules: `WHEN: Start of your Movement or Charge phase.

TARGET: One WYCH CULT unit from your army.

EFFECT: Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, you can ignore any or all modifiers to its Move characteristic and to Advance and Charge rolls made for it and, until the end of the turn, each time a model in your unit makes such a move, it can move horizontally through models (when doing so, such a model can move within Engagement Range of such models but cannot end a Normal or Advance move within Engagement Range of them).`,
    addedBy: "Spectacle of Spite",
    cost: 1,
    type: "stratagem"
  },

  {
    name: "A Challenge Met",
    timing: ["oppMove"],
    shortDesc: "Charge a unit within 9\"",
    fullRules: `WHEN: End of your opponent's Movement phase.

TARGET: One WYCH CULT unit from your army that would be able to declare a charge if it were your Charge phase.

EFFECT: Select one enemy unit within 9" of your unit that was set up on the battlefield this phase or that ended a Normal or Advance move this phase. Your unit now declares a charge that targets only that enemy unit, and you resolve that charge.

RESTRICTIONS: Even if that charge is successful, your unit does not receive any Charge bonus this turn.`,
    addedBy: "Spectacle of Spite",
    cost: 2,
    type: "stratagem"
  },


  {
    name: "Acrobatic Display",
    timing: ["oppShooting"],
    shortDesc: "5+ Invul",
    fullRules: `WHEN: Your opponent's Shooting phase, just after an enemy unit has selected its targets.

TARGET: One WYCH CULT unit from your army that was selected as the target of one or more of the attacking unit’s attacks.

EFFECT: Until the end of the phase, models in your unit have a 5+ invulnerable save.`,
    addedBy: "Spectacle of Spite",
    cost: 1,
    type: "stratagem"
  },


  {
    name: "Rain of Cruelty",
    timing: ["myShoot", "myFight"],
    shortDesc: "Disembark, gain Lance and Ignores Cover",
    fullRules: `Each time a DRUKHARI unit from your army disembarks from a TRANSPORT, until the end of the turn:
Ranged weapons equipped by models in that disembarking unit have the [ignores cover] ability.
Melee weapons equipped by models in that disembarking unit have the [lance] ability.`,
    addedBy: "Skysplinter Assault",
    type: "ability"
  },


  {
    name: "Vicious Blades",
    timing: ["myFight", "oppFight"],
    shortDesc: "Transport causes Mortal Wounds",
    fullRules: `WHEN: Fight phase, just after a DRUKHARI TRANSPORT from your army has selected its targets.

TARGET: That TRANSPORT.

EFFECT: After your TRANSPORT has fought, select one enemy unit that was the target of one or more of those attacks and roll one D6 for each model embarked within your TRANSPORT, adding 1 to the result if that embarked model is a WRACKS model: for each 5+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).`,
    addedBy: "Skysplinter Assault",
    cost: 1,
    type: "stratagem"
  },

  {
    name: "Wraithlike Retreat",
    timing: ["myEndOfFight", "oppEndOfFight"],
    shortDesc: "Normal or Fall Back move",
    fullRules: `WHEN: End of the Fight phase.

TARGET: One DRUKHARI INFANTRY unit from your army that fought this phase.

EFFECT: Your unit can make a Normal or Fall Back move, but unless it is a WYCHES unit, it must end that move wholly within 3" horizontally and 5" vertically of a friendly DRUKHARI TRANSPORT and must embark within that TRANSPORT at the end of that move (otherwise, it cannot make that move).`,
    addedBy: "Skysplinter Assault",
    cost: 1,
    type: "stratagem"
  },

  {
    name: "Pounce on the Prey",
    timing: ["myMove"],
    shortDesc: "Disembark then charge",
    fullRules: `WHEN: Your Movement phase, just after a DRUKHARI INFANTRY unit from your army disembarks from a TRANSPORT that made a Normal move this phase.

TARGET: That INFANTRY unit.

EFFECT: Until the end of the turn, your unit is eligible to declare a charge.`,
    addedBy: "Skysplinter Assault",
    cost: 1,
    type: "stratagem"
  },

  {
    name: "Skyborne Anihilation",
    timing: ["myShoot"],
    shortDesc: "Disembark, ranged weapons have Sustained Hits",
    fullRules: `WHEN: Your Shooting phase.

TARGET: One DRUKHARI unit from your army that has not been selected to shoot this phase and that disembarked from a TRANSPORT this turn.

EFFECT: Until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability, or the [SUSTAINED HITS 2] ability if your unit is a KABALITE WARRIORS or HAND OF THE ARCHON unit.`,
    addedBy: "Skysplinter Assault",
    cost: 1,
    type: "stratagem"
  },

  {
    name: "Swooping Mockery",
    timing: ["oppMove"],
    shortDesc: "Transport makes a 6\" move",
    fullRules: `WWHEN: Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.

TARGET: One DRUKHARI TRANSPORT from your army that is within 9" of that enemy unit.

EFFECT: Your TRANSPORT can make a Normal move of up to 6".`,
    addedBy: "Skysplinter Assault",
    cost: 1,
    type: "stratagem"
  },


  {
    name: "Night Shield",
    timing: ["oppShooting"],
    shortDesc: "4+ Invul for Vehicle",
    fullRules: `WHEN: Your opponent's Shooting phase, just after an enemy unit has selected its targets.

TARGET: One DRUKHARI VEHICLE unit from your army that was selected as the target of one or more of the attacking unit’s attacks.

EFFECT: Until the end of the phase, models in your unit have a 4+ invulnerable save.`,
    addedBy: "Skysplinter Assault",
    cost: 1,
    type: "stratagem"
  }

];
