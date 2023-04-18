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
            title="Glints"
            description="Created online talent recruitment and career discovery platform using ReactJS. 
            - Developed a web application that behaves differently for various config subdomain, where each subdomain belonged to a different white label company
            - Tech Stack: ReactJS, MeteorJS, Typescript, Node.js, ES6, ejs, Docker, Rancher, Postgres,ElasticSearch"
            link="https://glints.com/"
          />
          <Card
            title="Paperpile"
            description="Created a ReactJS app that performed easy management of references. 
            - Designed a feature that synced PDFs to Google Drive and cite papers in Google Docs.
            - Tech Stack: ReactJS, React Native,Typescript, GraphQL"
            link="https://paperpile.com/"
          />
          <Card
            title="Santiment"
            description="Created a platform using ReactJS which gives a complete roundup of crypto markets. 
            - Developed web app, and San UI, a component library which was consumed by the Santiment web application.
            - Tech Stack: ReactJS, Redux, Haskell, GraphQL, SCSS, RxJS"
            link="https://santiment.net/"
          />
          <Card
            title="Differchat"
            description="Created an application using ReactJS that helps students view what they have in common, and connect them to start their conversation. 
            - Being a web based, mobile first solution, the app made it easier for the students to always stay connected.
            - Tech Stack: ReactJS, React Native, Typescript, GraphQL,"
            link="https://differ.chat/"
          />
        </div>
        {/* <a
          href="hello"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a> */}
      </div>
    </div>
  );
};

export default Projects;
