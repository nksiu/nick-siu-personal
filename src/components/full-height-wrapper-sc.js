import styled from "styled-components";

const FullHeightWrapperSC = styled.div`
  .full-height {
    min-height: 100vh;
    background-color: ${props => props.backGroundColor};
  }

  h1 {
    background-color: ${props => props.backGroundColor};
  }
`

export default FullHeightWrapperSC;