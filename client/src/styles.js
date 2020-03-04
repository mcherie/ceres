
const HomeDiv = {
  paddingTop: "5rem",
  width: "100%",
  // height: "22rem",
  position: "fixed",
  top: 0,
  zIndex: -1,
}

const AboutMeTitle = {
  color: "grey",
  // paddingTop: "4rem",
  paddingTop: "28rem",
  fontFamily: "Gudea",
  fontSize: "1.8rem",
}

const AboutMeDesc = {
  fontFamily: "Gudea",
  fontSize: "1.1rem",
  alignContent: "center",
  paddingLeft: "20rem",
  paddingRight: "20rem",
  color: "#3f3f3f", // remove this to make it plain white
}

const Navbar = {
  // background: "#b7d4d3", // dufault teal?
  // background: "#282c34", // original color
  // backgroundColor: "#dbe9e9", // very very light pastel teal
  backgroundColor: "#cee8e3",
  height: "4.5rem",
  position: "fixed",
  top: 0,
  zIndex: 100,
  opacity: 0.98,
  width: "100%",
  paddingTop: "0.7rem",
  textAlign: "left",
}

const NavbarName = {
  fontFamily: "Merienda One",
  fontSize: "3rem",
  marginLeft: "10rem",
  color: "#3f3f3f", // remove this to make it plain white
}

const ContactDiv = {
  paddingBottom: "1rem",
  justifyContent: "flex-start",
  width: "100%",
  color: "#3f3f3f", // remove this to make it plain white
  // alignContent: "center",
}

const PortfolioDiv = {
  justifyContent: "flex-start",
  alignContent: "center",
  paddingLeft: "5rem",
  paddingRight: "5rem",
  color: "#3f3f3f", // remove this to make it plain white
}

const ResumeDiv = {
  // justifyContent: "flex-start",
  // alignContent: "center",
  // paddingLeft: "5rem",
  // paddingRight: "5rem",
  // color: "#3f3f3f",
  alignContent: "left",
}

const ProjectDiv = {
  width: "16rem",
  height: "23rem",
  // border: "1px solid black",
  border: "1px solid white",
  display: "inline-block",
  margin: "0.6rem",
  cursor: "pointer",
  // background: "lightcoral",
  // background: "#D58E84", // lighter touch of orange coral
  // background: "#95c0b3", // medium brightish green
  // background: "#93bebd", // medium bright green teal
  // background: "#b7d4d3", // light brightish green
  // background: "#6ea9a8", // medium brightish teal
  // background: "#C0C0C0",
  // background: "#3f3f3f", // dark grey
  // background: "#6c6c6c", // medium grey
  // backgroundColor: "#f1f1f1", // chosen one
  // backgroundColor: "#dbe9e9", // very light teal - default?
  background: "#cee8e3", // good
  borderRadius: "5px",
  // color: "black",
  // color: "white",
  // paddingBottom: "1rem",
  verticalAlign: "top", 
  // boxShadow: "0 0 10px 0.2px #696969",
}

const FooterDiv = {
  fontFamily: "Gudea",
  paddingTop: "2rem",
  paddingBottom: "1.5rem",
  display: "flex",
  justifyContent: "flex-end",
}

export const styles = {
  AboutMeTitle: AboutMeTitle,
  AboutMeDesc,
  Navbar,
  NavbarName,
  ContactDiv,
  ProjectDiv,
  PortfolioDiv,
  HomeDiv,
  ResumeDiv,
  FooterDiv
} 