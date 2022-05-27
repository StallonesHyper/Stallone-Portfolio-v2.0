import React from "react";
import "./Education.css";

import CU from "../ASSETS/cu-logo.png";
import CULogo from "../ASSETS/OK.png";
function Education() {
  return (
    <div className="EducationSection">
      <h2>Education:</h2>
      <h3>Bachelor's In Computer Science And Engineering</h3>
      <h4 className="CollegeName">Chandigarh University (2020-2024)</h4>
      <div className="CULOGO">
        <div>
          <img src={CU} alt="" className="BigLogo" />
          <img src={CULogo} alt="" className="SmallLogo" />
        </div>
      </div>
    </div>
  );
}

export default Education;
