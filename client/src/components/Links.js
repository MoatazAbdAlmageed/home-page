import React from "react";
import items from "../data/links.json";
import "./Links.css";

export default function Links() {
  return (
    <div>
      <h1>Links</h1>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <a target="_blank" href={item.url}>
                {item.title.toUpperCase()}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
