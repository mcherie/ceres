import React from "react";
import {Project} from "./project"
import {styles} from "../styles"
import BridgeBot from "../images/bridgebot.png"
import NorthOne from "../images/northone.png"
import Wingit from "../images/wingit.png"
import ChattyApp from "../images/chatty-app.png"
import Tweeter from "../images/tweeter.png"
import TinyURL from "../images/tiny-url.png"
import Github from "../images/github-search.png"

export const Portfolio = () => {
  return (
    <div style={styles.PortfolioDiv}>
      <p style={{
        textAlign: "left",
        marginLeft: "5.3rem",
        marginTop: "5rem",
        marginBottom: "4rem",
        fontFamily: "Merienda", 
        fontSize: "2rem"
      }}>previous projects</p>
      <Project
        title="BridgeBot"
        img={BridgeBot}
        desc="A web charts visualization app, and interacts with Slack API and Firebase" />
      <Project
        title="Web & mobile banking"
        img={NorthOne}
        desc="NorthOne banking app for small business, free-lancers, or sole propietors" />
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
        title="Github API search"
        img={Github}
        desc="Allows you to fetch most recent forked repos and pull requests from Github" />
      <Project 
        title="Clippit"
        desc="A resource wall where users can share, like, and rate resources." />
      <Project 
        title="TinyURL"
        img={TinyURL}
        desc="An app that shortens long URLs a la bit.ly" />
    </div>
  )
}