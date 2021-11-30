import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footerContainer">
      <p className="footerDev">Developer: Afton Slone</p>
      <a
        className="footerLinks"
        href="https://www.linkedin.com/in/afton-slone/"
      >
        <AiFillLinkedin />
      </a>
      <a className="footerLinks" href="https://github.com/AftonSlone">
        <AiFillGithub />
      </a>
    </div>
  );
}
