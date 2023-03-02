import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import SearchResultCard from "./SeachResultCard";

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
          <UpperResultContainer>
            <SearchResultCard movieData={searchedMovie} />
            <SearchResultCard movieData={recommendedMovieOne} />
            <SearchResultCard movieData={recommendedMovieTwo} />
            <SearchResultCard movieData={recommendedMovieThree} />
          </UpperResultContainer>
          {/* <LowerResultContainer>
          <SearchResultCard />
        </LowerResultContainer> */}
        </InnerWrapper>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <InnerWrapper>Något gick fel</InnerWrapper>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #14213d;
  margin: 2rem 0;
`;

const InnerWrapper = styled.div`
  background-color: #14213d;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const UpperResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LowerResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
