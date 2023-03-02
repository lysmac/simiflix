import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import { InterfaceMovie, Recommendations } from "./Interfaces";

export default function App() {
  const [movie, setMovie] = useLocalStorageState<InterfaceMovie>(
    {
      adult: false,
      backdrop_path: "",
      belongs_to_collection: null,
      budget: 0,
      genres: [],
      homepage: "",
      id: 0,
      imdb_id: "",
      original_language: "",
      original_title: "",
      overview: "",
      popularity: 0,
      poster_path: null,
      production_companies: [],
      production_countries: [],
      release_date: new Date(),
      revenue: 0,
      runtime: 0,
      spoken_languages: [],
      status: "",
      tagline: "",
      title: "",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    "movie"
  );
  const [recommendations, setRecommendations] =
    useLocalStorageState<Recommendations>(
      { page: 0, results: [], total_pages: 0, total_results: 0 },
      "recommendations"
    );

  const [id, setID] = useLocalStorageState(0, "id");
  const [userSearch, setUserSearch] = useState("");
  const [watchlist, setWatchlist] = useLocalStorageState([], "watchlist");

  useEffect(() => {
    async function callApiForID() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c0f1190bf24e1f667c8c22a047cfa712&query=${userSearch}&include_adult=false&with_original_language=en`
      );
      const result = await response.json();
      if (result.results && result.results.length > 0) {
        setID(result.results[0].id);
      }
    }
    callApiForID();
  }, [userSearch]);

  useEffect(() => {
    async function callApiForMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c0f1190bf24e1f667c8c22a047cfa712&language=en-US&include_adult=false&with_original_language=en`
      );
      const result = await response.json();
      setMovie(result);
    }
    callApiForMovie();
  }, [id]);

  useEffect(() => {
    async function callApiForRecommendations() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=c0f1190bf24e1f667c8c22a047cfa712&language=en-US&&include_adult=false&with_original_language=en&page=1`
      );
      const result = await response.json();
      setRecommendations(result);
    }
    callApiForRecommendations();
  }, [movie]);

  return (
    <ErrorBoundary message="Something went wrong with the page">
      <AppWrapper>
        <ErrorBoundary message="Something went wrong with the Header">
          <Header setUserSearch={setUserSearch} userSearch={userSearch} />
        </ErrorBoundary>

        <Main>
          <ErrorBoundary message="Something went wrong with the outlet component">
            <Outlet
              context={{
                movie,
                recommendations,
                setWatchlist,
                watchlist,
              }}
            ></Outlet>
          </ErrorBoundary>
        </Main>
      </AppWrapper>
    </ErrorBoundary>
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
