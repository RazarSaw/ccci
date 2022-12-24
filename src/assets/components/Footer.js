import React from "react";
import secondaryLogo from "./../images/Corpa Code Administration Logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img
        src={secondaryLogo}
        alt="Corpa Code Administration Logo"
        className="corpa-code-logo"
      />

      <small>Production Of Corpa Code Administration</small>
      <small>Corpa Code Cleanup Initiative</small>
      <small>Developed By Razar Saw / Junior Web Developer</small>
      <small>December 16, 2022</small>
    </footer>
  );
}
