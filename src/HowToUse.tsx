import styled from "styled-components";

export default function HowToUse() {
  return (
    <Wrapper>
      <TextWrapper>
        <TitleWrapper>
          <HowToUseTitle>Welcome to Simiflix!</HowToUseTitle>
        </TitleWrapper>
        <SectionTitle>About</SectionTitle>
        <P>
          Simiflix is a service that lets you search for movies and get recommendations based on that movie. As of now you will 
          get the most popular movies and a preview based on The Movie DB's API.   
        </P>
        <SectionTitle>Watchlist</SectionTitle>
        <P>
          Like what you see? You can add the movies you find interesting to your watchlist by pressing the add button.
          You can then acces your watchlist in the upper left corner. 
          
        </P>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  `
  const TitleWrapper = styled.div`
  text-align: center;
  font-size: 20px;
  `
  
  const TextWrapper = styled.div`
  width: 30rem;
  `
  
  const HowToUseTitle = styled.h2`
  margin: 2rem 0;
  
`

const P = styled.p`
font-size: 18px
`

const SectionTitle = styled.p`
font-weight: bold;
font-size: 25px;
`