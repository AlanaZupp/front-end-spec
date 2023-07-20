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
      <Typography>{first_air_date}</Typography>
      <Typography>{vote_average}</Typography>
      <Typography>{vote_count}</Typography>
    </Stack>
  );
};
