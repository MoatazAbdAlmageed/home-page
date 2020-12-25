import React from "react";
import packages from "../data/packages.json";
import _ from "lodash";
export default function Packages() {
  const groups = _.mapValues(_.groupBy(packages, "type"), (packages) =>
    packages.map((car) => _.omit(car, "type"))
  );
  return (
    <div>
      <h1>Packages</h1>
      <ul>
        {Object.keys(groups).map((group) => {
          return (
            <>
              <h2>{group}</h2>
              <ul>
                {groups[group].map(({ name, url }) => {
                  return (
                    <li>
                      <a target="_blank" href={url}>
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
      </ul>
    </div>
  );
}
