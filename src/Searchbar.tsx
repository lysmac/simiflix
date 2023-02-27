import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Searchbar(props: any) {
  return (
    <StyledSearchbar>
      <Form action="submit">
        <label htmlFor="search">Search Movie</label>
        <div>
          <input type="text" id="search" placeholder="Searchbar" />
          {/* <NavLink to="./searchresult">
            <SubmitButton type="submit">Go</SubmitButton>
          </NavLink> */}
        </div>
      </Form>
      <NavLink to="./searchresult">
        <button onClick={() => props.setIsSearched(!props.isSearched)}>
          Search
        </button>
      </NavLink>
      <p>Searched is {props.isSearched.toString()}</p>
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
