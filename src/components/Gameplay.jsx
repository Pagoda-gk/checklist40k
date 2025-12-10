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

export default function Gameplay({ gameData }) {
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

  // ---------------- REMINDER WIDGET ----------------
  const [openReminderIndex, setOpenReminderIndex] = useState(null);
  const [reminderNotes, setReminderNotes] = useState({});

  const reminders = rules.filter(r => r.type === "reminder");

  const updateReminderNote = (index, value) => {
    setReminderNotes(prev => ({
      ...prev,
      [index]: value
    }));
  };



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
      <div className="reminder-widget">

        {/* Collapsed list */}
        {openReminderIndex === null && (
          <div className="reminder-list">
            {reminders.map((r, i) => (
              <div
                key={i}
                className="reminder-list-item"
                onClick={() => setOpenReminderIndex(i)}
              >
                <span className="reminder-line">
                  <strong>{r.name}</strong>
                  {"  "}
                  {r.shortDesc}
                  {reminderNotes[i] ? `  ${reminderNotes[i]}` : ""}
                </span>

                <span className="arrow">▶</span>
              </div>
            ))}
          </div>
        )}

        {/* Expanded single reminder */}
        {openReminderIndex !== null && (
          <div className="reminder-expanded">

            <div
              className="reminder-back"
              onClick={() => setOpenReminderIndex(null)}
            >
              ◀ Back
            </div>

            <div className="reminder-card">
              <strong>{reminders[openReminderIndex].name}</strong>

              <p className="reminder-full">
                {reminders[openReminderIndex].fullRules}
              </p>

              <textarea
                className="reminder-input"
                placeholder="Notes, targets, tallies, etc..."
                value={reminderNotes[openReminderIndex] || ""}
                onChange={(e) => updateReminderNote(openReminderIndex, e.target.value)}
              />

              <em>{reminders[openReminderIndex].addedBy}</em>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
