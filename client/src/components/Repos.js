import React from "react";
import Card from "react-bootstrap/Card";
import "./Repos.css";
import reposData from "../data/repos.json";
function Repos() {
  return (
    <div id="Repos">
      <h1>Wuilt Projects</h1>
      <ul class="cards">
        {reposData.map((project) => {
          return (
            <>
              <Card>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>
                    {project.alpha && (
                      <a target="_blank" href={`${project.alpha}`}>
                        🔗 alpha
                      </a>
                    )}{" "}
                    {project.production && (
                      <a target="_blank" href={`${project.production}`}>
                        🌐 production
                      </a>
                    )}
                    <p class="card__text">
                      {project.repos.map((repo) => {
                        return (
                          <>
                            <h4>
                              <a target="_blank" href={`${repo.url}`}>
                                {repo.name}
                              </a>
                            </h4>
                            <a target="_blank" href={`${repo.url}/pulls/`}>
                              💪 pulls
                            </a>{" "}
                            <a target="_blank" href={`${repo.url}/commits/`}>
                              📃 Commits
                            </a>{" "}
                            <a target="_blank" href={`${repo.url}/issues`}>
                              🐛 Issues
                            </a>{" "}
                            <a target="_blank" href={`${repo.url}/issues/new`}>
                              🖊️ New
                            </a>{" "}
                            <hr />
                          </>
                        );
                      })}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Repos;
