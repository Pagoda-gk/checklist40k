import { useState } from "react";
import Setup from "./components/Setup.jsx";
import Gameplay from "./components/Gameplay.jsx";

export default function App() {
  const [gameData, setGameData] = useState(null);

  // Called when Setup finishes
  const startGame = (data) => {
    setGameData(data);
  };

  // Called when pressing the Home button in Gameplay
  const goHome = () => {
    setGameData(null);   // Reset → goes back to Setup screen
  };

  return (
    <>
      {gameData === null ? (
        <Setup onComplete={startGame} />
      ) : (
        <Gameplay gameData={gameData} goHome={goHome} />
      )}
    </>
  );
}

