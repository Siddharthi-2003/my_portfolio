import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavbarProfile from "./NavbarProfile";

const TimelineCard = ({ color = "red", title, children, date, icon }) => {
  const bgColor = color === "red" ? "bg-red-900 text-white" : "bg-gray-200 text-gray-900";
  
  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${bgColor} ${
        color === "red" ? "hover:bg-red-700 hover:shadow-2xl cursor-pointer" : "hover:shadow-2xl cursor-pointer"
      }`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <div className="font-bold text-lg">{title}</div>
      </div>
      <div className="text-sm leading-relaxed mb-3">{children}</div>
      {date && <div className="text-xs opacity-75 mt-4 italic">{date}</div>}
    </motion.div>
  );
};

const ProjectCard = ({ title, tech, description, highlights, color = "red" }) => {
  const bgColor = color === "red" ? "bg-gradient-to-br from-red-900 to-red-800" : "bg-gradient-to-br from-gray-800 to-gray-700";
  
  return (
    <motion.div
      className={`${bgColor} p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-700`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="text-xs text-gray-300 mb-3 font-mono">{tech}</div>
      <p className="text-sm text-gray-200 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {highlights.map((item, idx) => (
          <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
            <span className="text-red-400 mt-1">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
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
              I am <strong>Siddharthi Saha</strong>, a passionate <strong>Software Developer</strong> specializing in{" "}
              <strong>React/Frontend development</strong>, <strong>blockchain technology</strong>, and{" "}
              <strong>embedded systems</strong>. Currently working at <strong>LTIMindtree</strong> on the Blueverse Agentic AI platform, 
              and a recent graduate from IIT (ISM) Dhanbad with a B.Tech in Electrical Engineering.
            </p>
          </motion.div>

          {/* Professional Experience Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-extrabold text-white mb-8 text-center flex items-center justify-center gap-3">
              <span>💼</span> Professional Experience
            </h2>
            
            <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 p-8 rounded-2xl shadow-2xl border border-red-700">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Software Developer (React/Frontend)</h3>
                  <p className="text-red-200 text-lg">LTIMindtree - Blueverse Platform</p>
                </div>
                <div className="text-gray-300 text-sm mt-2 md:mt-0">July 2025 – Present | Hyderabad, India</div>
              </div>
              
              <div className="space-y-4 mt-6">
                <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">🚀 Blueverse Agentic Foundry</h4>
                  <p className="text-gray-200 text-sm">Lead frontend developer for the core "Foundry" module - an agentic AI creation platform enabling enterprises to build, deploy, and govern autonomous AI agents.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">⚡ Performance Optimization</h4>
                    <p className="text-gray-200 text-sm">Improved TTI by 60% through windowing implementation for 1000+ AI agents marketplace view.</p>
                  </div>
                  
                  <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">🎯 Complex State Management</h4>
                    <p className="text-gray-200 text-sm">Built drag-and-drop Agent Builder UI with React Flow and Redux Toolkit, reducing creation time by 40%.</p>
                  </div>
                </div>
                
                <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">🔧 Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["React", "Redux Toolkit", "React Flow", "React Hook Form", "AWS Bedrock", "GraphQL", "REST APIs"].map(tech => (
                      <span key={tech} className="bg-red-700 text-white text-xs px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-extrabold text-white mb-8 text-center flex items-center justify-center gap-3">
              <span>🛠️</span> Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="TradeStream: High-Frequency Crypto Dashboard"
                tech="React, WebSockets, Tailwind, Web Workers"
                description="Real-time analytics dashboard visualizing 50+ concurrent crypto assets with sub-second updates."
                highlights={[
                  "Solved stale closure bug using useRef for WebSocket state management",
                  "Offloaded data transformation to Web Workers preventing UI freeze",
                  "Implemented 60fps throttle for visual stability during high volatility",
                  "Handles high-frequency data streams without UI tearing"
                ]}
                color="red"
              />
              
              <ProjectCard
                title="TaskGrid: Collaborative Kanban Board"
                tech="React, Firebase, Material UI, React DnD"
                description="Trello-style collaborative task manager with real-time features and drag-and-drop functionality."
                highlights={[
                  "Implemented Optimistic Concurrency Control for race conditions",
                  "Fixed memory leaks with proper AbortController cleanup",
                  "Custom usePreservedState hook for LocalStorage persistence",
                  "Live presence indicators and nested subtask support"
                ]}
                color="gray"
              />
              
              <ProjectCard
                title="Autonomous Quadcopter"
                tech="Raspberry Pi, PX4 Autopilot, OpenCV, MAVSDK, TfLite"
                description="Autonomous drone system with GPS-denied navigation capabilities."
                highlights={[
                  "ArUco tag detection achieving 20% accuracy improvement",
                  "MAVSDK-based Python scripts for autonomous navigation",
                  "Object manipulation in GPS-denied environments",
                  "Advanced robotics and control systems integration"
                ]}
                color="red"
              />
              
              <ProjectCard
                title="Low-Cost Heart Rate Monitor"
                tech="Arduino, Embedded C, Sensor Integration"
                description="Affordable heart rate monitoring system using embedded electronics."
                highlights={[
                  "Cost-effective solution for health monitoring",
                  "Real-time sensor data processing",
                  "Microcontroller-based implementation",
                  "User-friendly interface design"
                ]}
                color="gray"
              />
            </div>
          </motion.div>

          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-12 text-center flex items-center justify-center gap-3">
              <span>⚡</span> Skills & Expertise
            </h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-white to-gray-500" />

              <div className="grid grid-cols-1 gap-8 md:gap-12 md:pl-8">
                <div className="space-y-8">
                  <TimelineCard
                    color="red"
                    title="Frontend Development Mastery"
                    icon="💻"
                    date="Production Experience"
                  >
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Advanced React patterns: Hooks, Context API, Custom Hooks</li>
                      <li>State Management: Redux Toolkit, Zustand</li>
                      <li>Performance: Code splitting, lazy loading, memoization</li>
                      <li>UI Libraries: Material-UI, Tailwind CSS, Bootstrap</li>
                      <li>Real-time: WebSockets, Server-Sent Events</li>
                    </ul>
                  </TimelineCard>

                  <TimelineCard
                    color="gray"
                    title="Backend & Cloud Technologies"
                    icon="☁️"
                    date="Full-Stack Capabilities"
                  >
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Node.js, Express.js for REST APIs</li>
                      <li>Firebase, MySQL databases</li>
                      <li>Azure Cloud: Cognitive Services, OpenAI integration</li>
                      <li>AWS Bedrock, Vector Databases</li>
                      <li>GraphQL and REST API design</li>
                    </ul>
                  </TimelineCard>

                  <TimelineCard
                    color="red"
                    title="AI & Machine Learning"
                    icon="🤖"
                    date="Emerging Technologies"
                  >
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Generative AI: OpenAI API, Azure OpenAI</li>
                      <li>TensorFlow Lite for edge computing</li>
                      <li>Computer Vision with OpenCV</li>
                      <li>MLOps: Docker, Model Deployment</li>
                      <li>AI Agent development and orchestration</li>
                    </ul>
                  </TimelineCard>

                  <TimelineCard
                    color="gray"
                    title="Embedded Systems & Robotics"
                    icon="🔧"
                    date="Hardware Integration"
                  >
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Raspberry Pi, Arduino microcontrollers</li>
                      <li>ROS1 (Robot Operating System), Gazebo simulation</li>
                      <li>PX4 Autopilot, MAVSDK programming</li>
                      <li>Sensor integration and real-time processing</li>
                      <li>Member of Roboism robotics club at IIT ISM</li>
                    </ul>
                  </TimelineCard>

                  <TimelineCard
                    color="red"
                    title="Achievements & Recognition"
                    icon="🏆"
                    date="Competitive Excellence"
                  >
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>2nd place at Concetto (IIT ISM Dhanbad tech fest)</li>
                      <li>80%+ problem-solving completion on LeetCode & GeeksForGeeks</li>
                      <li>Certifications: Azure AI, CSS, Java, C++, Analytical Thinking</li>
                      <li>Content contributor for Kartavya nonprofit</li>
                      <li>Active open-source contributor on GitHub</li>
                    </ul>
                  </TimelineCard>

                  <TimelineCard
                    color="gray"
                    title="My Vision"
                    icon="🎯"
                    date="Future Goals"
                  >
                    <p className="text-sm leading-relaxed">
                      I'm passionate about building scalable, performant applications that solve real-world problems. 
                      My expertise spans from low-level embedded systems to cutting-edge AI platforms. I thrive in 
                      environments that challenge me to learn continuously and create innovative solutions at the 
                      intersection of hardware, software, and AI.
                    </p>
                  </TimelineCard>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Technical Arsenal</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { category: "Languages", items: ["C++", "Python", "JavaScript", "PHP", "HTML/CSS"] },
                { category: "Frameworks", items: ["React.js", "Node.js", "Redux", "Material-UI", "Tailwind"] },
                { category: "Tools", items: ["Git/GitHub", "Docker", "Linux", "VS Code", "Firebase"] },
                { category: "AI/ML", items: ["OpenAI", "Azure AI", "TensorFlow", "OpenCV", "MLOps"] }
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 hover:border-red-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="font-bold text-red-400 mb-3 text-center">{skill.category}</h3>
                  <ul className="space-y-1">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-xs text-gray-300 text-center">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating avatar box */}
          <motion.div 
            className="fixed bottom-4 right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden shadow-2xl bg-white hidden sm:block border-4 border-red-900"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img
              src="/profiles/avatar1.png"
              alt="Siddharthi"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                e.target.style.display = "none";
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;