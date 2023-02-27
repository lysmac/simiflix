import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <HeaderStyle>
      <Title>Simiflix</Title>
      <SegmentBar>
        <NavItem>Welcome!</NavItem>
        <Searchbar />
        <NavItem><NavLink to="./watchlist">Watchlist</NavLink></NavItem>
      </SegmentBar>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #14213d;
`;

const Title = styled.h1`
  color: #fca311;
  font-size: 60px;
  font-family: rockwell;
`;

const SegmentBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fca311;
  height: 5em;
  width: 100%;
  
`;
const NavItem = styled.p`
  font-size: 2rem;
  padding: 2rem;
  text-decoration: none;
`;



