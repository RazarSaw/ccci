import React from "react";
import Logo from "./Logo.js";
import NavButtons from "./NavButtons.js";

export default function Nav() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav
      className="subtitle is-6 navigation-bar"
      id={open ? "mobile-activated" : null}
    >
      <Logo />
      <NavButtons props={{open, setOpen}}/>
    </nav>
  );
}
