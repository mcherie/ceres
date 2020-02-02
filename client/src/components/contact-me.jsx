import React from "react"
import {styles} from "../styles"

export const ContactMe = () => {
  return (
    <div style={styles.ContactDiv}>
      <p style={{
        textAlign: "left",
        marginLeft: "5.3rem",
        marginTop: "5rem",
        marginBottom: "2rem",
        fontFamily: "Merienda",
        fontSize: "2rem"
      }}>Contact me</p>
      <div style={{width: "17rem", paddingLeft: "1rem"}}>
        <form >
          <input title="Name" placeholder="Name">
          </input>
          <br />
          <input title="Email" placeholder="Email">
          </input>
          <br />
          <input title="Message" placeholder="Type your message...">
          </input>
          <br />
          <button>Send message</button>
        </form>
      </div>
      <div style={{
        // justifyContent: "flex-start",
        // alignContent: "flex-start",
        // width: "100%",
        // alignContent: "center",
        // display: "inline-block",
        justifyContent: "flex-start",
        width: "100%",
        alignContent: "center",
      }}>
        <text style={{fontSize: "0.8rem", textAlign: "center"}}>chergdev@gmail.com</text>
        <p style={{fontSize: "0.8rem", textAlign: "center"}}>LinkedIn</p>
        <p style={{fontSize: "0.8rem", textAlign: "center"}}>Blog</p>
      </div>


    </div>
  )
}