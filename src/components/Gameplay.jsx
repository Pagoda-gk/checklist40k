import { useState } from "react";


const PHASE_ORDER = [
  "myCommand",
  "myMove",
  "myShooting",
  "myCharge",
  "myFight",
  "myEndOfFight",

  "oppCommand",
  "oppMove",
  "oppShooting",
  "oppCharge",
  "oppFight",
  "oppEndOfFight"
];

const PHASE_NAMES = {
  myCommand: "My Command Phase",
  myMove: "My Movement Phase",
  myShooting: "My Shooting Phase",
  myCharge: "My Charge Phase",
  myFight: "My Fight Phase",
  myEndOfFight: "End of my Fight Phase",
  oppCommand: "Opponent's Command Phase",
  oppMove: "Opponent's Movement Phase",
  oppShooting: "Opponent's Shooting Phase",
  oppCharge: "Opponent's Charge Phase",
  oppFight: "Opponent's Fight Phase",
  oppEndOfFight: "End of Opponent's Fight Phase"
};

export default function Gameplay({ gameData, goHome }) {
  const { phases, rules, firstPlayer = "me" } = gameData;

  // ----------------------
  // Phase navigation
  // ----------------------
  const [index, setIndex] = useState(firstPlayer === "me" ? 0 : 6);
  const phaseKey = PHASE_ORDER[index];
  const phaseRules = rules.filter((r) => r.timing.includes(phaseKey));

  const abilities = phaseRules.filter(r => r.type === "ability");
  const stratagems = phaseRules.filter(r => r.type === "stratagem");
  const universalStratagems = phaseRules.filter(r => r.type === "universalStratagem");

  const goNextPhase = () => {
    setIndex((i) => (i + 1) % PHASE_ORDER.length); // loop forward
  };

  const goPrevPhase = () => {
    setIndex((i) => (i - 1 + PHASE_ORDER.length) % PHASE_ORDER.length); // loop backward
  };

  // ---------------- FREE NOTES WIDGET ----------------
  const [notes, setNotes] = useState("");




  // ----------------------
  // Render
  // ----------------------
  return (
    <div className="gameplay-container">
      <div className="phase-header">{PHASE_NAMES[phaseKey]}</div>

      <div className="phase-content">
        {stratagems.length > 0 && (
          <>
            <h3 className="section-header">Stratagems</h3>
            {stratagems.map((r, i) => (
              <div className="rule-card" key={i}>
                <details className="rule-details">
                  <summary>
                    {r.name}  {/* Rule title inside summary */}
                  </summary>
                  <p>{r.fullRules}</p>
                </details>
                <p className="short-desc">{r.shortDesc}</p>
                <em>{r.addedBy}</em>
              </div>
            ))}
          </>
        )}
        {abilities.length > 0 && (
          <>
            <h3 className="section-header">Abilities</h3>
            {abilities.map((r, i) => (
              <div className="rule-card" key={i}>
                <details className="rule-details">
                  <summary>
                    {r.name}  {/* Rule title inside summary */}
                  </summary>
                  <p>{r.fullRules}</p>
                </details>
                <p className="short-desc">{r.shortDesc}</p>
                <em>{r.addedBy}</em>
              </div>
            ))}
          </>
        )}
        {universalStratagems.length > 0 && (
          <>
            <h3 className="section-header">Universal Stratagems</h3>
            {universalStratagems.map((r, i) => (
              <div className="rule-card" key={i}>
                <details className="rule-details">
                  <summary>
                    {r.name}  {/* Rule title inside summary */}
                  </summary>
                  <p>{r.fullRules}</p>
                </details>
                <p className="short-desc">{r.shortDesc}</p>
                <em>{r.addedBy}</em>
              </div>
            ))}
          </>
        )}

 <button className="home-button" onClick={goHome}>
          ⟵ Home
        </button>

        {stratagems.length === 0 && abilities.length === 0 && (
          <p className="no-rules">No rules this phase.</p>
        )}

        <div className="phase-buttons">
          <button onClick={goPrevPhase} className="prev-button">
            ← Previous Phase
          </button>
          <button onClick={goNextPhase} className="next-button">
            Next Phase →
          </button>
        </div>
      </div>
            {/* Free notes panel */}
      <div className="notes-widget">
        <h3 className="notes-header">Notes</h3>
        <textarea
          className="notes-input"
          placeholder="Write anything you want here… (targets, CP spent, score, reminders, etc.)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>


    </div>
  );
}
