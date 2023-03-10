import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HeaderProps } from "./Interfaces";

export default function Searchbar(props: HeaderProps) {
  return (
    <StyledSearchbar>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          <NavLink to="./searchresult" />;
        }}
      >
        <label htmlFor="search"></label>
        <div>
          <Input
            type="text"
            placeholder="Search Movie"
            onChange={(e) => {
              if (props.setUserSearch) {
                props.setUserSearch(e.target.value);
              }
            }}
          />
        </div>
        <NavLink to="./searchresult">
          <SubmitButton type="submit">Search</SubmitButton>
        </NavLink>
      </Form>
    </StyledSearchbar>
  );
}
const StyledSearchbar = styled.div`
margin-right: 6rem`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const SubmitButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
`;

const Input = styled.input`
  height: 1.6rem;
  width: 12rem;
  border: black 2px solid;
`;
