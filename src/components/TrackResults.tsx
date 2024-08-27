import { Stack, Typography } from "@mui/material";

type TrackResultsProps = {
  trackResults: {
    wins: number;
    ties: number;
    losses: number;
  };
};
export const TrackResults = ({ trackResults }: TrackResultsProps) => {
  return (
    <Stack spacing={1} direction={"row"} mt={6} color={"white"}>
      <Typography>Wins:{trackResults.wins},</Typography>
      <Typography>Losses:{trackResults.losses},</Typography>
      <Typography>Ties:{trackResults.ties}</Typography>
    </Stack>
  );
};
