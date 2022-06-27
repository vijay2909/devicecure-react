import React from "react";
import "./DownloadApp.css";

function DownloadApp() {
  return (
    <div className="downloadApp">
      <div className="downloadApp__image">
        <img src="./Images/Doorstep (1).png" />
      </div>
      <div className="downloadApp__content">
        <div className="text">
          <h1>
            Download and book a hasel free mobile repairing service experience
            and get upto ₹200 off on using Devicecure App
          </h1>
        </div>
        
          <div className="logo">
          <a href="https://play.google.com/store/apps/details?id=com.app.devicecure">
            <img className="logo__image" src="https://th.bing.com/th/id/R.29f6b50fd5fbcaeaffe90359f8a26bc1?rik=UfQ8xfy%2fSsFtAA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-gC805g3FwR0%2fVUnpXFFz6II%2fAAAAAAAACQo%2fDw7eB8X_svE%2fs1600%2fAndroid-app-on-google-play.png&ehk=jeV9j1icW3XdXyW0r3lobHgd0E26xdKlQ6Qtzm8Z7i0%3d&risl=&pid=ImgRaw&r=0" />
            </a>
          </div>
        
      </div>
    </div>
  );
}

export default DownloadApp;
