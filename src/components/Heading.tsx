import { Typography } from "@mui/material";

export const Heading = () => {
  return (
    <Typography
      sx={{ fontWeight: "bold", color: "white", fontSize: { xs: 25, md: 35 } }}
      mt={3}
    >
      Rock Paper Scissors Game
    </Typography>
  );
};
