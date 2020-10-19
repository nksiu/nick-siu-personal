import styled from "styled-components";

const CardButtonWrapperSC = styled.div`
  padding-top: ${props => props.hasButtons ? "10px" : "0px"};
  display: flex;
  flex-direction: row;

  @media (min-width: 400px) {
    .source-btn {
      padding-left: 10px;
    }
  }

  @media (max-width: 375px) {
    flex-direction: column;
    .source-btn {
      padding-top: 10px;
      padding-right: 10px;
    }
  }
`
export default CardButtonWrapperSC