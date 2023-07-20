import { render, screen } from "@testing-library/react";
import { SearchResultItem } from "../src/app/search/SearchResultItem";
import { MovieResult, PersonResult, TVResult } from "@/clients/tmdb";

const movie: Partial<MovieResult> = {
  media_type: "movie",
  title: "Movie Title",
  overview: "Movie Overview",
};

const tv: Partial<TVResult> = {
  media_type: "tv",
  name: "TV Name",
  overview: "TV Overview",
  first_air_date: "Today",
  vote_average: 2,
  vote_count: 6,
};

const person: Partial<PersonResult> = {
  media_type: "person",
  name: "Person",
  known_for_department: "Acting",
  known_for: [movie, tv] as Array<MovieResult | TVResult>,
};

describe("SearchResultItem", () => {
  test("When given movie then display movie", () => {
    render(<SearchResultItem {...(movie as MovieResult)} />);

    expect(screen.getByText("Movie Title"));
    expect(screen.getByText("Movie Overview"));
  });

  test("When given movie then dont display tv or person", () => {
    render(<SearchResultItem {...(movie as MovieResult)} />);

    expect(screen.queryByText("TV Name")).toBeNull();
    expect(screen.queryByText("TV Overview")).toBeNull();
  });

  test("When given tv then display tv", () => {
    render(<SearchResultItem {...(tv as TVResult)} />);

    expect(screen.getByText("TV Name"));
    expect(screen.getByText("TV Overview"));
  });

  test("When given tv then dont display movie or person", () => {
    render(<SearchResultItem {...(tv as TVResult)} />);

    expect(screen.queryByText("Movie Title")).toBeNull();
    expect(screen.queryByText("Movie Overview")).toBeNull();
    expect(screen.queryByText("Person - Acting")).toBeNull();
  });

  test("When given person then display person", () => {
    render(<SearchResultItem {...(person as PersonResult)} />);

    expect(screen.getByText("Person - Acting"));
    expect(screen.getByText("Movie Title"));
    expect(screen.getByText("Movie Overview"));
    expect(screen.getByText("TV Name"));
    expect(screen.getByText("TV Overview"));
  });
});
