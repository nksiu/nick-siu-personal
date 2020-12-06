import styled from "styled-components";

const paperSize = "150px";

const IconWrapperSC = styled.div`
  .container {
    display: flex;
    justify-content: center;
  }

  .linked-paper {
    width: ${paperSize};
    height: ${paperSize};
    margin-left: 20px;
  }

  &:hover .linked-paper {
    cursor: pointer;
  }
  
  .email-paper {
    width: ${paperSize};
    height: ${paperSize};
  }

  &:hover .email-paper {
    cursor: pointer;
  }

  .git-paper {
    width: ${paperSize};
    height: ${paperSize};
    margin-right: 20px;
  }

  &:hover .git-paper {
    cursor: pointer;
  }

  .icon {
    padding-top: 50%;
  }

  @media (max-width: 500px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .git-paper {
      margin-right: 0px;
      margin-bottom: 20px;
    }

    .linked-paper {
      margin-left: 0px;
      margin-top: 20px;
    }
  }
`

export default IconWrapperSC;