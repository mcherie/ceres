import React from "react"
import { styles } from "../styles"

export const AboutMe = () => {
  return (
    <div 
      style={{  
        display: "flex",
        flexDirection: "column",
      }}>
      <p style={styles.AboutMeTitle}> Hello, I'm Cher <span>👋</span></p>
      <p style={styles.AboutMeDesc}> I am a fullstack developer who is always interested in learning new things.
      <br /> I have experience in creating, maintaining, and desigining web and mobile applications.
      </p>
    </div>
  )
}