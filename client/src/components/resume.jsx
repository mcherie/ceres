import React, {useState, useEffect} from "react"
import {styles} from "../styles"
import ResumePDF from "../images/cherg_dev.pdf"
// import { Document } from "react-pdf/dist/entry.webpack"
// import { Document } from "react-pdf/dist/entry.parcel"
import Palolie from "../images/120951738.Palolie.pdf"
import {Document, Page, pdfjs} from "react-pdf"




export const Resume = () => {

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, [0])

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [resume, setResume] = useState(false)

  const handleOpenResume = (e) => {
    e.preventDefault();

    // fetch("http://localhost:9000/resume")
    //   .then(resp => resp.json())
    //   .then(data => setResume(data.express))
    //   // should be receiving pdf image of resume here
    //   .catch(err => new Error("Error fetching resume from backend", err))
    setResume(true)
  }

  return (
    <div style={styles.ResumeDiv}>
      <button
        style={{
          // textAlign: "left",
          // marginLeft: "5.3rem",
          marginTop: "5rem",
          marginBottom: "3rem",
          fontFamily: "Merienda",
          fontSize: "2rem",
          textDecorationLine: "underline",
          color: "#3f3f3f",
          alignItems: "center",
        }}
        onClick={handleOpenResume}
      > Open Resume </button>
      {resume ? <Document file={ResumePDF} style={{marginLeft: "5vh"}}>
        <Page pageNumber={1} />
      </Document> : null}
    </div>
  )
}