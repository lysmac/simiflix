import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// TODO: type på props

export default function Searchbar(props: any) {
  return (
    <StyledSearchbar>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(props.userSearch);
          props.setIsSearched(true);
        }}
      >
        <label htmlFor="search">Search Movie</label>
        <div>
          <input
            type="text"
            placeholder="Searchbar"
            onChange={(e) => {
              if (props.setUserSearch) {
                props.setUserSearch(e.target.value);
              }
            }}
          />
        </div>
        <NavLink to="./searchresult">
          <SubmitButton type="submit">Go</SubmitButton>
        </NavLink>
      </Form>
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
