import React from "react";
import "./Home.css";
import Profile from "../ASSETS/Profile.jpeg";

function Home() {
  return (
    <div className="Home">
      <div className="HomeAlign">
        <div>
          <h1>Stallone Fernandes</h1>
          <h3 className="Designation">Front-End Developer💡</h3>
        </div>
        <img src={Profile} alt="Profile" className="Img" />
      </div>
    </div>
  );
}

export default Home;
