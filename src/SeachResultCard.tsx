import styled from "styled-components";

export default function SearchResultCard(movieData: any) {
  // console.log(recommendedMovie.results);
  // console.log(searchedMovie);
  // console.log(searchedMovie.title);

  // let title: string = searchedMovie.title;
  // title = recommendedMovie.title;
  return (
    <CardWrapper>
      <MovieTitle>  {movieData.movieData.title} </MovieTitle>
      <img
        src={`https://image.tmdb.org/t/p/w1280/${movieData.movieData.poster_path}`}
        alt=""
      />
      <AddButton>+</AddButton>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
`;

// const MoviePoster = styled.img`
// background-image: url('./assets/defaultPoster.jpg');
// width: 100px;
// height: 150px
// `

const MovieTitle = styled.h3`
  color: black;
  font-weight: bold;
  text-align: center;
`;

const AddButton = styled.button`
  color: green;
  width: 50px;
  height: 30px;
`;
