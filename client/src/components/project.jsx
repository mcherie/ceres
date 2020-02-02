import React from "react";
import {styles} from "../styles"

export const Project = (props) => {
  return (
    <div style={styles.ProjectDiv}>

      <p 
        style={{
          // fontFamily: "Raleway",
          fontFamily: "Gudea", 
          paddingLeft: "0.1rem", 
          paddingRight: "0.1rem",
          // color: "#545454",
          // color: "white",
          color: "#3f3f3f",
          marginBottom: "0.7rem",
          fontWeight: "bold"
}}
          >{props.title ? props.title : "Hello"}</p>
      <div
        style={{
          width: "95%", 
          // height: "15rem", 
          height: "55%",
          // position: "relative", 
          // paddingVertical: "0.5rem",
          // paddingHorizontal: "0.5rem",
          // padding: "0 0.5rem 0 0.5rem",
          paddingLeft: "0.45rem",
          paddingRight: "0.45rem",
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
        fontSize: "0.9rem", 
        // paddingHorizontal: "1rem", 
        // paddingLeft: "1rem",
        // paddingRight: "1rem",
        // color: "#676767",
        width: "97%", 
        height: "15%",
        color: "#3f3f3f",
        // color: "white",
        // position: "relative", 
        // paddingVertical: "0.5rem",
        // paddingHorizontal: "0.5rem",
        paddingLeft: "0.4rem",
        // padding: "0 0.5rem 0 0.5rem",
        // marginBottom: "0.5rem",
        // padding: "0.4rem",
        // overflow: "scroll",
        fontFamily: "Gudea",
        }}>
          {props.desc ? props.desc : "Description of the Project"}
      </p>

    </div>
  )
}