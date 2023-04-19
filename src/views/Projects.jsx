import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
        <Card
            title="Back-end Developer, Accelerator App"
            description=" Designing and developing the APIs to enable communication.
            - Implementing database architecture and managing data flow in the application.
            - Collaborating with the product team to ensure that the application's features are implemented in accordance with the requirements and specifications.
            - Documenting the code, APIs, and database schema to ensure that other team members can easily understand and maintain the application.
            - With the latest technological advancements in the field and implementing them to improve the application's functionality and performance."
            link="https://www.acceleratorapp.co/"
          />
          <Card
            title="Full-stack Developer, iWave"
            description=" Responsible for designing, developing, and maintaining web applications.
            - Created user friendly, responsive, and visually appealing interfaces that are functional and optimized for different devices and screen sizes.
            - The server side logic is optimized for performance, scalability, and security, and that APIs are properly created and managed.
            - Also worked on DevOps, cloud computing, or mobile app development."
            link="https://www.iwave.com/"
          />
          <Card
            title="Javascript Engineer, Tech Achiever"
            description=" Create server side rendered application using Express.js
            - Responsive UI designing using React, material ui and ejs
            - Responsible to manage end to end deliveries of the features through out the engineer life cycle"
            // link=""
          />
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
