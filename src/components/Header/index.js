import React from "react";
import {Link} from "react-scroll"

const offsetHeight = -48;

const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <Link to={"about"} className="navbar-brand" type="button" spy={true} smooth={true} duration={1000}>Nick Siu</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"about"} className="nav-link" type="button" spy={true} smooth={true} duration={1000}>About</Link>
            </li>
            <li className="nav-item">
              <Link to={"experience"} className="nav-link" offset={offsetHeight} type="button" spy={true} smooth={true} duration={1000}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link to={"portfolio"} className="nav-link" offset={offsetHeight} type="button" spy={true} smooth={true} duration={1000}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to={"contact"} className="nav-link" type="button" spy={true} smooth={true} duration={1000}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Header