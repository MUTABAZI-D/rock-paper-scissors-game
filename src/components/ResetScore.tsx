import { Box } from "@mui/material";
import { motion } from "motion/react";

type ResetScoreProps = {
  setTrackResults: React.Dispatch<any>;
};

export const ResetScore = ({ setTrackResults }: ResetScoreProps) => {
  const handleReset = () => {
    localStorage.removeItem("trackResults");
    setTrackResults({
      wins: 0,
      ties: 0,
      losses: 0,
    });
  };
  return (
    <Box mt={2}>
      <motion.button
        whileTap={{ scale: 1.1, opacity: 0.5 }}
        onClick={handleReset}
        className="bg-white py-2 px-4 border rounded shadow-md font-semibold text-sm lg:text-lg"
      >
        Reset Score
      </motion.button>
    </Box>
  );
};
