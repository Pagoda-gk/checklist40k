import { useState } from "react";
import Setup from "./components/Setup.jsx";
import Gameplay from "./components/Gameplay.jsx";

export default function App() {
  const [gameData, setGameData] = useState(null);

  if (!gameData) {
    return <Setup onComplete={setGameData} />;
  }

  return <Gameplay gameData={gameData} />;
  
}
