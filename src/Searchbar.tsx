import { useState } from "react";
import styled from "styled-components";
import SearchResultCard from "./SeachResultCard";

// TODO: type på props

export default function Searchbar(props: any) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([])

  // function handleSearchClick() {
  //   props.setIsSearched(!props.isSearched);
  //   SearchResult();
  // }

  async function SearchResult() {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c0f1190bf24e1f667c8c22a047cfa712&query=${searchQuery}`);
    const result = await response.json();
    setSearchResults(result.results)
    console.log(result);
  }

  return (
    <StyledSearchbar>
      <Form onSubmit={(e) => {
        e.preventDefault();
        SearchResult();
      }}
      >
        <label htmlFor="search">Search Movie</label>
        <div>
          <input 
            type="text" 
            id="search" 
            placeholder="Searchbar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
        </div> 
        <SubmitButton>Go</SubmitButton>
      </Form>
      {searchResults.length > 0 && (
        <ResultsContainer>
          {searchResults.map((result => (
            <SearchResultCard key={result.id}>
              <Poster src={`https://image.tmdb.org/t/p/w185/${result.poster_path}`} />
              <div>
                <Title>{result.title}</Title>
                <Tagline>{result.tagline}</Tagline>
                <p>hej</p>
              </div>
            </SearchResultCard>
          )))}
        </ResultsContainer>
      )},
      {/* <p>Searched is {props.isSearched.toString()}</p> */}
    </StyledSearchbar>
  );
}

const StyledSearchbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubmitButton = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
`;


//copy-pasta

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ResultCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;

const Poster = styled.img`
  width: 185px;
  height: 278px;
  object-fit: cover;
  margin-right: 1rem;
`;

const Title = styled.h3`
  margin: 0;
`;

const Tagline = styled.p`
  margin: 0;
`;





