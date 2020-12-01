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

  .portfolio-title {
    padding-top: 50px;
  }

  h1 {
    color: white;
  }
`

export default FullHeightWrapperSC;