import React from "react";
import {Rotate} from "react-reveal";

const Card = ({experience, isEven}) => {
  return (
    <div>
      {
        isEven ?
          <Rotate top left>
            <div>
                <div class="card text-white bg-info mb-3">
                  <div class="card-header">{experience.company}</div>
                    <div class="card-body">
                      {experience.title ? <h4 class="card-title">{experience.title}</h4> : null}
                        <p class="card-text">
                          {experience.description}
                        </p>
                    </div>
                </div>
            </div>
          </Rotate>
        :
          <Rotate bottom right>
            <div>
                <div class="card text-white bg-info mb-3">
                  <div class="card-header">{experience.company}</div>
                    <div class="card-body">
                      {experience.title ? <h4 class="card-title">{experience.title}</h4> : null}
                        <p class="card-text">
                          {experience.description}
                        </p>
                    </div>
                </div>
            </div>
          </Rotate>
      }
    </div>
  )
}

export default Card