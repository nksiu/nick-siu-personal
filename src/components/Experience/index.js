import React from "react";
import {createGlobalStyle} from 'styled-components';
import {experiences} from "./content";

// Components
import Card from "./card";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f9de77;
  }
`

const Experience = () => {
  return (
    <div className="container">
      <GlobalStyle />
      {
        experiences.map((experience, i) => (
          <Card experience={experience} isEven={i%2 === 0}/>
        ))
      }
    </div>
  )
}

export default Experience