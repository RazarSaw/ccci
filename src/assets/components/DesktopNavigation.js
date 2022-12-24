import React from "react";

export default function DesktopNavigation() {
  return (
    <section id="desktop-navigation">
      <ul className="navigation-bar-outer">
        <li className="desktop navigation-bar-inner active">
          <a href="#">
            <span className="material-symbols-outlined">home</span>Home
          </a>
        </li>
        <li className="desktop navigation-bar-inner">
          <a href="./learnmore.html">
            <span className="material-symbols-outlined">more_vert</span>Learn
            More
          </a>
        </li>
        <li className="desktop navigation-bar-inner">
          <a href="./contact.html">
            <span className="material-symbols-outlined">contact_support</span>
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
}
