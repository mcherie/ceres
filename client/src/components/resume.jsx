import React from "react"
import {styles} from "../styles"
import {useState} from "react"

export const Resume = () => {

  const [res, setRes] = useState("")

  const handleOpenResume = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/resume")
      .then( res => res.json())
      .then( data => setRes(data))
      .catch( err => new Error("Error fetching resume from backend", err))

  }

  return (
    <div style={styles.ResumeDiv}>
      <button 
        style={{
          // textAlign: "left",
          // marginLeft: "5.3rem",
          marginTop: "5rem",
          marginBottom: "3rem",
          fontFamily: "Merienda", 
          fontSize: "2rem",
          textDecorationLine: "underline",
          color: "#3f3f3f",
          alignItems: "left",
        }}
        onClick={handleOpenResume}
        > Open Resume </button>
        <p> {res} </p>
    </div>
  )
}