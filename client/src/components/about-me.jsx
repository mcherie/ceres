import React from "react"
import { styles } from "../styles"

export const AboutMe = () => {
  return (
    <div>
      <p style={styles.AboutMeTitle}> Hello, I'm Cher <span>👋</span></p>
      <p style={styles.AboutMeDesc}> This is where the description / introduction about me will go.
      <br /> Chocolates are delicious.
      <br /> Stars are beautiful.
      </p>
    </div>
  )
}