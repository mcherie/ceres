import React, {useState} from "react"
import {styles} from "../styles"
import axios from "axios"

export const ContactMe = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmitMsg = (e) => {
    e.preventDefault();

    // fetch("http://localhost:9000/testAPI") // or
    // fetch("https://ceres-api.herokuapp.com/send-message")
    // .then(res => res.json())
    // .then(data => setApiTest(data.express))
    // .catch(err => Error("Error fetching from backend", err))

    axios({
      method: "POST",
      // url: "http://localhost:9000/send-message",
      url: "https://ceres-api.herokuapp.com/send-message",
      data: {
        name: name,
        email: email,
        message: message,
      }
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Email sent")
        setName("")
        setEmail("")
        setMessage("")
      } else if (response.data.msg === "fail") {
        console.log("Error is: ", response.data.errorIs)
        alert ("Please try again")
      }
    })

  }


  return (
    <div style={styles.ContactDiv}>
      <p style={{
        textAlign: "left",
        marginTop: "5rem",
        marginBottom: "3rem",
        fontFamily: "Merienda",
        fontSize: "2rem",
        paddingLeft: "5rem",
      }}>contact me</p>

      <div 
        style={{
          paddingLeft: "5rem", 
        }}>
        <form 
          style={{
          textAlign: "left",
          }}
          onSubmit={handleSubmitMsg}
          method="POST">

          <p style={{
            textAlign: "left", 
            fontSize: "1.1rem", 
            marginBottom: 0, 
            fontFamily: "Gudea",
          }}>Name</p>
          <input 
            title="Name" 
            placeholder="Name" 
            value={name}
            onChange={handleName}
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
            value={email}
            onChange={handleEmail}
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
              value={message}
              onChange={handleMessage}
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

    </div>
  )
}