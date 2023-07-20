import { TVResult } from "@/clients/tmdb";
import { Stack, Typography } from "@mui/material";

export const TvResultItem = ({
  name,
  overview,
  first_air_date,
  vote_average,
  vote_count,
}: TVResult) => {
  return (
    <Stack>
      <Typography variant="h4">{name}</Typography>
      <Typography>{overview}</Typography>
      <Stack direction="row" spacing={3}>
        <Typography>First air date: {first_air_date}</Typography>
        <Typography>Vote average: {vote_average}</Typography>
        <Typography>Vote count: {vote_count}</Typography>
      </Stack>
    </Stack>
  );
};

export const TvResultSmallItem = ({
  name,
  overview,
  first_air_date,
  vote_average,
  vote_count,
}: TVResult) => {
  return (
    <Stack>
      <Typography variant="h6">{name}</Typography>
      <Typography>{overview}</Typography>
      <Stack direction="row" spacing={3}>
        <Typography>First air date: {first_air_date}</Typography>
        <Typography>Vote average: {vote_average}</Typography>
        <Typography>Vote count: {vote_count}</Typography>
      </Stack>
    </Stack>
  );
};
