import React from "react";
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
              <li class="cards__item">
                <div class="card">
                  <div class="card__content">
                    <div class="card__title">{project.name}</div>
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
                            <h2>{repo.name}</h2>
                            <a target="_blank" href={`${repo.url}/commits/`}>
                              📃 Commits
                            </a>{" "}
                            <a target="_blank" href={`${repo.url}/issues`}>
                              🐛 Issues
                            </a>{" "}
                            <a target="_blank" href={`${repo.url}/issues/new`}>
                              🖊️ New
                            </a>{" "}
                          </>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Repos;
