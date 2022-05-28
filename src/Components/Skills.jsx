import React from "react";
import "./Skills.css";
import JS from "../ASSETS/js.png";
import Python from "../ASSETS/python.png";
import CPP from "../ASSETS/cpp.png";
import TS from "../ASSETS/ts.png";
import ReactLogoIcon from "../ASSETS/react.png";
import Redux from "../ASSETS/redux.png";
import Saas from "../ASSETS/saas.svg";
import Tailwind from "../ASSETS/tailwind.png";
import Next from "../ASSETS/next-js.svg";
import NodeIcon from "../ASSETS/node.png";
import GraphQL from "../ASSETS/gql.png";

function Skills() {
  return (
    <div className="Skills">
      <div>
        <div class="Technologies">
          <h2>Technologies:</h2>
          <h3>Skills</h3>
          <div class="Row1">
            <li>
              <img src={JS} alt="" class="TechImg" /> JavaScript
            </li>
            <li>
              <img src={Python} alt="" class="TechImg" /> Python
            </li>
            <li>
              <img src={CPP} alt="" class="TechImg" /> C++
            </li>
            <li>
              <img src={TS} alt="" class="TechImg" /> TypeScript
            </li>
          </div>
          <div class="Row2">
            <li>
              <img src={ReactLogoIcon} alt="" class="TechImg" /> React
            </li>
            <li>
              <img src={Redux} alt="" class="TechImg" /> Redux
            </li>
            <li>
              <img src={Saas} alt="" class="TechImg" /> Saas
            </li>
            <li>
              <img src={Tailwind} alt="" class="TechImg" /> Tailwind
            </li>
          </div>
          <div class="Row3">
            <li>
              <img src={Next} alt="" class="TechImg" />
              NextJS
            </li>
            <li>
              <img src={GraphQL} alt="" class="TechImg" /> GraphQL
            </li>
            <li>
              <img src={NodeIcon} alt="" class="TechImg" /> NodeJS
            </li>
            <li>
              <img src={ReactLogoIcon} alt="" class="TechImg" /> Native
            </li>
          </div>

          <div className="ResponsiveTech">
            <img src={JS} alt="" class="TechImg" />
            <img src={Python} alt="" class="TechImg" />
            <img src={CPP} alt="" class="TechImg" />
            <img src={TS} alt="" class="TechImg" />
            <img src={ReactLogoIcon} alt="" class="TechImg" />
            <img src={Redux} alt="" class="TechImg" />
            <img src={Saas} alt="" class="TechImg" />
            <img src={Tailwind} alt="" class="TechImg" />
            <img src={Next} alt="" class="TechImg" />
            <img src={GraphQL} alt="" class="TechImg" />
            <img src={NodeIcon} alt="" class="TechImg" />
            <img src={ReactLogoIcon} alt="" class="TechImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
