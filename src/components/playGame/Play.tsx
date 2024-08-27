import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import React from "react";
import { useDispatch } from "react-redux";
import { generateComputerChoice } from "../../store/gameSlice";
import { AppDispatch } from "../../store/Store";

type PlayProps = {
  setPlayerChoice: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Play = ({ setPlayerChoice }: PlayProps) => {
  const dispatch: AppDispatch = useDispatch();
  const handlePlayerChoice = (choice: string) => {
    setPlayerChoice(() => choice);
    dispatch(generateComputerChoice());
  };

  return (
    <Stack direction="row" spacing={2} mt={3}>
      <Avatar
        alt="rock"
        src={"/images/rock-emoji.png"}
        sx={{
          width: 116,
          height: 116,
          border: "3px solid white",
          "& img": {
            width: 56,
            height: 56,
            marginBottom: 2,
          },
        }}
        onClick={() => handlePlayerChoice("rock")}
      />

      <Avatar
        alt="paper"
        src={"/images/paper-emoji.png"}
        sx={{
          width: 116,
          height: 116,
          border: "3px solid white",
          "& img": {
            width: 56,
            height: 56,
          },
        }}
        onClick={() => handlePlayerChoice("paper")}
      />

      <Avatar
        alt="scissors"
        src={"/images/scissors-emoji.png"}
        sx={{
          width: 116,
          height: 116,
          border: "3px solid white",
          "& img": {
            width: 56,
            height: 56,
          },
        }}
        onClick={() => handlePlayerChoice("scissors")}
      />
    </Stack>
  );
};
