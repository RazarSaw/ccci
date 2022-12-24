import React from "react";
import Card from "./Card.js";
import data from "./../data.json";

export default function Main() {
  return (
    <main className="main">
      <article>
        <h3>Imagine A Community Without Litter</h3>
      </article>
      <article>
        <Card props={data.sections[1][2]["cards"][0]} />
        <Card props={data.sections[1][2]['cards'][1]} />
        <Card props={data.sections[1][2]['cards'][2]} />
        <Card props={data.sections[1][2]['cards'][3]} />
      </article>
    </main>
  );
}
