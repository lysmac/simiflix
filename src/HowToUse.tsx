import styled from "styled-components"

export default function HowToUse () {
  return (
    <Wrapper>
      <h1>How to use</h1>
      <h2>Search</h2>
      <p>bla bla</p>
      <h2>Watchlist</h2>
      <p>bla bla</p>
    </Wrapper>
  )
}


const Wrapper = styled.div`
color: white;
display:flex;
flex-direction: column;
align-items: center;
background-color: #14213d;
margin: 2rem 0;`