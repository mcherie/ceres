import React from "react"
import {styles} from "../styles"

export const Resume = () => {
  return (
    <div style={styles.ResumeDiv}>
      <p style={{
          // textAlign: "left",
          // marginLeft: "5.3rem",
          marginTop: "5rem",
          marginBottom: "3rem",
          fontFamily: "Merienda", 
          fontSize: "2rem",
          textDecorationLine: "underline",
          color: "#3f3f3f",
          alignItems: "left",
        }}> Open Resume</p>
    </div>
  )
}