import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import SearchResultCard from "./SeachResultCard";

export default function SearchResult() {
  const context: object = useOutletContext();

  const searchedMovie = context.movie;
  // const recommendedMovieOne: object = context.recommendation;
  console.log(context.recommendations.results[0]);

  const recommendedMovieOne = context.recommendations.results[0];
  const recommendedMovieTwo = context.recommendations.results[1];
  const recommendedMovieThree = context.recommendations.results[2];
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
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #14213d;
  margin: 2rem 0;
`;

const InnerWrapper = styled.div`
  background-color: white;
  width: 90%;
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
