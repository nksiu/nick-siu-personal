import React, {useState, useEffect} from "react";
import {Link} from "react-scroll";
import HeaderWrapperSC from "./header-wrapper-sc";

const offsetHeight = -56;
const portOffset = -6;

const Header = () => {

  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

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
    <HeaderWrapperSC scrollDir={scrollDir}>
      <nav id="navHeader" className={`navbar navbar-expand-lg fixed-top navbar-light bg-light ${scrollDir === "down" ? "not-visible" : ""}`}>
        <Link to={"about"} className="navbar-brand" spy={true} smooth={true} duration={1000}><strong>Nick Siu</strong></Link>
        <button className="navbar-toggler" type="button" onClick={handleClick} data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse collapse ${isToggled}`} id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"about"} className="nav-link" onClick={handleItemClick} smooth={true} duration={1000}>About</Link>
            </li>
            <li className="nav-item">
              <Link to={"experience"} className="nav-link" onClick={handleItemClick} offset={offsetHeight} smooth={true} duration={1000}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link to={"portfolio"} className="nav-link" onClick={handleItemClick} offset={portOffset} smooth={true} duration={1000}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to={"contact"} className="nav-link" onClick={handleItemClick} smooth={true} duration={1000}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderWrapperSC>
  )
}

export default Header