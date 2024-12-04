import { Box, Button } from "@mui/material";

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
      {" "}
      <Button
        variant="contained"
        color="inherit"
        sx={{ textTransform: "none", fontSize: { xs: 12.5, md: 15 } }}
        onClick={handleReset}
      >
        Reset Score
      </Button>
    </Box>
  );
};
