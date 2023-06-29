import React from "react";
import "./nav.css";
import { BiHome } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { LuAward } from "react-icons/lu";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsPatchCheckFill />
      </a>
      <a
        href="#achievements"
        onClick={() => setActiveNav("#achievements")}
        className={activeNav === "#achievements" ? "active" : ""}
      >
        <LuAward />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
