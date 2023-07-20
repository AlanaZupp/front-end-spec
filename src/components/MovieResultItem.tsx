import { MovieResult } from "@/clients/tmdb";
import { Stack, Typography } from "@mui/material";

export const MovieResultItem = ({ title, overview }: MovieResult) => {
  return (
    <Stack>
      <Typography variant="h4">{title}</Typography>
      <Typography>{overview}</Typography>
    </Stack>
  );
};

export const MovieResultSmallItem = ({ title, overview }: MovieResult) => {
  return (
    <Stack>
      <Typography variant="h6">{title}</Typography>
      <Typography>{overview}</Typography>
    </Stack>
  );
};
