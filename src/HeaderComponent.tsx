import styled from "styled-components"

function HeaderComponent() {
  return (
    <Header>
      <H1>Simiflix</H1>
    </Header>
  )
}

const Header = styled.header`
display: flex;
justify-content: center;
background-color: #14213D;
`

const H1 = styled.h1`
color: orange;
font-size: 60px;
`

export default HeaderComponent