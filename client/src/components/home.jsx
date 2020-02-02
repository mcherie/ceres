import React from "react"
import Particles from "react-particles-js"
import {styles} from "../styles"


export const Home = () => {
  return (
    <div style={styles.HomeDiv}>
      <Particles 
        params={{
          "particles": {
              "number": {
                  "value": 50,
                  "density": {
                    "enable": true,
                    "value_area": 120
                  }
              },
              "color": {
                // "value": "#ffffff"
                "value": "#95c0b3"
              },
              "size": {
                  "value": 1.2
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