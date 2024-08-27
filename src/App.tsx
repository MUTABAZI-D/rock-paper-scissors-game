import { Heading } from "./components/Heading";
import { Play } from "./components/playGame/Play";
import "./App.css";
import { Results } from "./components/Results";
import { ResetScore } from "./components/ResetScore";
import { useEffect, useState } from "react";
import { Moves } from "./components/playGame/Moves";
import { TrackResults } from "./components/TrackResults";

function App() {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [trackResults, setTrackResults] = useState(() => {
    const trackResultsString = localStorage.getItem("trackResults");
    return trackResultsString
      ? JSON.parse(trackResultsString)
      : {
          wins: 0,
          ties: 0,
          losses: 0,
        };
  });
  useEffect(() => {
    localStorage.setItem("trackResults", JSON.stringify(trackResults));
  }, [trackResults]);

  return (
    <>
      <Heading />
      <Play setPlayerChoice={setPlayerChoice} />
      <Results playerChoice={playerChoice} setTrackResults={setTrackResults} />
      <Moves playerChoice={playerChoice} />
      <TrackResults trackResults={trackResults} />
      <ResetScore setTrackResults={setTrackResults} />
    </>
  );
}

export default App;
