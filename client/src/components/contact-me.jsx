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
      <div style={{width: "50rem", paddingLeft: "1rem"}}>
        <form style={{
          textAlign: "left",
          marginLeft: "5.3rem",
        }}>

          <p style={{
            textAlign: "left", fontSize: "1.1rem"
          }}>Name</p>
          <input title="Name" placeholder="Name" style={{width: "10rem", padding: "0.3rem", borderRadius: "3px"}}>
          </input>

          <br />
          <p style={{
            textAlign: "left", fontSize: "1.1rem", bottom: 0
          }}>Email</p>
          <input title="Email" placeholder="Email" style={{width: "10rem", padding: "0.3rem", borderRadius: "3px"}}>
          </input>

          <br />
          <p style={{
            textAlign: "left",
            fontSize: "1.1rem",
          }}>Message</p>
          <div style={{width: "100%",}}>
            <textarea
              title="Message"
              placeholder="Type your message..."
              rows="4"
              style={{
                display: "inline-block", 
                verticalAlign: "bottom", 
                width: "10rem", 
                padding: "0.3rem", 
                borderRadius: "3px"}}>
            </textarea>
            &emsp; &emsp;
            <button
              style={{
                padding: "0.4rem",
                borderRadius: "5px",
                backgroundColor: "#6c6c6c",
                fontSize: "1.1rem",
                display: "inline-block",
                color: "white",
              }}>Send message
          </button>
          </div>

        </form>
      </div>

      <div style={{
        width: "100%", textAlign: "right", paddingTop: "5rem",
      }}>
        <p
          style={{
            fontSize: "0.8rem",
            display: "inline-block"
          }}>Github
        </p>
        &emsp; &emsp; &emsp;
        <p
          style={{
            fontSize: "0.8rem",
            display: "inline-block"
          }}>LinkedIn
        </p>
        &emsp; &emsp; &emsp;
        <p
          style={{
            fontSize: "0.8rem",
            display: "inline-block", paddingRight: "4rem"
          }}>Blog
        </p>
      </div>


    </div>
  )
}