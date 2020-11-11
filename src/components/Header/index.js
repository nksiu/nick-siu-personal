import React, {useState} from "react";
import {Link} from "react-scroll";
import HeaderWrapperSC from "./header-wrapper-sc"

const offsetHeight = -48;

const Header = () => {
  const [isToggled, setToggled] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (!isToggled) {
      setToggled("show");
    } else {
      setToggled("");
    }
  }
  const handleItemClick = (e) => {
    e.preventDefault()
    setToggled("");
  }

  return (
    <HeaderWrapperSC>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <Link to={"about"} className="navbar-brand" spy={true} smooth={true} duration={1000}>Nick Siu</Link>
        <button className="navbar-toggler" type="button" onClick={handleClick} data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse collapse ${isToggled}`} id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"about"} className="nav-link" onClick={handleItemClick} spy={true} smooth={true} duration={1000}>About</Link>
            </li>
            <li className="nav-item">
              <Link to={"experience"} className="nav-link" onClick={handleItemClick} offset={offsetHeight} spy={true} smooth={true} duration={1000}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link to={"portfolio"} className="nav-link" onClick={handleItemClick} offset={offsetHeight} spy={true} smooth={true} duration={1000}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to={"contact"} className="nav-link" onClick={handleItemClick} spy={true} smooth={true} duration={1000}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderWrapperSC>
  )
}

export default Header