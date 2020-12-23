import React from "react";
import "./Repos.css";
import reposData from "../data/repos.json";
function Repos() {
  console.log("\n");
  console.log("************ repos **************");
  console.log(reposData);

  return (
    <div id="Repos">
      <h1>Repos</h1>

      <ul class="cards">
        {reposData.map((project) => {
          return (
            <>
              <li class="cards__item">
                <div class="card">
                  <div class="card__content">
                    <div class="card__title">{project.name}</div>
                    <p class="card__text">
                      {project.repos.map((repo) => {
                        return (
                          <>
                            <h2>{repo.name}</h2>
                            <a target="_blank" href={`${repo.url}/issues`}>
                              issues
                            </a>{" "}
                            <a target="_blank" href={`${repo.url}/issues/new`}>
                              new
                            </a>{" "}
                            <a target="_blank" href={`${repo.url}/pulls/`}>
                              pulls
                            </a>{" "}
                            <a target="_blank" href={`${repo.url}/commits/`}>
                              commits
                            </a>{" "}
                            <a target="_blank" href={`${repo.url}/wiki/`}>
                              wiki
                            </a>{" "}
                            <a target="_blank" href={`${repo.url}/pulse/`}>
                              pulse
                            </a>
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
