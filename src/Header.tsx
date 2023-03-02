import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";
import Searchbar from "./Searchbar";

export default function Header(props: any) {
  return (
    <HeaderStyle>
      <StyledNavTitle to="/">Simiflix</StyledNavTitle>
      <SegmentBar>

       
        <SearchbarWrapper>

        <ErrorBoundary message="Something went wrong with searchbar">

          <Searchbar
            setUserSearch={props.setUserSearch}
            setIsSearched={props.setIsSearched}
            userSearch={props.userSearch}
          />{" "}
 </ErrorBoundary>
        </SearchbarWrapper>


        <StyledNavLink to="./watchlist">Watchlist</StyledNavLink>
      </SegmentBar>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #14213d;
  position: relative;
`;

const SegmentBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fca311;
  height: 5em;
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 2rem;
  padding: 2rem;
  text-decoration: none;
  position: absolute;
  
`;

const StyledNavTitle = styled(NavLink)`
  text-decoration: none;
  color: #fca311;
  font-size: 60px;
  font-family: rockwell;
  padding: 2rem;
  text-transform: uppercase;
  
`;

const SearchbarWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
