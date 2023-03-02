import styled from "styled-components";
import { Props } from "./Interfaces";

export default function SearchedMovieCard({ movieData }: Props) {
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
  background-color: white;
`;

const MovieTitle = styled.h3`
  height: 2rem;
  width: 90%;
  color: black;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
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
