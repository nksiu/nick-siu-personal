import React, {useState} from "react";

// Components
import {Paper} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

// Animations and Styling
import {Fade, Flip} from "react-reveal";
import Lottie from "react-lottie";
import animationData from "../../Lottie/rocket.json";
import LottieWrapperSC from "../../Lottie/lottie-wrapper-sc";
import IconWrapperSC from "./icon-wrapper-sc";

const gradient = "#8360c3, #8A2387, #E94057, #F27121";

const Contact = () => {
  const [flipGit, setFlipGit] = useState({
    flip: true,
    side: true
  });

  const handleGitFlip = () => {
    setFlipGit({...flipGit, flip: false});
    setTimeout(() => {
      setFlipGit({...flipGit, flip: false});
      setFlipGit({...flipGit, side: !flipGit.side});
    }, 1000);
  };

  const [flipLinked, setFlipLinked] = useState({
    flip: true,
    side: true
  });

  const handleLinkedFlip = () => {
    setFlipLinked({...flipLinked, flip: false});
    setTimeout(() => {
      setFlipLinked({...flipLinked, flip: false});
      setFlipLinked({...flipLinked, side: !flipLinked.side});
    }, 1000);
  };

  const [flipEmail, setFlipEmail] = useState({
    flip: true,
    side: true
  });

  const handleEmailFlip = () => {
    setFlipEmail({...flipEmail, flip: false});
    setTimeout(() => {
      setFlipEmail({...flipEmail, flip: false});
      setFlipEmail({...flipEmail, side: !flipEmail.side});
    }, 1000);
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <LottieWrapperSC id="contact" gradient={gradient}>
      <div className="full-height">
        <IconWrapperSC className="sub" gitFlipStatus={flipGit}>
          <div className="container">
            <Fade delay={6000}>
              <Flip when={flipGit.flip}>
                <Paper elevation={3} className="git-paper" onClick={handleGitFlip}>
                  {
                    flipGit.side ?
                      <div className="container">
                        <div className="icon">
                          <GitHubIcon fontSize="large"/>
                        </div>
                      </div>
                    :
                      <div className="container">
                        <div className="icon">
                          <a href="https://github.com/nksiu" target="_blank" rel="noopener noreferrer">nksiu</a>
                        </div>
                      </div>
                  }
                </Paper>
              </Flip>
              <Flip when={flipEmail.flip}>
                <Paper elevation={3} className="email-paper" onClick={handleEmailFlip}>
                  {
                    flipEmail.side ?
                      <div className="container">
                        <div className="icon">
                          <EmailIcon fontSize="large"/>
                        </div>
                      </div>
                    :
                      <div className="container">
                        <div className="icon">
                          <a href="mailto:ncyk.siu@gmail.com" target="_blank" rel="noopener noreferrer">ncyk.siu@gmail.com</a>
                        </div>
                      </div>
                  }
                </Paper>
              </Flip>
              <Flip when={flipLinked.flip}>
                <Paper elevation={3} className="linked-paper" onClick={handleLinkedFlip}>
                  {
                    flipLinked.side ?
                      <div className="container">
                        <div className="icon">
                          <LinkedInIcon fontSize="large"/>
                        </div>
                      </div>
                    :
                      <div className="container">
                        <div className="icon">
                          <a href="https://www.linkedin.com/in/nicholas-siu-409483182/" target="_blank" rel="noopener noreferrer">Nick Siu</a>
                        </div>
                      </div>
                  }
                </Paper>
              </Flip>
            </Fade>
          </div>
        </IconWrapperSC>
        <div className="lottie-anim">
          <Lottie
            options={defaultOptions}
            height={window.innerHeight}
          />
        </div>
      </div>
    </LottieWrapperSC>
  )
}

export default Contact
