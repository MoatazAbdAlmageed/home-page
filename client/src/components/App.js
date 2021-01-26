import Container from "react-bootstrap/Container";
import Repos from "./Repos";
import VSCode from "./VSCode";
import Stack from "./Stack";
import Links from "./Links";
import "./App.css";
function App() {
  return (
    <>
      <Container>
        <Links />
        <Repos />
        <Stack />
        <VSCode />
      </Container>
    </>
  );
}

export default App;
