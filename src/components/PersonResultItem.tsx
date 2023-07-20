import { MovieResult, PersonResult, TVResult } from "@/clients/tmdb";
import { Stack, Typography } from "@mui/material";
import { MovieResultItem } from "./MovieResultItem";
import { TvResultItem } from "./TvResultItem";

export const PersonResultItem = ({
  name,
  known_for_department,
  known_for,
}: PersonResult) => {
  return (
    <Stack>
      <Typography variant="h4">{name}</Typography>
      <Typography>{known_for_department}</Typography>
      <>
        {known_for.forEach((knownFor) => {
          if (knownFor.media_type == "movie") {
            return MovieResultItem(knownFor as MovieResult);
          } else {
            return TvResultItem(knownFor as TVResult);
          }
        })}
      </>
      <Typography>{known_for_department}</Typography>
    </Stack>
  );
};
