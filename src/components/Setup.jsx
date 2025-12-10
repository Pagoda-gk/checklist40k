import { useEffect, useState } from "react";
import factionList from "../data/factions.js";
import universalStrats from "../data/universalStratagems.js";
import FactionSelector from "./selectors/FactionSelector.jsx";
import DetachmentSelector from "./selectors/DetachmentSelector.jsx";
import UnitSelector from "./selectors/UnitSelector.jsx";
import FirstPlayerSelector from "./selectors/FirstPlayerSelector.jsx";

export default function Setup({ onComplete }) {
  const [selectedFaction, setSelectedFaction] = useState(null);
  const [detachment, setDetachment] = useState(null);
  const [units, setUnits] = useState([]);
  const [firstPlayer, setFirstPlayer] = useState(null);
  const [step, setStep] = useState(1);


  // Loaded faction data (units + stratagems)
  const [factionData, setFactionData] = useState(null);

  // Load faction JSON + units + stratagems dynamically
  useEffect(() => {
    if (!selectedFaction) return;

    (async () => {
      const data = await import(`../data/${selectedFaction}/index.js`);
      setFactionData(data.default);
    })();
  }, [selectedFaction]);

  // When all options chosen → build the database
  const finishSetup = () => {
    const { units: unitRules, stratagems } = factionData;

    // Gather all picked rules from units
    const chosenUnitRules = unitRules.filter(u =>
      units.includes(u.addedBy)
    );

    // Gather all detachment stratagems
    const chosenStrats = stratagems.filter(
      s => s.addedBy === detachment
    );

    // Merge rules & strats
    const allRules = [...chosenUnitRules, ...chosenStrats, ...universalStrats];

    // Build phases
    const phases = {
      myCommand: [],
      myMove: [],
      myShooting: [],
      myCharge: [],
      myFight: [],
      myEndOfFight: [],

      oppCommand: [],
      oppMove: [],
      oppShooting: [],
      oppCharge: [],
      oppFight: [],
      oppEndOfFight: [],
    };

    allRules.forEach(rule => {
      rule.timing.forEach(t => {
        if (!phases[t]) phases[t] = [];
        phases[t].push(rule);
      });
    });

    // Final database structure
    const gameData = {
      faction: selectedFaction,
      detachment,
      units,
      firstPlayer,
      phases,
      rules: allRules
    };

    onComplete(gameData);
  };

  // UI flow
  if (step === 1)
    return <FactionSelector factions={factionList} onSelect={(d) => {
      setSelectedFaction(d);
      setStep(2);
    }} />;

  if (!factionData)
    return <p>Loading faction data…</p>;

  if (step === 2)
    return (
      <DetachmentSelector
        detachments={factionData.info.detachments}
        onSelect={(d) => {
          setDetachment(d);
          setStep(3);
        }}
      />
    );

  if (step === 3)
    return (
      <UnitSelector
        units={factionData.info.units}
        selectedUnits={units}
        onChange={setUnits}
        onNext={() => setStep(4)}
      />
    );

  if (!firstPlayer)
    return <FirstPlayerSelector onSelect={setFirstPlayer} />;

  return (
    <div>
      <h2>Ready to Begin?</h2>
      <button onClick={finishSetup}>Start Game</button>
    </div>
  );
}
