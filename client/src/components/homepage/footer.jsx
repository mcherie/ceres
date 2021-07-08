import React from "react"
import { styles } from "../../styles"
import ResumePDF from "../../images/cherGRes.pdf"
import SaveTheDate from "../../images/saveTheDate3.jpeg"

export const Footer = () => {
  return (
    <div style={styles.FooterDiv}>
                  <p
        style={{
          fontSize: "1rem",
          display: "inline-block",
          marginRight: "5rem"
        }}><a
          href={SaveTheDate} target="_blank" rel="noopener noreferrer" style={{
            color: "#3f3f3f", // remove this to make it plain white 
            textDecoration: "none",
          }}>Save the Date!</a>
      </p>
            <p
        style={{
          fontSize: "1rem",
          display: "inline-block",
          marginRight: "5rem"
        }}><a
          href={ResumePDF} target="_blank" rel="noopener noreferrer" style={{
            color: "#3f3f3f", // remove this to make it plain white 
            textDecoration: "none",
          }}>Resumé</a>
      </p>
      <p
        style={{
          fontSize: "1rem",
          display: "inline-block",
          marginRight: "5rem"
        }}><a
          href="http://www.github.com/mcherie" target="_blank" rel="noopener noreferrer" style={{
            color: "#3f3f3f", // remove this to make it plain white 
            textDecoration: "none",
          }}>Github</a>
      </p>
        <p
        style={{
          fontSize: "1rem",
          display: "inline-block",
          marginRight: "5rem"
        }}> <a
          href="https://www.linkedin.com/in/cherg/" target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#3f3f3f", // remove this to make it plain white
            textDecoration: "none",
          }}>LinkedIn</a>
      </p>
      {/* &emsp; &emsp;
        <p
        style={{
          fontSize: "1rem",
          display: "inline-block",
        }}><span style={{color: "darkgrey", }}>Blog</span>
      </p> */}
    </div>
  )
}