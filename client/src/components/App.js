import Container from "react-bootstrap/Container";
import Repos from "./Repos";
import VSCode from "./VSCode";
import Stack from "./Stack";
import "./App.css";
function App() {
  return (
    <>
      <Container>
        <a target="_blank" href="https://wakatime.com/dashboard">
          always use wakatime
        </a>
        <Repos />
        <Stack />
        <VSCode />
      </Container>
    </>
  );
}

export default App;
