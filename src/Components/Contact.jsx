import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <h2>Contact Me:</h2>
      <h3>Have An Idea ? Let's Talk 💌</h3>
      <br />
      <br />
      <div className="Socials">
        <a href="https://github.com/StallonesHyper">
          <FaGithub className="Social" id="GitHub"></FaGithub>
        </a>
        {/* </FaGithub> */}
        <a href="mailto:stallonefernandess@gmail.com">
          <HiOutlineMailOpen className="Social" id="Mail"></HiOutlineMailOpen>
        </a>
        {/* </HiOutlineMailOpen> */}
        <a href="https://www.instagram.com/whystallone/">
          {" "}
          <BsInstagram className="Social" id="Instagram"></BsInstagram>
        </a>
        {/* </BsInstagram> */}
        <a href="">
          <BsTwitter className="Social" id="Twitter"></BsTwitter>
        </a>
      </div>
      <div className="Copyright">
        <p>© 2021 Stallone - Proudly Made In 🇮🇳</p>
      </div>
    </div>
  );
}

export default Contact;
