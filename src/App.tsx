import styled from "styled-components";
import Header from "./Header";
import MainContent from "./MainContent";

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <MainContent />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
