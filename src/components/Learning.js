import React from "react";
import items from "../data/rearning-resources";
import "./Learning.css";

export default function Learning() {
  return (
    <div>
      <h1>Learning Resoucrs</h1>
      <ul>
        {items.map(({ name, url }) => {
          return (
            <li>
              <a target="_blank" href={url}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
