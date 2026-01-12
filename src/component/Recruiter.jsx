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
  <div className="relative h-screen md:h-screen overflow-hidden">
        {/* Reduced-motion safety: hide video for users who prefer reduced motion */}
        <style>{`@media (prefers-reduced-motion: reduce) { .hero-video { display:none !important; } }`}</style>

        {/* GIPHY embed (replaces video background) */}
        <style>{`
          /* fade edges for the iframe/video */
          .iframe-fade { position:absolute; inset:0; overflow:hidden; }
          .iframe-fade .giphy-embed { width:100%; height:100%; position:absolute; top:0; left:0; }
          /* WebKit + modern mask to softly fade edges into the page */
          .iframe-fade {
            -webkit-mask-image: radial-gradient(ellipse at center, black 90%, transparent 100%);
            mask-image: radial-gradient(ellipse at center, black 90%, transparent 100%);
            /* stronger inner fade to help blend */
            box-shadow: inset 0 0 110px rgba(0,0,0,0.7);
          }
          /* fallback overlay when mask isn't applied (iframe may block mask in some browsers) */
          .fade-overlay {
            /* rectangular edge fade: top, bottom, left, right gradients blended */
            /* widen the side fades (12% -> 18%) to be more visible on left/right */
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
            /* place overlay above the semi-opaque bg-black layer but below the content */
            z-index: 15;
          }
          @media (prefers-reduced-motion: reduce) { .iframe-fade { -webkit-mask-image: none; mask-image: none; } }
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

        {/* Fade overlay fallback (works even if mask isn't supported for iframes) */}
        <div className="absolute inset-0 pointer-events-none fade-overlay" />

        {/* Fallback background image (still used if video is disabled) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/recruiter-bg.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="w-full">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-3xl">
              Siddharthi Saha - Senior Software Developer
            </h1>

            <p className="mt-4 text-sm md:text-base text-gray-200 max-w-3xl">
              Dynamic and results-driven Senior Software Engineer with 5+ years in full-stack development across high-impact applications. I bring expertise in Ruby on Rails, React, Node, AWS, Kubernetes, and Docker, with a passion for building scalable systems.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a 
                href="https://drive.google.com/file/d/1i2_Y8BLXxtVO_2rSxvzYO9gZ_FZIf5Xd/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/siddharthi-saha-269280259/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
  <div className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-xl text-gray-200 mb-4">Today's Top Picks for recruiter</h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div 
            onClick={() => setShowWorkExperience(true)}
            className="bg-gray-800 rounded-lg h-36 flex items-end p-4 bg-cover bg-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop')"}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-white font-semibold">Work Permit</div>
            </div>
          </div>
          <div 
            onClick={() => navigate('/skills')}
            className="bg-gray-800 rounded-lg h-36 flex items-end p-4 bg-cover bg-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop')"}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="text-white font-semibold">Skills</div>
            </div>
          </div>
          <div 
            onClick={() => navigate('/about')}
            className="bg-gray-800 rounded-lg h-36 flex items-end p-4 bg-cover bg-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop')"}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="text-white font-semibold">Experience</div>
            </div>
          </div>
          <div 
            onClick={() => navigate('/projects')}
            className="bg-gray-800 rounded-lg h-36 flex items-end p-4 bg-cover bg-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop')"}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="text-white font-semibold">Projects</div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-400">Browse more items for recruiters or use filters to narrow results.</p>
        </div>
      </div>

      {/* Work Experience Modal */}
      {showWorkExperience && (
        <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
          {/* Navbar */}
          <nav className="bg-gradient-to-r from-red-950 to-black border-b border-red-900/50 px-6 py-4 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="text-red-500 font-bold text-2xl">PORTFOLIO</div>
              <button 
                onClick={() => setShowWorkExperience(false)}
                className="text-red-300 hover:text-red-100"
              >
                ← Back
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="relative h-96 overflow-hidden mt-16">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop')"}}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-900/70 to-transparent"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-end pb-12">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-red-100">Work Experience</h1>
                <p className="text-xl text-red-200">Building the future of AI-powered enterprise solutions</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Company Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/50">
                  <span className="text-2xl font-bold">LT</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-red-100">LTIMindtree</h2>
                  <p className="text-red-300">Blueverse Platform · Hyderabad, India</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-200">Currently Working</span>
                </div>
                <span className="text-red-300">July 2025 – Present</span>
                <span className="text-red-300">Software Developer (React/Frontend)</span>
              </div>
            </div>

            {/* Project Highlight */}
            <div className="mb-8 bg-gradient-to-r from-red-900/40 to-transparent border-l-4 border-red-500 p-6 rounded-r-lg shadow-lg shadow-red-900/30">
              <h3 className="text-2xl font-bold mb-2 text-red-100">Blueverse Agentic Foundry</h3>
              <p className="text-red-200">
                Lead frontend developer for the core "Foundry" module, an agentic AI creation platform enabling enterprises to build, deploy, and govern autonomous AI agents.
              </p>
            </div>

            {/* Key Achievements Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Achievement 1 */}
              <div className="bg-gradient-to-br from-red-950 to-red-900/50 rounded-lg p-6 border border-red-800/50 shadow-lg shadow-red-900/20 cursor-pointer hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-500/30 transition-all">
                    <svg className="w-6 h-6 text-red-400 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-red-100 transition-colors">Complex State Management</h4>
                    <p className="text-red-300 text-sm mb-3 transition-colors">
                      Engineered the "Drag-and-Drop" Agent Builder UI using React Flow and Redux Toolkit, handling complex nested state for agent workflows (nodes, triggers, and actions).
                    </p>
                    <div className="inline-block bg-red-700/40 text-red-200 px-3 py-1 rounded-full text-xs font-semibold border border-red-600/30 transition-all">
                      40% faster creation time
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement 2 */}
              <div className="bg-gradient-to-br from-red-950 to-red-900/50 rounded-lg p-6 border border-red-800/50 shadow-lg shadow-red-900/20 cursor-pointer hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-500/30 transition-all">
                    <svg className="w-6 h-6 text-red-400 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-red-100 transition-colors">Performance Optimization</h4>
                    <p className="text-red-300 text-sm mb-3 transition-colors">
                      Solved critical rendering bottlenecks in the "Marketplace" view by implementing windowing (react-window) for lists with 1000+ AI agents and memoizing expensive filter computations.
                    </p>
                    <div className="inline-block bg-red-700/40 text-red-200 px-3 py-1 rounded-full text-xs font-semibold border border-red-600/30 transition-all">
                      60% better TTI
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="bg-gradient-to-br from-red-950 to-red-900/50 rounded-lg p-6 border border-red-800/50 shadow-lg shadow-red-900/20 cursor-pointer hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-500/30 transition-all">
                    <svg className="w-6 h-6 text-red-400 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-red-100 transition-colors">Dynamic Form Engine</h4>
                    <p className="text-red-300 text-sm transition-colors">
                      Built a JSON-schema driven form engine for configuring Agent parameters (LLM temperature, context limits), utilizing React Hook Form to handle dynamic validation rules without causing excessive re-renders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievement 4 */}
              <div className="bg-gradient-to-br from-red-950 to-red-900/50 rounded-lg p-6 border border-red-800/50 shadow-lg shadow-red-900/20 cursor-pointer hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-500/30 transition-all">
                    <svg className="w-6 h-6 text-red-400 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-red-100 transition-colors">Integration</h4>
                    <p className="text-red-300 text-sm transition-colors">
                      Integrated frontend with AWS Bedrock and internal vector databases via REST/GraphQL, implementing optimistic UI updates for real-time agent responses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-red-100">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Redux Toolkit', 'React Flow', 'React Hook Form', 'react-window', 'GraphQL', 'REST API', 'AWS Bedrock', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gradient-to-r from-red-900/60 to-red-800/40 hover:from-red-800 hover:to-red-700 rounded-full text-sm font-medium border border-red-700/50 transition-all text-red-100 shadow-md shadow-red-900/30 cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact Summary */}
            <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 rounded-lg p-8 border border-red-800/50 shadow-xl shadow-red-900/40 mb-12">
              <h3 className="text-2xl font-bold mb-4 text-red-100">Impact Summary</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-red-400 mb-2">40%</div>
                  <div className="text-red-200">Reduction in agent creation time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-500 mb-2">60%</div>
                  <div className="text-red-200">Improvement in Time to Interactive</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
                  <div className="text-red-200">AI agents handled efficiently</div>
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