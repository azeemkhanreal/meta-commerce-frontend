import { Counter } from "./features/counter/Counter";
import styled from "styled-components";
import Men from "./pages/Men";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Women from "./pages/Women";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </Router>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
