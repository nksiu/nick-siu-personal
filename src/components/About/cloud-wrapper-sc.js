import styled from "styled-components";

const CloudWrapperSC = styled.div`
  .cloud-left {
    position: absolute;
    padding-left: 20px;
    padding-top: 20px;
  }
  
  .cloud-right {
    position: absolute;
    padding-top: 10%;
    right: 10px;
  }

  @media (max-width: 500px) {
    .cloud-right {
      display: none;
    }
  }
`

export default CloudWrapperSC;