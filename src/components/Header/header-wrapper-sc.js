import styled from "styled-components";

const HeaderWrapperSC = styled.div`

  .nav-item .nav-link {
    color: black;
  }

  &:hover .nav-item {
    cursor: pointer;
  }

  #navHeader {
    opacity: 1;
    transition: opacity .5s .25s ease-out;
  }

  #navHeader.not-visible {
    opacity: 0;
  }
`

export default HeaderWrapperSC;