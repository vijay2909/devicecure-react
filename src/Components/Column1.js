import React from "react";
import "./Column1.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

function Column1() {
  return (
    <div className="column1">
      <img src="./Images/whiteLogo.png" />
      <div className="column1__address">
        <strong>Reach us</strong>
        <small>
          21,22 Ganpati Vihar Colony, Rakdi,
          <br /> Sodala, Jaipur, Rajasthan - 302006
        </small>
      </div>
      <div className="column1__icons">
        <span>
          <TwitterIcon fontSize="large" />
        </span>
        <span>
          <YouTubeIcon fontSize="large" />
        </span>
        <span>
          <FacebookIcon fontSize="large" />
        </span>
      </div>
      <img src="./Images/googleplayLogo.png" />
    </div>
  );
}

export default Column1;
