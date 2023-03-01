import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Searchbar from "./Searchbar";

export default function Header(props: any) {
  return (
    <HeaderStyle>
      <StyledNavTitle to="/">Simiflix</StyledNavTitle>
      <SegmentBar>
        <H2>Welcome!</H2>
        <Searchbar
        setUserSearch={props.setUserSearch}
        setIsSearched={props.setIsSearched}
        />{" "}
        <StyledNavLink to="./watchlist">Watchlist</StyledNavLink>
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

const SegmentBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fca311;
  height: 5em;
  width: 100%;
`;

const H2 = styled.h2`
  padding: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 2rem;
  padding: 2rem;
  text-decoration: none;
`;

const StyledNavTitle = styled(NavLink)`
  text-decoration: none;
  color: #fca311;
  font-size: 60px;
  font-family: rockwell;
  padding: 2rem;
`;
