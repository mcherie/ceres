import React from "react";
import {styles} from "../styles"

export const Project = (props) => {
  return (
    <div style={styles.ProjectDiv}>

      <p 
        style={{fontFamily: "Raleway", paddingLeft: "1rem", paddingRight: "1rem"}}>{props.title ? props.title : "Hello"}</p>
      <div
        style={{
          width: "15rem", 
          height: "15rem", 
          // position: "relative", 
          padding: "0 1rem 0 1rem",
          overflow: "hidden",
          }}>
        <img 
          style={{width: "100%", height: "auto", borderRadius: "5px"}} 
          src={props.img ? props.img : null} ></img>
      </div>
      <p style={{
        fontSize: "1rem", 
        padding: "1rem", 
        color: "#676767"
        }}>
          {props.desc ? props.desc : "Description of the Project"}
      </p>

    </div>
  )
}