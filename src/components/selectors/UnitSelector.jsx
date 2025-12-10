export default function UnitSelector({ units, selectedUnits, onChange, onNext }) {

  const toggle = (unit) => {
    if (selectedUnits.includes(unit)) {
      onChange(selectedUnits.filter(u => u !== unit));
    } else {
      onChange([...selectedUnits, unit]);
    }
  };

  return (
    <div>
      <h2>Select Your Units</h2>

      <div style={{ marginBottom: "20px" }}>
        {units.map(u => (
          <label key={u} style={{ display: "block", padding: "6px 0" }}>
            <input
              type="checkbox"
              checked={selectedUnits.includes(u)}
              onChange={() => toggle(u)}
            />
            {" "}{u}
          </label>
        ))}
      </div>

      <button
        onClick={onNext}
        style={{
          padding: "10px 18px",
          fontSize: "16px",
        }}
      >
        Next
      </button>
    </div>
  );
}
