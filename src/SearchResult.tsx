import styled from "styled-components";
import SearchResultCard from "./SeachResultCard";

export default function SearchResult() {
  return (
    <Wrapper>
      <InnerWrapper>
        <UpperResultContainer>
          <SearchResultCard/>
          <SearchResultCard/>
          <SearchResultCard/>
          <SearchResultCard/>
        </UpperResultContainer>
        <LowerResultContainer>
          <SearchResultCard/>
          <SearchResultCard/>
          <SearchResultCard/>
          <SearchResultCard/>
        </LowerResultContainer>
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display:flex;
justify-content: center;
background-color: #14213d;
margin: 2rem 0;`

const InnerWrapper = styled.div`
background-color: white;
width: 90%;
display: flex;
flex-direction: column;
`

const UpperResultContainer = styled.div`
display: flex;
justify-content: space-between;
`


const LowerResultContainer = styled.div`
display: flex;
justify-content: space-between;
`