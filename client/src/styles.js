
const HomeDiv = {
  paddingTop: "5rem",
  width: "100%",
  height: "22rem",
}

const AboutMeTitle = {
  color: "grey",
  paddingTop: "4rem",
  fontFamily: "Gudea",
  fontSize: "2rem"
}

const AboutMeDesc = {
  fontFamily: "Gudea",
  fontSize: "1.1rem",
  alignContent: "center",
  paddingLeft: "15rem",
  paddingRight: "15rem",
}

const Navbar = {
  // background: "#C0C0C0",
  background: "#282c34", // original color
  height: "4rem",
  position: "fixed",
  top: 0,
  zIndex: 100,
  opacity: 0.98,
  width: "100%",
  paddingTop: "0.8rem",
  textAlign: "left",
}

const NavbarName = {
  fontFamily: "Merienda One",
  fontSize: "2.5rem",
  marginLeft: "5rem",
}

const ContactDiv = {
  paddingBottom: "1rem",
  justifyContent: "flex-start",
  width: "100%",
}

const PortfolioDiv = {
  justifyContent: "flex-start",
  alignContent: "center",
  paddingLeft: "5rem",
  paddingRight: "5rem",
}

const ProjectDiv = {
  width: "16rem",
  height: "23rem",
  border: "1px solid black",
  display: "inline-block",
  margin: "0.6rem",
  // cursor: "pointer",
  // background: "lightcoral",
  // background: "#D58E84", // lighter touch of orange coral
  // background: "#95c0b3", // medium brightish green
  // background: "#93bebd", // medium bright green teal
  // background: "#b7d4d3", // light brightish green
  // background: "#6ea9a8", // medium brightish teal
  // background: "#C0C0C0",
  // background: "#3f3f3f", // dark grey
  // background: "#6c6c6c", // medium grey
  backgroundColor: "#f1f1f1",
  borderRadius: "5px",
  // color: "black",
  // color: "white",
  // paddingBottom: "1rem",
  verticalAlign: "top", 
  // boxShadow: "0 0 10px 0.2px #696969",
}

export const styles = {
  AboutMeTitle: AboutMeTitle,
  AboutMeDesc,
  Navbar,
  NavbarName,
  ContactDiv,
  ProjectDiv,
  PortfolioDiv,
  HomeDiv
} 