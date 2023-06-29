import React from "react";
import "./header.css";
import HeaderBtn from "./headerButtons";
import ME from "../../assets/pfp.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header loading="lazy">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Avinash Saklani</h1>
        <h5 className="text-light">Computer Science Graduate</h5>
        <HeaderBtn />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="My Profile" />
        </div>
        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
