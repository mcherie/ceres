import React from "react";
import {Project} from "./project"
import {styles} from "../styles"
import BridgeBot from "../images/bridgebot.png"
import NorthOne from "../images/northone.png"
import Wingit from "../images/wingit.png"
import ChattyApp from "../images/chatty-app.png"
import Tweeter from "../images/tweeter.png"
import TinyURL from "../images/tiny-url.png"

export const Portfolio = () => {
  return (
    <div style={styles.PortfolioDiv}>
      <p style={{
        textAlign: "left",
        marginLeft: "5rem",
        fontFamily: "Merienda", 
        fontSize: "2rem"
      }}>previous projects</p>
      <Project
        title="BridgeBot"
        img={BridgeBot}
        desc="A web application that takes poll information and presents charts visualization results, and backend that interacts with Slack API and Firebase" />
      <Project
        title="NorthOne web and mobile banking"
        img={NorthOne}
        desc="A banking app catered to make small business, free-lancers, or sole propietors bank easier" />
      <Project 
        title="Gamebox"
        img={Wingit}
        desc="A platform that hosts social party games to play with friends" />
      <Project 
        title="Chatty App" 
        img={ChattyApp}
        desc="A chat messenger application built in React and Wbsockets"/>
      <Project 
        title="Tweeter"
        img={Tweeter}
        desc="A Twitter clone" />
      <Project 
        title="TinyURL"
        img={TinyURL}
        desc="An app that shortens long URLs a la bit.ly" />
      <Project title="Clippit" />
    </div>
  )
}