import React from "react"
import { styles } from "../styles"

export const AboutMe = () => {
  return (
    <div>
      <p style={styles.AboutMeTitle}> Hello, I'm Cher <span>👋</span></p>
      <p style={styles.AboutMeDesc}> I am a fullstack developer.
      <br /> I'm always interested in learning new things, and have hands on experience in creating, maintaining, and desigining web and mobile applications.
      </p>
    </div>
  )
}