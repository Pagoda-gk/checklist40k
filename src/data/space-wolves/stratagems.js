export default [
    {
        name: "Pack's Quarry",
        timing: ["myFight", "oppFight"],
        shortDesc: "Saga +1 to hit, + Wound if Saga complete",
        fullRules: `Each time a model in a SPACE WOLVES unit from your army makes a melee attack that targets an enemy unit, if that enemy unit is within Engagement Range of one or more other ADEPTUS ASTARTES units from your army, or if the attacking unit contains more models than that enemy unit: 
Add 1 to the Hit roll. 
If your Saga is completed (see below), add 1 to the Wound roll as well.

 SAGA OF THE HUNTER
 At the start of the first battle round, your Quarry tally is 0.
 Each time an ADEPTUS ASTARTES unit from your army fights, after all of those attacks have been resolved, add 1 to your Quarry tally for each enemy unit destroyed by those attacks.
 Once your Quarry tally is equal to or greater than the number shown in the table below (depending on the battle size), your Saga is completed.
 Incursion 2
 Strike Force 3
 Onslaught 4`,
        addedBy: "Saga of the Hunter",
        type: "ability"
    },


    {
        name: "Oath of Moment",
        timing: ["myCommand"],
        shortDesc: "Choose Oath of Moment target",
        fullRules: `If your Army Faction is ADEPTUS ASTARTES, at the start of your Command phase, select one unit from your opponent’s army. Until the start of your next Command phase, that enemy unit is your Oath of Moment target. Each time a model with this ability makes an attack that targets your Oath of Moment target you can re-roll the Hit roll.`,
        addedBy: "Saga of the Hunter",
        type: "ability"
    },
    {
        name: "Oath of Moment",
        timing: ["myCommand"],
        shortDesc: "Choose Oath of Moment target",
        fullRules: `If your Army Faction is ADEPTUS ASTARTES, at the start of your Command phase, select one unit from your opponent’s army. Until the start of your next Command phase, that enemy unit is your Oath of Moment target. Each time a model with this ability makes an attack that targets your Oath of Moment target you can re-roll the Hit roll.`,
        addedBy: "Saga of the Beastslayer",
        type: "ability"
    },

    {
        name: "Hunters' Trail",
        timing: ["myFight", "oppFight"],
        shortDesc: "Pile in/Consolidate 6",
        fullRules: `WHEN: Fight phase.

TARGET: One SPACE WOLVES unit (excluding MONSTERS and VEHICLES) from your army that has not been selected to fight this phase.

EFFECT: Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6" instead of up to 3". When doing so, it does not need to end that move closer to the closest enemy model, provided it ends that move as close as possible to the closest enemy unit.`,
        addedBy: "Saga of the Hunter",
        cost: 1,
        type: "stratagem"
    },

    {
        name: "Territorial Advantage",
        timing: ["myFight", "oppFight",],
        shortDesc: "Destroy a unit= Sticky objective",
        fullRules: `WHEN: Fight phase, just after an enemy unit is destroyed by an ADEPTUS ASTARTES unit from your army.

TARGET: That ADEPTUS ASTARTES unit.

EFFECT: Select one objective marker you control that your unit is within range of. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase.`,
        addedBy: "Saga of the Hunter",
        cost: 1,
        type: "stratagem"
    },

    {
        name: "Overwhelming Onslaught",
        timing: ["myFight", "oppFight"],
        shortDesc: "-1 to hit two units",
        fullRules: `WHEN: Fight phase, just after an enemy unit has selected its targets.

TARGET: Two ADEPTUS ASTARTES units from your army within Engagement Range of that enemy unit, or one SPACE WOLVES BEASTS unit from your army within Engagement Range of that enemy unit.

EFFECT: Until the end of the phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll.`,
        addedBy: "Saga of the Hunter",
        cost: 1,
        type: "stratagem"
    },

    {
        name: "Chosen Prey",
        timing: ["myMove"],
        shortDesc: "Fall back, shoot and charge",
        fullRules: `WHEN: Your Movement phase, just after a SPACE WOLVES unit from your army Falls Back.

TARGET: That SPACE WOLVES unit.

EFFECT: Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.`,
        addedBy: "Saga of the Hunter",
        cost: 1,
        type: "stratagem"
    },

    {
        name: "Bounding Advance",
        timing: ["myMove", "myCharge"],
        shortDesc: "Move through models",
        fullRules: `WHEN: Your Movement phase or your Charge phase.

TARGET: One SPACE WOLVES INFANTRY or SPACE WOLVES BEASTS unit from your army that has not been selected to move or declared a charge this phase.

EFFECT: Until the end of the phase, each time a model in your unit makes a Normal, Advance, Fall Back or Charge move, it can move through models (excluding TITANIC models). When doing so, it can move within Engagement Range of enemy models, but unless it is making a Charge move, it cannot end that move within Engagement Range of them.`,
        addedBy: "Saga of the Hunter",
        cost: 1,
        type: "stratagem"
    },


    {
        name: "Marked For Destruction",
        timing: ["myShooting"],
        shortDesc: "Re-roll Wound roll of 1",
        fullRules: `WHEN: Your Shooting phase.

TARGET: Two ADEPTUS ASTARTES units from your army (excluding BEASTS) that have not been selected to shoot this phase.

EFFECT: Select one enemy unit visible to both of your units. Until the end of the phase, models in your units can only target that enemy unit (and only if it is an eligible target) and each time a model in one of your units makes an attack, re-roll a Wound roll of 1.`,
        addedBy: "Saga of the Hunter",
        cost: 1,
        type: "stratagem"
    },

    //=====================SAGA OF BEASTSLAYER===========================

    {
        name: "Legendary Slayers",
        timing: ["myShoot", "myFight", "oppFight"],
        shortDesc: "Lethal hits if Saga complete, if not just for Character, Monster or Vehicle",
        fullRules: `Each time an ADEPTUS ASTARTES model from your army makes an attack, if that attack targets a CHARACTER, MONSTER or VEHICLE unit or if your Saga is completed (see below), that attack has the [lethal hits] ability.
        Saga of the Beastslayer
At the start of the first battle round, your Beastslayer tally is 0, and you determine your Beastslayer target by halving the number of units from your opponent's army (including those embarked within TRANSPORTS) that have one or more of the following keywords (rounding up): CHARACTER, MONSTER, VEHICLE.

Each time an ADEPTUS ASTARTES unit from your army shoots or fights, after all of those attacks have been resolved, add 1 to your Beastslayer tally for each enemy unit with one or more of the following keywords destroyed by those attacks: CHARACTER, MONSTER, VEHICLE.

Once your Beastslayer tally is equal to or greater than your Beastslayer target, your Saga is completed.`,
        addedBy: "Saga of the Beastslayer",
        type: "ability"
    },
    {
        name: "Unbridled Ferocity",
        timing: ["myFight", "oppFight"],
        shortDesc: "Add 1 to Wound roll",
        fullRules: `WHEN: Fight phase.

TARGET: One SPACE WOLVES unit from your army that has not been selected to fight this phase.

EFFECT: Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Wound roll.`,
        addedBy: "Saga of the Beastslayer",
        cost: 1,
        type: "stratagem"
    },
    {
        name: "Shock Cavalry",
        timing: ["myMove", "myCharge"],
        shortDesc: "Move through other models and terrain",
        fullRules: `WHEN: Your Movement phase or your Charge phase.

TARGET: One THUNDERWOLF CAVALRY unit from your army that has not been selected to move or declared a charge this phase.

EFFECT: Until the end of the phase, each time a model in your unit makes a Normal, Advance, Fall Back or Charge move, it can move through models (excluding TITANIC models) and sections of terrain features that are 4" or less in height. When doing so, it can move within Engagement Range of enemy models, but unless it is making a Charge move, it cannot end that move within Engagement Range of them.`,
        addedBy: "Saga of the Beastslayer",
        cost: 1,
        type: "stratagem"
    },
    {
        name: "Pinning Fire",
        timing: ["myShoot"],
        shortDesc: "Target becomes pinned, restricting movement",
        fullRules: `WHEN: Your Shooting phase.

TARGET: One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.

EFFECT: Until the end of the phase, after your unit has shot, select one enemy CHARACTER, MONSTER, or VEHICLE unit hit by one or more of those attacks. Until the start of your next Shooting phase, that unit is pinned. While a unit is pinned, subtract 2" from its Move characteristic and subtract 2 from Charge rolls made for it.`,
        addedBy: "Saga of the Beastslayer",
        cost: 1,
        type: "stratagem"
    },
    {
        name: "Thunderous Pusuit",
        timing: ["oppMove"],
        shortDesc: "Reactive Normal Move",
        fullRules: `WHEN: Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.

TARGET: One ADEPTUS ASTARTES unit from your army that is within 9" of that enemy unit and not within Engagement Range of one or more enemy units.

EFFECT: Your unit can make a Normal move of up to D6". If your unit has the SPACE WOLVES INFANTRY or THUNDERWOLF CAVALRY keywords, it can make a Normal move of up to 6" instead.`,
        addedBy: "Saga of the Beastslayer",
        cost: 1,
        type: "stratagem"
    },
    {
        name: "Impetuosity",
        timing: ["oppShoot"],
        shortDesc: "Reactive move on damage",
        fullRules: `WHEN: Your opponent's Shooting phase, just after an enemy unit has selected its targets.

TARGET: One WULFEN INFANTRY or BLOOD CLAWS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.

EFFECT: Until the end of the phase, after that enemy unit has shot, if one or more models in your unit were destroyed as a result of those attacks, your unit can make an Impetuous move. To do so, roll one D6: your unit can be moved a number of inches up to the result, but your unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within Engagement Range of that enemy unit.`,
        addedBy: "Saga of the Beastslayer",
        cost: 1,
        type: "stratagem"
    },
    {
        name: "Coordinated Strike",
        timing: ["oppEndOfFight"],
        shortDesc: "Place unit in Strategic Reserves",
        fullRules: `WHEN: End of your opponent's Fight phase.

TARGET: One SPACE WOLVES unit from your army that is wholly within 9" of one or more battlefield edges and not within Engagement Range of one or more enemy units.

EFFECT: Remove your unit from the battlefield and place it into Strategic Reserves.`,
        addedBy: "Saga of the Beastslayer",
        cost: 1,
        type: "stratagem"
    },
    {
        name: "Pack's Quarry",
        timing: ["myCommand"],
        shortDesc: "Select Hunting Pack",
        fullRules: `At the start of your Command phase, you can select one of the Hunting Packs listed below. Until the start of your next Command phase, that Hunting Pack is active and its effects apply to all ADEPTUS ASTARTES units from your army. You can only select each Hunting Pack once per battle.
Encircling Jaws: This unit can re-roll Advance rolls and Charge rolls.
Hunter’s Eye: Each time a model in this unit makes a ranged attack, add 1 to the Hit roll.
Ferocious Strike: Each time this unit is selected to fight, select either the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase, weapons equipped by models in this unit have the selected ability.`,
        addedBy: "Saga of the Great Wolf",
        type: "ability"
    },


    {
        name: "The Foe Forseen",
        timing: ["oppShoot", "myFight", "oppFight"],
        shortDesc: "Worsen AP by 1",
        fullRules: `WHEN: Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.

TARGET: One ADEPTUS ASTARTES unit from your army that was selected as the target of one or more of the attacking unit’s attacks.

EFFECT: Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.`,
        addedBy: "Saga of the Great Wolf",
        type: "stratagem",
        cost: 1
    },

    {
        name: "Grimnar's Command",
        timing: ["myCommand"],
        shortDesc: "Choose different Hunting Pack for a unit",
        fullRules: `WHEN: Your Movement phase or your Charge phase.

TARGET: One ADEPTUS ASTARTES MOUNTED or ADEPTUS ASTARTES WALKER unit from your army that has not been selected to move or charge this phase.

EFFECT: Until the end of the phase, each time a model in your unit makes a Normal, Advance, Fall Back or Charge move, it can move horizontally through models (excluding TITANIC models) and terrain features. When doing so, it can move within Engagement Range of enemy models, but cannot end a Normal, Advance or Fall Back move within Engagement Range of them.`,
        addedBy: "Saga of the Great Wolf",
        type: "stratagem",
        cost: 1

    },

    {
        name: "Fenrisian Ferocity",
        timing: ["myMove", "myCharge"],
        shortDesc: "Move through models from other units",
        fullRules: `WHEN: Fight phase, just after an enemy unit has selected its targets.

TARGET: Two ADEPTUS ASTARTES units from your army within Engagement Range of that enemy unit, or one SPACE WOLVES BEASTS unit from your army within Engagement Range of that enemy unit.

EFFECT: Until the end of the phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll.`,
        addedBy: "Saga of the Great Wolf",
        type: "stratagem",
        cost: 1

    },

    {
        name: "Unrelenting Hunters",
        timing: ["myMove"],
        shortDesc: "Fall back or advance and charge",
        fullRules: `WHEN: Your Movement phase.

TARGET: One ADEPTUS ASTARTES unit from your army that has not been selected to move this phase.

EFFECT: Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Fell Back. If your unit is a SPACE WOLVES unit, until the end of the turn, it is eligible to declare a charge in a turn in which it Advanced or Fell Back.`,
        addedBy: "Saga of the Great Wolf",
        type: "stratagem",
        cost: 1

    },

    {
        name: "Eye of the Pack",
        timing: ["myShoot"],
        shortDesc: "Add 1 to Wound roll",
        fullRules: `WHEN: Your Shooting phase.

TARGET: One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.

EFFECT: Until the end of the phase, each time a model in your unit makes an attack, you can add 1 to the Wound roll.`,
        addedBy: "Saga of the Great Wolf",
        type: "stratagem",
        cost: 1

    },


    {
        name: "Battle Instincts",
        timing: ["oppShooting"],
        shortDesc: "Move d6\" after being targetted",
        fullRules: `WHEN: Your opponent’s Shooting phase, just after an enemy unit has shot.

TARGET: One SPACE WOLVES unit from your army that was selected as the target of one or more of the attacking unit’s attacks.

EFFECT: Your unit can make a Normal move of up to D6".`,
        addedBy: "Saga of the Great Wolf",
        type: "stratagem",
        cost: 1

    }
];