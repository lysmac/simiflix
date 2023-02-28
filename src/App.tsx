import { ContextType, useEffect, useState } from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

export default function App() {
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [id, setID] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [userSearch, setUserSearch] = useState("star trek");

  useEffect(() => {
    async function callApiForID() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c0f1190bf24e1f667c8c22a047cfa712&query=${userSearch}`
      );
      const result = await response.json();
      setID(result.results[0].id);
      // console.log(id);
    }
    callApiForID();
  }, [isSearched]);

  useEffect(() => {
    async function callApiForMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c0f1190bf24e1f667c8c22a047cfa712&language=en-US`
      );
      const result = await response.json();
      setMovie(result);
      // console.log("Nu hämtar vi filmen!");
    }
    callApiForMovie();
  }, [isSearched]);

  useEffect(() => {
    async function callApiForRecommendations() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=c0f1190bf24e1f667c8c22a047cfa712&language=en-US&page=1`
      );
      const result = await response.json();
      setRecommendations(result);
      // console.log("Recommendations found");
      // console.log(recommendations);
    }
    callApiForRecommendations();
  }, [movie]);

  // TODO: Behöver nog inte ha state, kan ha en tom sträng från början.
  // function showRightContent() {
  //   if (isSearched) {
  //     return (
  //       <div>
  //         {<p>Title: {movie.title}</p>}
  //         {<p>Tagline: {movie.tagline}</p>}
  //         {<p>Overview: {movie.overview}</p>}
  //         <img
  //           width="200px"
  //           src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
  //         />

  //         <h1>Recommendations</h1>
  //         <h2>{recommendations.results[0].title}</h2>
  //         <h2>{recommendations.results[1].title}</h2>
  //         <h2>{recommendations.results[2].title}</h2>
  //       </div>
  //     );
  //   }
  //   if (!isSearched) {
  //     return <div>You haven't searched yet!</div>;
  //   }
  // }

  return (
    <AppWrapper>
      <Header isSearched={isSearched} setIsSearched={setIsSearched} />
      <Main>
        <Outlet context={{ movie, recommendations }}></Outlet>
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
