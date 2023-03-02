import styled from "styled-components";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import React from "react";
import { useOutletContext } from "react-router-dom";

interface MovieData {
  title: string;
  poster_path: string;
  tagline: string;
}

interface Props {
  movieData: MovieData;
}

export default function SearchedMovieCard({ movieData }: Props) {
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
      ></MoviePoster>
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
  height: 2rem;
  width: 100%;
  color: white;
  text-align: center;
`;

const MoviePoster = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
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
