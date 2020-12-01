import styled from "styled-components";
import mountainImage from "../images/mountain.jpg";

const FullHeightWrapperSC = styled.div`
  .full-height {
    min-height: 100vh;
    background-image: ${props => props.id === "about" ? `url(${mountainImage})` : `linear-gradient(${props.gradient})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .date-label {
    color: white;
  }

  .contact-terminal {
    padding-top: 100px;
  }

  .portfolio-title {
    padding-top: 75px;
  }

  h1 {
    color: white;
  }
`

export default FullHeightWrapperSC;