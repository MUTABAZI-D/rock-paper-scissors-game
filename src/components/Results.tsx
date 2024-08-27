import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { compChoiceSelector } from "../store/gameSelectors";
import { useState, useEffect } from "react";

type ResultsProps = {
  playerChoice: string | null;
  setTrackResults: React.Dispatch<
    React.SetStateAction<{
      wins: number;
      ties: number;
      losses: number;
    }>
  >;
};

export const Results = ({ playerChoice, setTrackResults }: ResultsProps) => {
  const [result, setResult] = useState("");

  const compChoice = useSelector(compChoiceSelector);

  useEffect(() => {
    if (playerChoice && compChoice) {
      if (playerChoice === "rock") {
        if (compChoice === "rock") {
          setResult("Tie.");
          setTrackResults((prevTrackResults) => ({
            ...prevTrackResults,
            ties: prevTrackResults.ties + 1,
          }));
        } else if (compChoice === "paper") {
          setResult("You lose.");
          setTrackResults((prevTrackResults) => ({
            ...prevTrackResults,
            losses: prevTrackResults.losses + 1,
          }));
        } else if (compChoice === "scissors") {
          setResult("You win.");
          setTrackResults((prevTrackResults) => ({
            ...prevTrackResults,
            wins: prevTrackResults.wins + 1,
          }));
        }
      } else if (playerChoice === "paper") {
        if (compChoice === "rock") {
          setResult("You win.");
          setTrackResults((prevTrackResults) => ({
            ...prevTrackResults,
            wins: prevTrackResults.wins + 1,
          }));
        } else if (compChoice === "paper") {
          setResult("Tie.");
          setTrackResults((prevTrackResults) => ({
            ...prevTrackResults,
            ties: prevTrackResults.ties + 1,
          }));
        } else if (compChoice === "scissors") {
          setResult("You lose.");
          setTrackResults((prevTrackResults) => ({
            ...prevTrackResults,
            losses: prevTrackResults.losses + 1,
          }));
        }
      } else if (playerChoice === "scissors") {
        if (compChoice === "rock") {
          setResult("You lose.");
          setTrackResults((prevTrackResults) => ({
            ...prevTrackResults,
            losses: prevTrackResults.losses + 1,
          }));
        } else if (compChoice === "paper") {
          setResult("You win.");
          setTrackResults((prevTrackResults) => ({
            ...prevTrackResults,
            wins: prevTrackResults.wins + 1,
          }));
        } else if (compChoice === "scissors") {
          setResult("Tie.");
          setTrackResults((prevTrackResults) => ({
            ...prevTrackResults,
            ties: prevTrackResults.ties + 1,
          }));
        }
      }
    }
  }, [playerChoice, compChoice]);

  return (
    <Typography sx={{ fontWeight: "bold" }} color={"white"} mt={5} variant="h5">
      {result}
    </Typography>
  );
};
