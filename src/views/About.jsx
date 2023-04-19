import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const aboutData = [
    " ✔️ I am a skilled technologist with more than a decade of  experience building modern-day apps for both web and mobile  platforms. My expertise in Node.js, Docker, React, Redux, Graphql, and SQL and NoSQL databases has allowed me to create dynamic and innovative applications that have exceeded my clients expectations.",
    "✔️ What sets me apart from other technologists is my passion for technology and design. As a console gamer, gadget enthusiast, and  computer hobbyist, I have a unique perspective on emerging trends and advancements. I stay up-to-date with the latest technologies and design trends, enabling me to bring fresh ideas and insights to every project.",
    " ✔️ One of my core strengths is my experience with Firebase for architecting real-time web and mobile applications. I am also skilled in DevOps and have worked with a variety of cloud platforms such as GCP, AWS, and Digital Ocean. This ensures that I can manage projects efficiently, effectively, and within budget.",
    "✔️ As a lifelong learner, I am constantly seeking new opportunities to expand my knowledge and skills. I keep up with the latest trends and developments in my field and look for ways to integrate them into my work. I am passionate about growing as a technologist, and I am committed to providing innovative solutions that exceed expectations.",
    " ✔️ In summary, I am a passionate and dedicated technologist with a   proven track record of delivering high-quality results. My expertise in various technologies, passion for technology and  design, and commitment to lifelong learning make me an asset to any project. I am excited about the opportunity to bring my skills and expertise to your team and exceed your expectations.",
  ];

  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            {aboutData.map((data, index) => (
              <p
                key={index}
                className={
                  darkMode
                    ? "mt-4 text-xl text-justify text-gray-500"
                    : "mt-4 text-xl text-justify text-white"
                }
              >
                {data}
              </p>
            ))}
          </motion.div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
