import React from "react";
import items from "../data/stack.json";
import _ from "lodash";
export default function Stack() {
  const groups = _.mapValues(_.groupBy(items, "type"), (items) =>
    items.map((item) => _.omit(item, "type"))
  );
  return (
    <div>
      <h1>Stack</h1>
      <ul>
        {Object.keys(groups).map((group) => {
          const sorted = _.orderBy(groups[group], ["name"]);
          console.log(
            "🚀 ~ file: Stack.js ~ line 14 ~ {Object.keys ~ sorted",
            sorted
          );
          return (
            <>
              <h2>{group}</h2>
              <ul>
                {sorted.map(({ name, url }) => {
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
