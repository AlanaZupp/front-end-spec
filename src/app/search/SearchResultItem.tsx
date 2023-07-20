import { MovieResult, PersonResult, TVResult } from "@/clients/tmdb";
import { MovieResultItem } from "@/components/MovieResultItem";
import { PersonResultItem } from "@/components/PersonResultItem";
import { TvResultItem } from "@/components/TvResultItem";
import { Typography } from "@mui/material";

export const SearchResultItem = ({
  ...props
}: MovieResult | PersonResult | TVResult) => {
  switch (props.media_type) {
    case "tv":
      return TvResultItem(props as TVResult);

    case "movie":
      return MovieResultItem(props as MovieResult);

    case "person":
      return PersonResultItem(props as PersonResult);

    default:
      return <Typography>Search result is not a movie</Typography>;
  }
};
