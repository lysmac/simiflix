import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import SearchedMovieCard from "./SearchedMovieCard";
import RecommendedMovieCard from "./RecommendedMovieCard";

export default function SearchResult() {
  // TODO: Kolla vilken typ context är
  const context: any = useOutletContext();

  let searchedMovie,
    recommendedMovieOne,
    recommendedMovieTwo,
    recommendedMovieThree;

  if (
    context.recommendations &&
    context.movie &&
    context.recommendations.results &&
    context.recommendations.results.length >= 3
  ) {
    searchedMovie = context.movie;
    recommendedMovieOne = context.recommendations.results[0];
    recommendedMovieTwo = context.recommendations.results[1];
    recommendedMovieThree = context.recommendations.results[2];

    return (
      <Wrapper>
        <InnerWrapper>
          <SearchedMovieContainer>
            <SearchedMovieCard movieData={searchedMovie} />
          </SearchedMovieContainer>
          <RecommendedMoviesContainer>
            <RecommendedMovieCard movieData={recommendedMovieOne} />
            <RecommendedMovieCard movieData={recommendedMovieTwo} />
            <RecommendedMovieCard movieData={recommendedMovieThree} />
          </RecommendedMoviesContainer>
        </InnerWrapper>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <InnerWrapper>
          <RecommendedMoviesContainer>
            <FailedSearch>Kunde inte hitta något.</FailedSearch>
          </RecommendedMoviesContainer>
        </InnerWrapper>
      </Wrapper>
    );
  }
}

const SearchedMovieContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 2rem;
`;

const RecommendedMoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #14213d;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #14213d;
  margin: 2rem 0;
  width: 80%;
  margin: 2rem auto;
`;

const InnerWrapper = styled.div`
  background-color: #14213d;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FailedSearch = styled.div`
  background-color: white;
  font-size: 2rem;
  padding: 2rem;
`;
