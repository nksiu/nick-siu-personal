import styled from "styled-components";

const CardButtonWrapperSC = styled.div`
  padding-top: ${props => props.hasButtons ? "10px" : "0px"};

  .source-btn {
    padding-left: 10px;
  }
`
export default CardButtonWrapperSC