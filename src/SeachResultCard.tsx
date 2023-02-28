import styled from "styled-components";
import image from './assets/defaultPoster.jpg';

export default function SearchResultCard () {
  return (
    <CardWrapper>
      <CardTitle>TITLE</CardTitle>
      <CardImage>
        <AddButton>+</AddButton>
      </CardImage>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const CardTitle = styled.h3`
  color: black;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 1rem;
  background-color: #f8f8f8;
`;

const CardImage = styled.div`
  background-image: url(${image});
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 300px;
  position: relative;
`;

const AddButton = styled.button`
  color: green;
  width: 30px;
  height: 20px;
  text-align: center;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
`;

