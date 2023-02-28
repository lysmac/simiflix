import styled from "styled-components";

export default function SearchResultCard () {
  return (
    <CardWrapper>
      <MovieTitle>
        <h1>placeholderTitle</h1>
        {/* {movie.title} */}
        </MovieTitle>
        <img src="./assets/defaultPoster.jpg" alt="" />
      {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> */}
      <p>
        placeholder description
        {/* {movie.overview} */}
        </p>
      <AddButton>
        +
        {/* <button onClick={() => onAddToWatchlist(movie)}>Add to Watchlist</button> */}
        </AddButton>
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