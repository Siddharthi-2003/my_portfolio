import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavbarProfile from "./NavbarProfile";

const TimelineCard = ({ color = "red", title, children, date }) => {
  const bgColor = color === "red" ? "bg-red-900 text-white" : "bg-gray-200 text-gray-900";
  
  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${bgColor} ${
        color === "red" ? "hover:bg-red-700 hover:shadow-2xl cursor-pointer" : "hover:shadow-2xl cursor-pointer"
      }`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
  y: -10, 
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
  transition: { duration: 0.3 }
}}
    >
      <div className="font-bold text-lg mb-2">{title}</div>
      <div className="text-sm leading-relaxed mb-3">{children}</div>
      {date && <div className="text-xs opacity-75 mt-4">{date}</div>}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarProfile />
      <div className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Me</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I am <strong>Siddharthi Saha</strong>, a passionate individual with expertise in{" "}
            <strong>web development</strong>, <strong>blockchain technology</strong>, and{" "}
            <strong>core electronics engineering</strong>. Currently, I am pursuing a Bachelor of
            Technology in Electrical Engineering with a minor in Electronics and Communication
            Engineering at IIT (ISM) Dhanbad. I am committed to innovation and delivering impactful
            solutions through technical excellence.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-extrabold text-gray-100 mb-12 text-center">Experience & Expertise</h2>
          
          <div className="relative">
            {/* Vertical line on the left */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white to-gray-500" />

            <div className="grid grid-cols-1 gap-8 md:gap-12 md:pl-8">
              {/* Timeline cards */}
              <div className="space-y-8">
                <TimelineCard
                  color="red"
                  title="Web Development Strengths"
                  date="Internships & Projects"
                >
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Expert in HTML, CSS, JavaScript, React, and Material-UI</li>
                    <li>Internships at Sparks Foundation and Tech Alpha</li>
                    <li>Built banking systems & dynamic food-ordering platforms</li>
                    <li>Bootstrap, Node.js, MySQL, and responsive design</li>
                  </ul>
                </TimelineCard>

                <TimelineCard
                  color="gray"
                  title="Technical Toolkit"
                  date="Core Competencies"
                >
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>Languages:</strong> C++, Python, JavaScript, PHP</li>
                    <li><strong>Frameworks:</strong> React, Bootstrap, Node.js, Material-UI, OpenCV</li>
                    <li><strong>Tools:</strong> GitHub, ROS1, Gazebo, Linux, Firebase</li>
                    <li><strong>Hardware:</strong> Raspberry Pi, Arduino</li>
                  </ul>
                </TimelineCard>

                <TimelineCard
                  color="red"
                  title="Additional Highlights"
                  date="Recognition & Community"
                >
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>2nd place at <strong>Concetto</strong> (IIT ISM Dhanbad tech fest)</li>
                    <li>Active problem-solver on LeetCode & GeeksForGeeks</li>
                    <li>Member of <strong>Roboism</strong> robotics club</li>
                    <li>Content contributor for <strong>Kartavya</strong> nonprofit</li>
                  </ul>
                </TimelineCard>

                <TimelineCard
                  color="gray"
                  title="Blockchain Technology Expertise"
                  date="Real-Time Solutions"
                >
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Real-time data solutions using blockchain</li>
                    <li>Cryptocurrency price tracker with CoinGecko API</li>
                    <li>Chart.js and Context API integration</li>
                    <li>User-oriented applications with emerging tech</li>
                  </ul>
                </TimelineCard>

                <TimelineCard
                  color="red"
                  title="Core Electronics & Embedded Systems"
                  date="Innovation Projects"
                >
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Strong foundation in core electronics</li>
                    <li>Embedded systems & microcontrollers</li>
                    <li>Low-cost heart rate monitoring system</li>
                    <li>Autonomous quadcopter with GPS-denied navigation</li>
                  </ul>
                </TimelineCard>

                <TimelineCard
                  color="gray"
                  title="My Vision"
                  date="Future Goals"
                >
                  <p className="text-sm leading-relaxed">
                    I am excited to leverage my skills in web development, blockchain, and core electronics to
                    create meaningful and impactful solutions. Explore my projects and experiences in the work section below.
                  </p>
                </TimelineCard>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-6 mt-16"
        >
          {/* <Link
            to="/achievements"
            className="px-6 py-3 bg-red-900 text-white rounded-lg font-semibold hover:bg-red-800 transition-colors"
          >
            Achievements
          </Link> */}
          {/* <Link
            to="/work"
            className="px-6 py-3 border-2 border-red-900 text-red-300 rounded-lg font-semibold hover:bg-red-900 hover:text-white transition-colors"
          >
            Portfolio
          </Link> */}
        </motion.div>

        {/* Floating avatar box */}
        <div className="fixed bottom-4 right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden shadow-2xl bg-white hidden sm:block border-4 border-red-900">
          <img
            src="/profiles/avatar1.png"
            alt="Siddharthi"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
              e.target.style.display = "none";
            }}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
