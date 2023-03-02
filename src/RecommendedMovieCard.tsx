import styled from "styled-components";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import React from "react";
import { useOutletContext } from "react-router-dom";

interface MovieData {
  title: string;
  posterPath: string;
  id: number;
  voteAverage: number;
  overview: string;
  // add any other properties here that you expect to receive from the API
}

interface Props {
  movieData: MovieData;
}

export default function RecommendedMovieCard({ movieData }: Props) {
  const context: any = useOutletContext();
  const [exist, setExist] = React.useState(() => {
    return context.watchlist.some((movie) => movie.movieID === movieData.id);
  });

  return (
    <CardWrapper>
      <MoviePoster
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movieData.poster_path})`,
        }}
      >
        <Button
          onClick={() => {
            if (exist) {
              setExist(false);
              const updatedWatchlist = context.watchlist.filter(
                (movie) => movie.movieID !== movieData.id
              );
              context.setWatchlist(updatedWatchlist);
            } else {
              setExist(true);
              context.setWatchlist([
                ...context.watchlist,
                {
                  title: movieData.title,
                  movieID: movieData.id,
                  posterurl: movieData.poster_path,
                  voterating: movieData.vote_average,
                  overview: movieData.overview,
                },
              ]);
            }
          }}
        >
          {exist ? "Remove from watchlist" : "Add to watchlist"}
        </Button>
      </MoviePoster>
      <MovieDetails>
        <MovieTitle> {movieData.title} </MovieTitle>
        <MovieTagline>{movieData.overview}</MovieTagline>
      </MovieDetails>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: row;
  background-color: white;
  border-bottom: 1px solid black;
  margin: 0 0 0 3rem;
`;

const MoviePoster = styled.div`
  width: 30%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

const MovieDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
`;

const MovieTitle = styled.h3`
  height: 1rem;
  color: black;
  text-align: center;
`;

const MovieTagline = styled.p`
  color: black;
`;

const Button = styled.button`
  color: green;
  display: block;
  width: 100%
  height: 3rem;
  background-color: red;
  border: none;
  cursor: pointer;
`;
