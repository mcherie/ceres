import React from "react"
import { styles } from "../styles"

export const AboutMe = () => {
  return (
    <div>
      <p style={styles.AboutMeTitle}> Hello, I'm Cher <span>👋</span></p>
      <p style={styles.AboutMeDesc}> I am a fullstack developer.
      <br /> Chocolates are delicious.
      <br /> Stars are beautiful.
      </p>
    </div>
  )
}