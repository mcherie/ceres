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
                  "value": 20,
                  "density": {
                    "enable": true,
                    "value_area": 120
                  }
              },
              "color": {
                // "value": "#ffffff"
                // "value": "#95c0b3"
                "value": "#b7d4d3"
                // "value": "#282c34"
              },
              "size": {
                  "value": 1.8
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
                "width": 0.8,
                "distance": 95,
                "opacity": 0.7,
                "color": "#b7d4d3", //
                // "color": "#282c34",
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