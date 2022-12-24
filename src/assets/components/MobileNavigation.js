import React from "react";

export default function MobileNavigation(props) {
  // console.log(props.props.open)
  const navbar = document.getElementsByClassName("navigation-bar");
  // // const navbarOuter = document.getElementsByClassName("navigation-bar-outer");
  // // console.log(navbarOuter);
  // console.log(navbar.item(0))
  // // console.log(navbar.item(0).offsetHeight);

  return (
    <section id="mobile-navigation">
      <svg
        className="menu"
        onClick={() => props.props.setOpen(!props.props.open)}
        width="25"
        height="20"
        viewBox="0 0 25 20"
      >
        <rect className="bar" y="0"></rect>
        <rect className="bar" y="8.5"></rect>
        <rect className="bar" y="17"></rect>
      </svg>
    </section>
  );
}

{
  /* {open === true && (
        <ul className="navigation-bar-outer">
          <li className="mobile navigation-bar-inner active">
            <a href="#">
              <span className="material-symbols-outlined">home</span>Home
            </a>
          </li>
          <li className="mobile navigation-bar-inner">
            <a href="./learnmore.html">
              <span className="material-symbols-outlined">more_vert</span>Learn
              More
            </a>
          </li>
          <li className="mobile navigation-bar-inner">
            <a href="./contact.html">
              <span className="material-symbols-outlined">contact_support</span>
              Contact
            </a>
          </li>
        </ul>
      )} */
}
