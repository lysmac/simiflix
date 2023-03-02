import styled from "styled-components";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import React from "react";
import { useOutletContext } from "react-router-dom";

interface MovieData {
  title: string;
  poster_path: string;
}

interface Props {
  movieData: MovieData;
}

export default function SearchResultCard({ movieData }: Props) {
  const context: any = useOutletContext();
  const [exist, setExist] = React.useState(() => {
    return context.watchlist.some((movie) => movie.movieID === movieData.id);
  });

  return (
    <CardWrapper>
      <MovieTitle> {movieData.title} </MovieTitle>
      <MoviePoster
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movieData.poster_path})`,
        }}
      >
        <button
          onClick={() => {
            if (exist) {
              setExist(false);
              const updatedWatchlist = context.watchlist.filter(
                (movie) => movie.movieID !== movieData.id
              );
              context.setWatchlist(updatedWatchlist);
            } else {
              setExist(true);
              context.setWatchlist([                ...context.watchlist,                { Title: movieData.title, movieID: movieData.id },              ]);
            }
          }}
        >
          {exist ? "Remove from watchlist" : "Add to watchlist"}
        </button>
      </MoviePoster>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #14213d;
`;

const MovieTitle = styled.h3`
  height: 3rem;
  width: 90%;
  color: white;
  text-align: center;
`;

const MoviePoster = styled.div`
  position: relative;
  width: 90%;
  height: 20rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 3rem;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
    }

    button {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  button {
    color: green;
    display: none;
    width: width: 75px;
    height: 100px;
    background-color: white;
    border: none;
    cursor: pointer;
  }
`;
