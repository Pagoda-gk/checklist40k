export default function FactionSelector({ factions, onSelect }) {
  return (
    <div>
      <h2>Select Faction</h2>
      {factions.map(f => (
        <button key={f.name} onClick={() => onSelect(f.path)}>
          {f.name}
        </button>
      ))}
    </div>
  );
}
