import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export default function App() {
  const [movie, setMovie] = useLocalStorageState(0, "movie");
  const [recommendations, setRecommendations] = useLocalStorageState<string[]>(
    [],
    "recommendations"
  );
  const [id, setID] = useLocalStorageState(0, "id");
  const [isSearched, setIsSearched] = useState(false);
  const [userSearch, setUserSearch] = useState("titanic");
  const [watchlist, setWatchlist] = useLocalStorageState([], "watchlist");

  useEffect(() => {
    async function callApiForID() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c0f1190bf24e1f667c8c22a047cfa712&query=${userSearch}`
      );
      const result = await response.json();
      setID(result.results[0].id);
    }
    callApiForID();
  }, [userSearch]);

  useEffect(() => {
    async function callApiForMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c0f1190bf24e1f667c8c22a047cfa712&language=en-US`
      );
      const result = await response.json();
      setMovie(result);
    }
    callApiForMovie();
  }, [id]);

  useEffect(() => {
    async function callApiForRecommendations() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=c0f1190bf24e1f667c8c22a047cfa712&language=en-US&page=1`
      );
      const result = await response.json();
      setRecommendations(result);
    }
    callApiForRecommendations();
  }, [movie]);

  return (
    <AppWrapper>
      <Header
        setUserSearch={setUserSearch}
        setIsSearched={setIsSearched}
        userSearch={userSearch}
      />
      <Main>
        <Outlet
          context={{
            movie,
            recommendations,
            setWatchlist,
            watchlist,
          }}
        ></Outlet>
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
`;
