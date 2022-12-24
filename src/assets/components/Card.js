import React from "react";

export default function Card(property) {
  return (
    <section className="main__card">
      <h3>{property.props.title}</h3>
      <p>{property.props.body}</p>
    </section>
  );
}
