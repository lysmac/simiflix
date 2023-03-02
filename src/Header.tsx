import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import ErrorBoundary from "./ErrorBoundary";
import { HeaderProps } from "./Interfaces";
import Searchbar from "./Searchbar";
import { useState } from "react";

export default function Header(props: HeaderProps) {
  const [isSpooky, setIsSpooky] = useState(false);

  return (
    <HeaderStyle>
      <StyledNavTitle to="/" spooky={isSpooky}>
        Simiflix
      </StyledNavTitle>
      <SegmentBar>
        <SearchbarWrapper>
          <ErrorBoundary message="Something went wrong with searchbar">
            <Searchbar
              setUserSearch={props.setUserSearch}
              userSearch={props.userSearch}
            />
          </ErrorBoundary>
        </SearchbarWrapper>

        <StyledNavLink to="./watchlist">Watchlist</StyledNavLink>

        <SpookyButton onClick={() => setIsSpooky(!isSpooky)}>
          👻 🔴
        </SpookyButton>
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

const StyledNavTitle = styled(NavLink)<{ spooky: boolean }>`
  text-decoration: none;
  color: ${({ spooky }) => (spooky ? "red" : "#fca311")};
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

const SpookyButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
`;
