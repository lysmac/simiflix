import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import SearchResultCard from "./SeachResultCard";
import WatchlistCard from "./WatchlistCard";

export default function WatchList() {
  // TODO: Kolla vilken typ context är
  const context: any = useOutletContext();
  const savedMovies = context.watchlist;
  console.log(savedMovies);

  return (
    <Wrapper>
      <h1>Watchlist</h1>
      <MoviesWrapper>
        {savedMovies.map((movie: any) => {
          return <div key={movie.id}>Titel:{movie.title}</div>;
        })}
      </MoviesWrapper>
      <WatchlistCard />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid red;
`;

const MoviesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 3rem;
  background-color: white;
`;
