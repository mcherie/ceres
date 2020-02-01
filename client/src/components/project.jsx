import React from "react";
import {styles} from "../styles"

export const Project = (props) => {
  return (
    <div style={styles.ProjectDiv}>

      <p 
        style={{
          fontFamily: "Raleway", 
          paddingLeft: "1rem", 
          paddingRight: "1rem"}}
          >{props.title ? props.title : "Hello"}</p>
      <div
        style={{
          width: "95%", 
          // height: "15rem", 
          height: "60%",
          // position: "relative", 
          // paddingVertical: "0.5rem",
          // paddingHorizontal: "0.5rem",
          // padding: "0 0.5rem 0 0.5rem",
          padding: "0.45rem",
          overflow: "hidden",
          }}>
        <img 
          style={{
            width: "100%", 
            // height: "auto", 
            borderRadius: "5px"}} 
          src={props.img ? props.img : null} ></img>
      </div>
      <p style={{
        fontSize: "1rem", 
        paddingHorizontal: "1rem", 
        color: "#676767",
        width: "95%", 
        height: "5%",
        // position: "relative", 
        // paddingVertical: "0.5rem",
        // paddingHorizontal: "0.5rem",
        // padding: "0 0.5rem 0 0.5rem",
        padding: "0.4rem",
        // overflow: "hidden",
        }}>
          {props.desc ? props.desc : "Description of the Project"}
      </p>

    </div>
  )
}