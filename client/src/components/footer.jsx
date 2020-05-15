import React from "react"
import { styles } from "../styles"
import ResumePDF from "../images/cherg_dev.pdf"

export const Footer = () => {
  return (
    <div style={styles.FooterDiv}>
            <p
        style={{
          fontSize: "1rem",
          display: "inline-block",
        }}><a
          href={ResumePDF} target="_blank" rel="noopener noreferrer" style={{
            color: "#3f3f3f", // remove this to make it plain white 
            textDecoration: "none",
          }}>Resumé</a>
      </p>
      &emsp; &emsp;
      <p
        style={{
          fontSize: "1rem",
          display: "inline-block",
        }}><a
          href="http://www.github.com/mcherie" target="_blank" rel="noopener noreferrer" style={{
            color: "#3f3f3f", // remove this to make it plain white 
            textDecoration: "none",
          }}>Github</a>
      </p>
      &emsp; &emsp;
        <p
        style={{
          fontSize: "1rem",
          display: "inline-block",
        }}> <a
          href="https://www.linkedin.com/in/cherg/" target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#3f3f3f", // remove this to make it plain white
            textDecoration: "none",
          }}>LinkedIn</a>
      </p>
      &emsp; &emsp;
        <p
        style={{
          fontSize: "1rem",
          display: "inline-block",
        }}><span style={{color: "darkgrey", }}>Blog</span>
      </p>
    </div>
  )
}