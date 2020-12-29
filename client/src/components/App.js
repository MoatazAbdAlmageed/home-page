import Container from "react-bootstrap/Container";
import Repos from "./Repos";
import VSCode from "./VSCode";
import Stack from "./Stack";
import "./App.css";
function App() {
  return (
    <>
      <Container>
        <ul>
          <li>
            <a target="_blank" href="https://wakatime.com/dashboard">
              always use wakatime
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://people.zoho.com/wuilthr/zp#home/dashboard"
            >
              always log time
            </a>
          </li>
        </ul>

        <Repos />
        <Stack />
        <VSCode />
      </Container>
    </>
  );
}

export default App;
