import React from "react";
import "./About.css";
import AboutImage from "../ASSETS/AboutImage.jpeg";

function About() {
  return (
    <div className="About">
      <div>
        <h2>About Me:</h2>
        <h3 className="hey">Hey !</h3>
      </div>
      <div className="Contents">
        <div className="AboutImage">
          <img src={AboutImage} alt="AboutImage" />
        </div>
        <div className="AboutContent">
          <p>
            I'm Stallone Fernandes. I'm a 20 Y/O Front-End Developer from Goa 🌴
            India 🇮🇳 based in Goa and Chandigarh (Mohali).With experience of
            more than 2 Years in Front-End Technologies.
            <br />
            <br />
            I'm a Linux Enthusiast and I create visually appealing
            Applications.I'm currently a Full-Time Junior Computer Science
            Student 📚 at Chandigarh University.
            <br />
            <br />
            "do what excites 💫"
          </p>
          <div className="ResumeButton">
            {/* NOTE: Add Resume PDF Download Option */}
            <h5>Resume</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
