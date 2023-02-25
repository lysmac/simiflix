import { useState } from "react";
import styled from "styled-components";

function Content() {
  const [movie, setMovie] = useState(null);
  const [id, setId] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c0f1190bf24e1f667c8c22a047cfa712`
    );
    const result = await response.json();
    setMovie(result);
  };

  return (
    <ContentDiv>
      <form onSubmit={handleSubmit}>
        <label>
          Enter movie ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {movie && <div>Title: {movie.title}</div>}
    </ContentDiv>
  );
}

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20em;
  width: 100%;
  border: 1px solid black;
`;

export default Content;
