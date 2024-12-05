import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import React from "react";
import { useDispatch } from "react-redux";
import { generateComputerChoice } from "../../store/gameSlice";
import { AppDispatch } from "../../store/Store";
import { motion } from "motion/react";

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
      <motion.div whileTap={{ scale: 1.1, opacity: 0.5 }}>
        <Avatar
          alt="rock"
          src={"/images/rock-emoji.png"}
          sx={{
            cursor: "pointer",
            width: { xs: 80, md: 116 },
            height: { xs: 80, md: 116 },
            border: "3px solid white",
            "& img": {
              width: { xs: 40, md: 56 },
              height: { xs: 40, md: 56 },
              mb: { xs: 1, md: 2 },
            },
          }}
          onClick={() => handlePlayerChoice("rock")}
        />
      </motion.div>
      <motion.div whileTap={{ scale: 1.1, opacity: 0.5 }}>
        <Avatar
          alt="paper"
          src={"/images/paper-emoji.png"}
          sx={{
            cursor: "pointer",
            width: { xs: 80, md: 116 },
            height: { xs: 80, md: 116 },
            border: "3px solid white",
            "& img": {
              width: { xs: 40, md: 56 },
              height: { xs: 40, md: 56 },
            },
          }}
          onClick={() => handlePlayerChoice("paper")}
        />
      </motion.div>
      <motion.div whileTap={{ scale: 1.1, opacity: 0.5 }}>
        <Avatar
          alt="scissors"
          src={"/images/scissors-emoji.png"}
          sx={{
            cursor: "pointer",
            width: { xs: 80, md: 116 },
            height: { xs: 80, md: 116 },
            border: "3px solid white",
            "& img": {
              width: { xs: 40, md: 56 },
              height: { xs: 40, md: 56 },
            },
          }}
          onClick={() => handlePlayerChoice("scissors")}
        />
      </motion.div>
    </Stack>
  );
};
