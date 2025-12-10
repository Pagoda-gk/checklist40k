export default function FirstPlayerSelector({ onSelect }) {
  return (
    <div>
      <h2>Who Goes First?</h2>
      <button onClick={() => onSelect("me")}>I Go First</button>
      <button onClick={() => onSelect("opponent")}>Opponent Goes First</button>
    </div>
  );
}
