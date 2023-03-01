import styled from "styled-components";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import React from "react";
import { useOutletContext } from "react-router-dom";

// TODO: Kolla vilken typ movieData är

interface MovieData {
  title: string;
  poster_path: string;
  // add any other properties here that you expect to receive from the API
}

interface Props {
  movieData: MovieData;
}

export default function SearchResultCard({ movieData }: Props) {
  const context: any = useOutletContext();
  // const [watchlist, addToWatchlist] = useLocalStorageState([], "watchlist");
  const [clicked, setClicked] = React.useState(false);

  return (
    <CardWrapper>
      <MovieTitle> {movieData.title} </MovieTitle>
      <img
        src={`https://image.tmdb.org/t/p/w1280/${movieData.poster_path}`}
        alt=""
      />
      <button
        onClick={() => {
          if (clicked) {
            const updatedWatchlist = context.watchlist.filter(
              (movie) => movie.movieID !== movieData.id
            );
            setClicked(!clicked);
            context.setWatchlist(updatedWatchlist);
          } else {
            context.setWatchlist([
              ...context.watchlist,
              { Title: movieData.title, movieID: movieData.id },
            ]);
            setClicked(!clicked);
          }
        }}
      >
        {clicked ? "Remove" : "Add"}{" "}
      </button>{" "}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
`;

// const MoviePoster = styled.img`
// background-image: url('./assets/defaultPoster.jpg');
// width: 100px;
// height: 150px
// `

const MovieTitle = styled.h3`
  color: black;
  font-weight: bold;
  text-align: center;
`;

const AddButton = styled.button`
  color: green;
  width: 50px;
  height: 30px;
`;
