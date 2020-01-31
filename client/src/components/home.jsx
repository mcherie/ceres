import React from "react"
import underConstruction from "../images/under-construction.jpg"
// import underConstruction from "../images/under_construction.png"
import { styles } from "../styles"
import Particles from "react-particles-js"


export const Home = () => {
  return (
    <div>
      <Particles 
        params={{
          "particles": {
              "number": {
                  "value": 30,
                  "density": {
                    "enable": true,
                    "value_area": 110
                  }
              },
              "size": {
                  "value": 1
              },
              "shape": {
                "type": "polygon",
                "polygon": {
                  "nb_sides": 5
                }
              },
              "image": {
                "type": "polygon"
              },
              "line_linked": {
                "width": 0.3,
                "distance": 95,
                "opacity": 0.5
              },
              "move": {
                "speed": 2
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          },
          "page backgound": {
            "background-size": "cover"
          }
      }}/>
    </div>
  )
}