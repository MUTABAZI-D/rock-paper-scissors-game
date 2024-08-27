import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { compChoiceSelector } from "../../store/gameSelectors";

type MovesProps = {
  playerChoice: string | null;
};

export const Moves = ({ playerChoice }: MovesProps) => {
  const compChoice = useSelector(compChoiceSelector);
  return (
    <>
      {playerChoice && compChoice && (
        <Stack spacing={2} direction={"row"} mt={3}>
          <Stack direction={"row"} spacing={1}>
            <Typography color={"white"} alignSelf={"flex-end"}>
              You
            </Typography>
            <img
              src={`./images/${playerChoice}-emoji.png`}
              alt="user-move"
              style={{ width: 50, height: 50, objectFit: "contain" }}
            />
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <img
              src={`./images/${compChoice}-emoji.png`}
              alt="computer-move"
              style={{ width: 50, height: 50, objectFit: "contain" }}
            />
            <Typography color={"white"} alignSelf={"flex-end"}>
              Computer
            </Typography>
          </Stack>
        </Stack>
      )}
    </>
  );
};
