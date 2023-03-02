import styled from "styled-components";
import React from "react";
import { useOutletContext } from "react-router-dom";
import { AppContextType, Props } from "./Interfaces";

export default function RecommendedMovieCard({ movieData }: Props) {
  const context: AppContextType = useOutletContext();
  const [exist, setExist] = React.useState(() => {
    return context.watchlist.some((movie) => movie.movieID === movieData.id);
  });

  return (
    <CardWrapper>
      <MoviePoster>
        <img
          src={`https://image.tmdb.org/t/p/w1280/${movieData.poster_path}`}
          alt={movieData.title}
          style={{ height: "100%", objectFit: "cover" }}
        />
      </MoviePoster>
      <ButtonWrapper>
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
                  overview: movieData.overview,
                },
              ]);
            }
          }}
        >
          {exist ? "Remove" : "Add to watchlist"}
        </Button>
      </ButtonWrapper>
      <MovieDetails>
        <MovieTitle> {movieData.title} </MovieTitle>
        <MovieOverview>{movieData.overview}</MovieOverview>
      </MovieDetails>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  background-color: #e5e5e5;
  margin: 0 0 2rem 3rem;
`;

const MoviePoster = styled.div`
  width: 30%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  color: black;
  display: block;
  width: 8rem;
  height: 3rem;
  background-color: none;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
`;

const MovieDetails = styled.div`
  width: 60%;
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

const MovieOverview = styled.p`
  color: black;
`;
