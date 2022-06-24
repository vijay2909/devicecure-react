import React from "react";
import Column1 from "./Column1";
import Column2 from "./Column2";
import Column3 from "./Column3";
import Column4 from "./Column4";
import "./Footer.css";

function Footer() {
  return (
    <nav className="footer">
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
    </nav>
  );
}

export default Footer;
