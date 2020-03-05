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
        marginLeft: "1.2rem",
        marginTop: "5rem",
        marginBottom: "3rem",
        fontFamily: "Merienda", 
        fontSize: "2rem"
      }}>previous projects</p>
      <Project
        title="BridgeBot"
        img={BridgeBot}
        desc="A web charts visualization app and backend that interacts with Slack API and Firebase."
        tech="React・Redux・Node.js・Express.js・Firestore・Slack API"
        link="https://slackbot-9.netlify.com/"/>
      <Project
        title="Web & mobile banking"
        img={NorthOne}
        desc="Worked at NorthOne to create a banking app for small business, free-lancers, and sole propietors" 
        tech="React・React-Native・Redux・TypeScript・Bitbucket・JIRA"
        link="https://northone.com/"/>
      <Project 
        title="Gamebox"
        img={Wingit}
        desc="A platform that hosts social party games to play with friends" 
        tech="React・Node.js・Express.js・PostgreSQL・Socket.io"
        link="https://gamebox.netlify.com/"/>
      <Project 
        title="Chatty App" 
        img={ChattyApp}
        desc="A chat messenger application built with React and websockets"
        tech="React・Node.js・Express.js・Websockets・Webpack"
        link="https://github.com/mcherie/ChattyApp"/>
      <Project 
        title="Tweeter"
        img={Tweeter}
        desc="A Twitter clone" 
        tech="Ajax・Express.js・jQuery・MongoDB・Node.js・SASS"
        link="https://github.com/mcherie/TweeterProject"/>
      <Project 
        title="Github API search"
        img={Github}
        desc="Allows you to fetch most recent forked repos and pull requests from Github" 
        tech="React・Redux・Github APIs"
        link="https://github.com/mcherie/personal-project-react"/>
      {/* <Project 
        title="Clippit"
        desc="A resource wall where users can share, like, and rate resources" 
        link=""/> */}
      <Project 
        title="TinyURL"
        img={TinyURL}
        desc="An app that shortens long URLs a la bit.ly" 
        tech="Node.js・Express.js"
        link="https://github.com/mcherie/TinyApp_Project"/>
    </div>
  )
}