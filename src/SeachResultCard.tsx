import styled from "styled-components";
import image from './assets/defaultPoster.jpg';

export default function SearchResultCard () {
  return (
    <CardWrapper>
      <MovieTitle>TITLE</MovieTitle>
      <img src={image} alt="" />
      <AddButton>+</AddButton>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
width: 15rem;
display: flex;
justify-content: center;
flex-direction: column;
border: 1px solid black;
`

// const MoviePoster = styled.img`
// background-image: url('./assets/defaultPoster.jpg');
// width: 100px;
// height: 150px
// `

const MovieTitle = styled.h3`
color: black;
font-weight: bold;
text-align: center;
`

const AddButton = styled.button`
color: green;
width: 50px;
height: 30px;
`