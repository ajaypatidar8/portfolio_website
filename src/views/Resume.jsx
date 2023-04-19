import React, { useContext, useState, useEffect } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import { windowHandler } from "../utils/windowWidth";
import styles from "./Resume.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [numPages, setNumPages] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1.12);

  useEffect(() => {
    const width = window.innerWidth;
    const pdfWidth = windowHandler(width);
    setWindowWidth(pdfWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div id="resume" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Resume
        </h2>
        <a href="https://raw.githubusercontent.com/ajaypatidar8/portfolio_website/master/src/assets/Ajay_resume.pdf" download="">
            2.Download CV
        </a>
        <Document
          file="https://raw.githubusercontent.com/ajaypatidar8/portfolio_website/master/src/assets/Ajay_resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <div className={styles.pageContainer}>
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                scale={windowWidth}
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default Resume;
