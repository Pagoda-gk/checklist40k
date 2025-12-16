import { useEffect, useState } from "react";
import Setup from "./components/Setup.jsx";
import Gameplay from "./components/Gameplay.jsx";

export default function App() {
  const [gameData, setGameData] = useState(() => {
    const saved = localStorage.getItem("gameData");
    return saved ? JSON.parse(saved) : null;
  });

  // Save whenever it changes
  useEffect(() => {
    if (gameData) {
      localStorage.setItem("gameData", JSON.stringify(gameData));
    }
  }, [gameData]);

  const goHome = () => {
    localStorage.removeItem("gameData");
    localStorage.removeItem("phaseIndex");
    localStorage.removeItem("reminderNotes");
    setGameData(null);
  };


  if (!gameData) {
    return <Setup onComplete={setGameData} />;
  }

  // Called when Setup finishes
  const startGame = (data) => {
    setGameData(data);
  };


  return <Gameplay gameData={gameData} goHome={goHome} />;
}

