import React from "react";
import {Link} from "react-scroll"

const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        {/* <Link to={"/"} className="navbar-brand">Nick Siu</Link> */}
        <Link to={"/"} className="navbar-brand" spy={true} smooth={true} duration={1000}>Nick Siu</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <Link to={"/"} className="nav-link">About</Link> */}
              <Link activeClass="active" to={"about"} className="nav-link" spy={true} smooth={true} duration={1000}>About</Link>
            </li>
            <li className="nav-item">
              {/* <Link to={"/experience"} className="nav-link">Experience</Link> */}
              <Link to={"experience"} offset={-100} className="nav-link" spy={true} smooth={true} duration={1000}>Experience</Link>
            </li>
            <li className="nav-item">
              {/* <Link to={"/portfolio"} className="nav-link">Portfolio</Link> */}
              <Link to={"portfolio"} className="nav-link" spy={true} smooth={true} duration={1000}>Portfolio</Link>
            </li>
            <li className="nav-item">
              {/* <Link to={"/contact"} className="nav-link">Contact</Link> */}
              <Link to={"contact"} className="nav-link" spy={true} smooth={true} duration={1000}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Header