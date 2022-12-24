import React from "react";
import MobileNavigation from "./MobileNavigation.js";
import DesktopNavigation from "./DesktopNavigation.js";

export default function NavButtons(props) {
  return (
    <>
      <MobileNavigation props={props.props}/>
      <DesktopNavigation/>
    </>
  );
}
