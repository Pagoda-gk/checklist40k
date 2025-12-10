export default function DetachmentSelector({ detachments, onSelect }) {
  return (
    <div>
      <h2>Select Detachment</h2>
      {detachments.map(d => (
        <button key={d} onClick={() => onSelect(d)}>
          {d}
        </button>
      ))}
    </div>
  );
}
