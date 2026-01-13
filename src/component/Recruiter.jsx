import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarProfile from "./NavbarProfile";

const Recruiter = () => {
  const [showWorkExperience, setShowWorkExperience] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarProfile />
      
      {/* Hero */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
        {/* Reduced-motion safety */}
        <style>{`
          @media (prefers-reduced-motion: reduce) { .hero-video { display:none !important; } }
          .iframe-fade { position:absolute; inset:0; overflow:hidden; }
          .iframe-fade .giphy-embed { width:100%; height:100%; position:absolute; top:0; left:0; }
          .iframe-fade {
            -webkit-mask-image: radial-gradient(ellipse at center, black 90%, transparent 100%);
            mask-image: radial-gradient(ellipse at center, black 90%, transparent 100%);
            box-shadow: inset 0 0 110px rgba(0,0,0,0.7);
          }
          .fade-overlay {
            background-image:
              linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0) 12%),
              linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0) 12%),
              linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0) 18%),
              linear-gradient(to left, rgba(0,0,0,0.9), rgba(0,0,0,0) 18%);
            background-blend-mode: multiply;
            opacity: 0.95;
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 15;
          }
          @media (prefers-reduced-motion: reduce) { 
            .iframe-fade { -webkit-mask-image: none; mask-image: none; } 
          }
        `}</style>
        
        <div className="iframe-fade">
          <iframe
            src="https://giphy.com/embed/hWMM0zmbZ3GkIcnYRl/video"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="recruiter-clip"
          ></iframe>
        </div>

        <div className="absolute inset-0 pointer-events-none fade-overlay" />
        
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/recruiter-bg.jpg')" }}
        />
        
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white max-w-3xl leading-tight">
              Siddharthi Saha - Senior Software Developer
            </h1>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-200 max-w-3xl leading-relaxed">
              Dynamic and results-driven Senior Software Engineer with 5+ years in full-stack development across high-impact applications. I bring expertise in Ruby on Rails, React, Node, AWS, Kubernetes, and Docker, with a passion for building scalable systems.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a 
                href="https://drive.google.com/file/d/1i2_Y8BLXxtVO_2rSxvzYO9gZ_FZIf5Xd/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/siddharthi-saha-269280259/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center border border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-white hover:text-black transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <h3 className="text-lg sm:text-xl text-gray-200 mb-4 sm:mb-6">Today's Top Picks for recruiter</h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div 
            onClick={() => setShowWorkExperience(true)}
            className="bg-gray-800 rounded-lg h-32 sm:h-36 md:h-40 flex items-end p-3 sm:p-4 bg-cover bg-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop')"}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-white font-semibold text-sm sm:text-base">Work Permit</div>
            </div>
          </div>
          
          <div 
            onClick={() => navigate('/skills')}
            className="bg-gray-800 rounded-lg h-32 sm:h-36 md:h-40 flex items-end p-3 sm:p-4 bg-cover bg-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop')"}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="text-white font-semibold text-sm sm:text-base">Skills</div>
            </div>
          </div>
          
          <div 
            onClick={() => navigate('/about')}
            className="bg-gray-800 rounded-lg h-32 sm:h-36 md:h-40 flex items-end p-3 sm:p-4 bg-cover bg-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop')"}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="text-white font-semibold text-sm sm:text-base">Experience</div>
            </div>
          </div>
          
          <div 
            onClick={() => navigate('/projects')}
            className="bg-gray-800 rounded-lg h-32 sm:h-36 md:h-40 flex items-end p-3 sm:p-4 bg-cover bg-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop')"}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="text-white font-semibold text-sm sm:text-base">Projects</div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-gray-400">Browse more items for recruiters or use filters to narrow results.</p>
        </div>
      </div>

      {/* Work Experience Modal */}
      {showWorkExperience && (
        <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
          {/* Navbar */}
          <nav className="bg-gradient-to-r from-red-950 to-black border-b border-red-900/50 px-4 sm:px-6 py-3 sm:py-4 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="text-red-500 font-bold text-xl sm:text-2xl">PORTFOLIO</div>
              <button 
                onClick={() => setShowWorkExperience(false)}
                className="text-red-300 hover:text-red-100 text-sm sm:text-base"
              >
                ← Back
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden mt-12 sm:mt-14 md:mt-16">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop')"}}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-900/70 to-transparent"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-6 sm:pb-8 md:pb-12">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-red-100 leading-tight">
                  Work Experience
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-red-200">
                  Building the future of AI-powered enterprise solutions
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
            {/* Company Header */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/50">
                  <span className="text-xl sm:text-2xl font-bold">LT</span>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-red-100">LTIMindtree</h2>
                  <p className="text-sm sm:text-base text-red-300">Blueverse Platform · Hyderabad, India</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-200">Currently Working</span>
                </div>
                <span className="text-red-300">July 2025 – Present</span>
                <span className="text-red-300">Software Developer (React/Frontend)</span>
              </div>
            </div>

            {/* Project Highlight */}
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-red-900/40 to-transparent border-l-4 border-red-500 p-4 sm:p-5 md:p-6 rounded-r-lg shadow-lg shadow-red-900/30">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-red-100">Blueverse Agentic Foundry</h3>
              <p className="text-sm sm:text-base text-red-200 leading-relaxed">
                Lead frontend developer for the core "Foundry" module, an agentic AI creation platform enabling enterprises to build, deploy, and govern autonomous AI agents.
              </p>
            </div>

            {/* Key Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
              {/* Achievement 1 */}
              <div className="bg-gradient-to-br from-red-950 to-red-900/50 rounded-lg p-4 sm:p-5 md:p-6 border border-red-800/50 shadow-lg shadow-red-900/20 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-500/30">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-red-100">Complex State Management</h4>
                    <p className="text-red-300 text-xs sm:text-sm mb-3 leading-relaxed">
                      Engineered the "Drag-and-Drop" Agent Builder UI using React Flow and Redux Toolkit, handling complex nested state for agent workflows.
                    </p>
                    <div className="inline-block bg-red-700/40 text-red-200 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border border-red-600/30">
                      40% faster creation time
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement 2 */}
              <div className="bg-gradient-to-br from-red-950 to-red-900/50 rounded-lg p-4 sm:p-5 md:p-6 border border-red-800/50 shadow-lg shadow-red-900/20 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-500/30">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-red-100">Performance Optimization</h4>
                    <p className="text-red-300 text-xs sm:text-sm mb-3 leading-relaxed">
                      Solved critical rendering bottlenecks in the "Marketplace" view by implementing windowing for 1000+ AI agents.
                    </p>
                    <div className="inline-block bg-red-700/40 text-red-200 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border border-red-600/30">
                      60% better TTI
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="bg-gradient-to-br from-red-950 to-red-900/50 rounded-lg p-4 sm:p-5 md:p-6 border border-red-800/50 shadow-lg shadow-red-900/20 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-500/30">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-red-100">Dynamic Form Engine</h4>
                    <p className="text-red-300 text-xs sm:text-sm leading-relaxed">
                      Built a JSON-schema driven form engine for configuring Agent parameters using React Hook Form.
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievement 4 */}
              <div className="bg-gradient-to-br from-red-950 to-red-900/50 rounded-lg p-4 sm:p-5 md:p-6 border border-red-800/50 shadow-lg shadow-red-900/20 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-500/30">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-red-100">Integration</h4>
                    <p className="text-red-300 text-xs sm:text-sm leading-relaxed">
                      Integrated frontend with AWS Bedrock and vector databases via REST/GraphQL with optimistic UI updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-red-100">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['React', 'Redux Toolkit', 'React Flow', 'React Hook Form', 'react-window', 'GraphQL', 'REST API', 'AWS Bedrock', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-900/60 to-red-800/40 hover:from-red-800 hover:to-red-700 rounded-full text-xs sm:text-sm font-medium border border-red-700/50 transition-all text-red-100 shadow-md shadow-red-900/30 cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact Summary */}
            <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 rounded-lg p-6 sm:p-8 border border-red-800/50 shadow-xl shadow-red-900/40">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-red-100">Impact Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-red-400 mb-2">40%</div>
                  <div className="text-sm sm:text-base text-red-200">Reduction in agent creation time</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">60%</div>
                  <div className="text-sm sm:text-base text-red-200">Improvement in Time to Interactive</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">1000+</div>
                  <div className="text-sm sm:text-base text-red-200">AI agents handled efficiently</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recruiter;