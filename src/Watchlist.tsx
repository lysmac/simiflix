import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import WatchlistCard from "./WatchlistCard";

export default function WatchList() {
  const context: any = useOutletContext();
  const savedMovies = context.watchlist;
  return (
    <Wrapper>
      <h1>Watchlist</h1>
      <MoviesWrapper>
        {savedMovies.map((movie: any) => {
          return (
            <WatchlistCard
              key={movie.movieID}
              id={movie.movieID}
              title={movie.title}
              posterurl={movie.posterurl}
              overview={movie.overview}
            />
          );
        })}
      </MoviesWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const MoviesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  background-color: white;
`;
