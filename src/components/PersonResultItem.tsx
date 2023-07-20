import { MovieResult, PersonResult, TVResult } from "@/clients/tmdb";
import { Stack, Typography } from "@mui/material";
import { MovieResultSmallItem } from "./MovieResultItem";
import { TvResultSmallItem } from "./TvResultItem";

export const PersonResultItem = ({
  name,
  known_for_department,
  known_for,
}: PersonResult) => {
  return (
    <Stack>
      <Typography variant="h4">
        {name} - {known_for_department}
      </Typography>
      <>
        {known_for.map((knownFor) => {
          if (knownFor.media_type == "movie") {
            return MovieResultSmallItem(knownFor as MovieResult);
          } else {
            return TvResultSmallItem(knownFor as TVResult);
          }
        })}
      </>
    </Stack>
  );
};
