import React from "react";
import {styles} from "../styles"

export const Project = (props) => {
  
  return (
    <div style={styles.ProjectDiv}
          onClick={() => window.open(props.link, "_blank")}>

      <p 
        style={{
          fontFamily: "Gudea", 
          paddingLeft: "0.1rem", 
          paddingRight: "0.1rem",
          color: "#3f3f3f",
          marginBottom: "0.7rem",
          fontWeight: "bold"
}}
          >{props.title ? props.title : "Hello"}</p>
      <div
        style={{
          width: "95%", 
          height: "55%",
          paddingLeft: "0.45rem",
          paddingRight: "0.45rem",
          overflow: "hidden",
          }}>
        <img 
          style={{
            width: "100%", 
            borderRadius: "5px"}} 
          src={props.img ? props.img : null} 
          alt=""></img>
      </div>
      <p style={{
        fontSize: "0.9rem", 
        width: "97%", 
        height: "15%",
        color: "#3f3f3f",
        paddingLeft: "0.4rem",
        fontFamily: "Gudea",
        }}>
          {props.desc ? props.desc : "Description of the Project"}
      </p>

    </div>
  )
}