import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { AppContextType, RecommendedMovie } from "./Interfaces";

export default function WatchlistCard(props: RecommendedMovie) {
  const context: AppContextType = useOutletContext();

  return (
    <WatchCardWrapper>
      <LeftColumn>
        <img
          src={`https://image.tmdb.org/t/p/w1280/${props.posterurl}`}
          height="190px"
        />{" "}
        <RemoveButton
          onClick={() => {
            const updatedWatchlist = context.watchlist.filter(
              (movie) => movie.movieID !== props.id
            );
            context.setWatchlist(updatedWatchlist);
          }}
        >
          Remove
        </RemoveButton>
      </LeftColumn>
      <LeftColumn>
        <MovieTitle>{props.title}</MovieTitle>
        <MovieDescription>{props.overview}</MovieDescription>
      </LeftColumn>
    </WatchCardWrapper>
  );
}

const WatchCardWrapper = styled.div`
  width: 45rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  gap: 1rem;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.h2`
  color: black;
  font-weight: bold;
`;
const MovieDescription = styled.p`
  color: black;
`;

const RemoveButton = styled.button`
  color: black;
  border: none;
  background: red;
  width: 100%;
  height: 30px;
`;
