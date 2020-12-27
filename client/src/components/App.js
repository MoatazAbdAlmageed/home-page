import Container from "react-bootstrap/Container";
import Repos from "./Repos";
import VSCode from "./VSCode";
import Stack from "./Stack";
import "./App.css";
function App() {
  return (
    <>
      <Container>
        <Repos />
        <Stack />
        <VSCode />
      </Container>
    </>
  );
}

export default App;
