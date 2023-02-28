import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string
}

export default function App() {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  // denna ska in i content när den är klar!
  function handleAddToWatchList(movie: Movie) {
    setWatchlist([...watchlist, movie])
  }

  // denna ska läggas till på searchResultCards
  // <button onClick={() => onAddToWatchlist(movie)}>Add to Watchlist</button>

  return (
    <AppWrapper>
      <Header />
      <Main>
        <Outlet/>
      </Main>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.div`
background-color: #14213d;
height: calc(100vh - 250px);
`