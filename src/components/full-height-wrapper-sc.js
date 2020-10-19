import styled from "styled-components";
import mountainImage from "../images/mountain.jpg";

const FullHeightWrapperSC = styled.div`
  .full-height {
    min-height: 100vh;
    background-image: ${props => props.id === "about" ? `url(${mountainImage})` : null};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${props => props.backGroundColor};
  }

  h1 {
    background-color: ${props => props.backGroundColor};
    padding-top: 15px;
  }
`

export default FullHeightWrapperSC;