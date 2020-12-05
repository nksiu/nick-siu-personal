import styled from "styled-components";

const LottieWrapperSC = styled.div`
  
  .full-height {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: ${props => `linear-gradient(${props.gradient})`};
    min-height: 100vh;
    z-index: 1;
  }

  .sub {
    position: absolute;
    z-index: 2;
  }
`

export default LottieWrapperSC;