import styled from "styled-components";

export default function MainContent() {
  return (
    <MainWrapper>
      <div>Main content goes here</div>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  background-color: purple;
  height: calc(100vh - 250px);
`;
