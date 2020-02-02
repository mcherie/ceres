import React from "react"
import {styles} from "../styles"

export const ContactMe = () => {
  return (
    <div style={styles.ContactDiv}>
      <p style={{
        textAlign: "left",
        // marginLeft: "5rem",
        marginTop: "5rem",
        marginBottom: "3rem",
        fontFamily: "Merienda",
        fontSize: "2rem",
        paddingLeft: "5rem",
      }}>contact me</p>

      <div 
        style={{
          // width: "50rem", 
          paddingLeft: "5rem", 
          // marginLeft: "5rem", 
        }}>
        <form style={{
          textAlign: "left",
          // width: "35rem",
        }}>

          <p style={{
            textAlign: "left", 
            fontSize: "1.1rem", 
            marginBottom: 0, 
            fontFamily: "Gudea",
          }}>Name</p>
          <input 
            title="Name" 
            placeholder="Name" 
            style={{
              width: "20rem", 
              padding: "0.5rem", 
              borderRadius: "3px", 
              fontSize: "1rem",
            }}>
          </input>

          <br />
          <p style={{
            textAlign: "left", 
            fontSize: "1.1rem", 
            marginBottom: 0, 
            fontFamily: "Gudea",
          }}>Email</p>
          <input 
            title="Email" 
            placeholder="Email" 
            style={{
              width: "20rem", 
              padding: "0.5rem", 
              borderRadius: "3px",
              fontSize: "1rem",
            }}>
          </input>

          <br />
          <p style={{
            textAlign: "left",
            fontSize: "1.1rem",
            marginBottom: 0,
            fontFamily: "Gudea",
          }}>Message</p>
          <div >
            <textarea
              title="Message"
              placeholder="Type your message..."
              rows="6"
              style={{
                display: "inline-block",
                verticalAlign: "bottom",
                width: "20rem",
                padding: "0.5rem",
                borderRadius: "3px",
                marginTop: "0.2rem",
                fontSize: "1rem",
              }}>
            </textarea>
            &emsp; &emsp;
            <button
              style={{
                padding: "0.4rem",
                borderRadius: "5px",
                backgroundColor: "#545454",
                fontSize: "1.1rem",
                display: "inline-block",
                color: "white",
                fontFamily: "Gudea",
                marginTop: "1rem"
              }}>Send message
          </button>
          </div>

        </form>
      </div>

      <div 
        style={{
          // width: "80%",
          textAlign: "right", 
          paddingTop: "3rem", 
          fontFamily: "Gudea", 
          paddingRight: "5rem", 
          }}>
        <p
          style={{
            fontSize: "1rem",
            display: "inline-block"
          }}>Github
        </p>
        &emsp; &emsp; 
        <p
          style={{
            fontSize: "1rem",
            display: "inline-block"
          }}>LinkedIn
        </p>
        &emsp; &emsp; 
        <p
          style={{
            fontSize: "1rem",
            display: "inline-block", 
          }}>Blog
        </p>
      </div>


    </div>
  )
}