import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";
import { HeaderProps } from "./Interfaces";
import Searchbar from "./Searchbar";

export default function Header(props: HeaderProps) {
  const [isSpooky, setIsSpooky] = useState(false);

  return (
    <HeaderStyle>
      <StyledNavTitle to="/" spooky={isSpooky ? "true" : "false"}>
        Simiflix
      </StyledNavTitle>

      <SegmentBar>
        
            <StyledNavLink to="./watchlist">Watchlist</StyledNavLink>
          <ErrorBoundary message="Something went wrong with searchbar">
            <Searchbar
              setUserSearch={props.setUserSearch}
              userSearch={props.userSearch}
            />
          </ErrorBoundary>
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
`;

const SegmentBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fca311;
  height: 5rem;
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
font-family: rockwell;
border: 2px solid white;
color: #fca311;
padding: 0.3rem;
font-size: 2rem;
text-transform: uppercase;
background: black;
margin-left: 2rem;
`;

const StyledNavTitle = styled(NavLink)<{ spooky?: string }>`
  text-decoration: none;
  color: ${({ spooky }) => (spooky === "true" ? "red" : "#fca311")};
  font-size: 60px;
  font-family: rockwell;
  padding: 2rem;
  text-transform: uppercase;
  
`;

const SpookyButton = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
