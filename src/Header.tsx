import styled from "styled-components";

function Header() {
  return (
    <HeaderStyle>
      <Title>Simiflix</Title>
      <SegmentBar>
        <NavItem>Welcome!</NavItem>
        <NavItem>Watchlist</NavItem>
      </SegmentBar>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
display: flex;
flex-direction: column;
align-items: center;
background-color: #14213D;
`

const Title = styled.h1`
color: #FCA311;
font-size: 60px;
font-family: rockwell;
`

const SegmentBar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #FCA311;
height: 5em;
width: 100%;
`
const NavItem = styled.p`
font-size: 2rem;
padding: 2rem`

export default Header;