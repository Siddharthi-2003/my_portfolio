import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SkateboardAbout = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 80;
      const y = (e.clientY / window.innerHeight - 0.5) * 80;
      
      // Calculate velocity for more dynamic movement
      const vx = e.clientX - prevMousePos.current.x;
      const vy = e.clientY - prevMousePos.current.y;
      setVelocity({ x: vx, y: vy });
      
      prevMousePos.current = { x: e.clientX, y: e.clientY };
      setMousePosition({ x, y });
      
      // Enhanced rotation based on velocity
      const rotationAngle = vx * 0.5;
      setRotation(rotationAngle);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Netflix-style gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: `rgba(229, 9, 20, ${Math.random() * 0.5})`,
              animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left Side - Enhanced Character Animation */}
        <div className="lg:w-1/2 flex justify-center items-center mb-12 lg:mb-0 relative">
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(229, 9, 20, 0.2) 0%, transparent 60%)`,
              animation: 'pulse 3s ease-in-out infinite'
            }}
          />
          
          <div 
            className="relative transition-all duration-300 ease-out"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
              transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px) rotate(${rotation * 0.08}deg) scale(${isHovering ? 1.1 : 1})`,
              filter: isHovering ? 'drop-shadow(0 0 30px rgba(229, 9, 20, 0.8))' : 'none'
            }}
          >
            {/* Dynamic shadow */}
            <div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 rounded-full blur-2xl transition-all duration-300"
              style={{
                width: '280px',
                height: '40px',
                background: 'radial-gradient(ellipse, rgba(229, 9, 20, 0.6) 0%, transparent 70%)',
                transform: `translateX(-50%) translateY(${Math.abs(mousePosition.y) * 0.3}px) scale(${1.2 - Math.abs(mousePosition.y) * 0.003})`,
              }}
            />
            
            {/* Character Container */}
            <div className="relative" style={{ width: '350px', height: '450px' }}>
              {/* Animated ring glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-72 h-72 rounded-full border-2 border-red-600/30 animate-spin-slow"
                  style={{ animationDuration: '20s' }}
                />
                <div 
                  className="absolute w-80 h-80 rounded-full border-2 border-red-600/20 animate-spin-slow"
                  style={{ animationDuration: '30s', animationDirection: 'reverse' }}
                />
              </div>
              
              <svg viewBox="0 0 350 450" className="relative z-10">
                {/* Enhanced Skateboard with motion blur */}
                <g transform={`translate(175, 400) rotate(${rotation * 0.6 + Math.sin(Date.now() * 0.001) * 3})`}>
                  {/* Motion blur effect */}
                  <ellipse cx={velocity.x * -2} cy="0" rx="90" ry="10" fill="rgba(229, 9, 20, 0.1)" opacity="0.5" />
                  
                  {/* Skateboard deck with Netflix red */}
                  <ellipse cx="0" cy="0" rx="90" ry="10" fill="url(#deckGradient)" />
                  <rect x="-80" y="-6" width="160" height="12" rx="6" fill="#E50914" />
                  
                  {/* Deck details */}
                  <rect x="-70" y="-4" width="140" height="8" rx="4" fill="#B20710" opacity="0.5" />
                  <line x1="-60" y1="-3" x2="-60" y2="3" stroke="#fff" strokeWidth="1" opacity="0.3" />
                  <line x1="60" y1="-3" x2="60" y2="3" stroke="#fff" strokeWidth="1" opacity="0.3" />
                  
                  {/* Wheels with rotation */}
                  <g transform={`translate(-55, 0) rotate(${rotation * 5})`}>
                    <circle cx="0" cy="0" r="10" fill="#374151" />
                    <circle cx="0" cy="0" r="7" fill="#1f2937" />
                    <circle cx="0" cy="0" r="3" fill="#E50914" />
                  </g>
                  <g transform={`translate(55, 0) rotate(${rotation * 5})`}>
                    <circle cx="0" cy="0" r="10" fill="#374151" />
                    <circle cx="0" cy="0" r="7" fill="#1f2937" />
                    <circle cx="0" cy="0" r="3" fill="#E50914" />
                  </g>
                  
                  {/* Trucks */}
                  <rect x="-60" y="-2" width="10" height="4" fill="#52525b" />
                  <rect x="50" y="-2" width="10" height="4" fill="#52525b" />
                  
                  <defs>
                    <linearGradient id="deckGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E50914" />
                      <stop offset="50%" stopColor="#B20710" />
                      <stop offset="100%" stopColor="#E50914" />
                    </linearGradient>
                  </defs>
                </g>
                
                {/* Enhanced Legs with bend */}
                <g transform={`translate(175, 325) rotate(${rotation * 0.25})`}>
                  <path d="M -22,0 Q -25,30 -20,65" stroke="#1e40af" strokeWidth="18" fill="none" strokeLinecap="round" />
                  <path d="M 8,0 Q 5,30 10,65" stroke="#1e40af" strokeWidth="18" fill="none" strokeLinecap="round" />
                </g>
                
                {/* Enhanced Shoes */}
                <g transform={`translate(175, 390) rotate(${rotation * 0.35})`}>
                  <ellipse cx="-18" cy="0" rx="24" ry="14" fill="#52525b" />
                  <ellipse cx="18" cy="0" rx="24" ry="14" fill="#52525b" />
                  <ellipse cx="-18" cy="-3" rx="22" ry="10" fill="#d1d5db" />
                  <ellipse cx="18" cy="-3" rx="22" ry="10" fill="#d1d5db" />
                  
                  {/* Shoe laces */}
                  <line x1="-22" y1="-5" x2="-14" y2="-5" stroke="#E50914" strokeWidth="1.5" />
                  <line x1="14" y1="-5" x2="22" y2="-5" stroke="#E50914" strokeWidth="1.5" />
                </g>
                
                {/* Enhanced Body with vest */}
                <g transform={`translate(175, 240) rotate(${rotation * 0.18})`}>
                  {/* Black shirt */}
                  <ellipse cx="0" cy="40" rx="32" ry="48" fill="#1f2937" />
                  
                  {/* Netflix Red Vest */}
                  <path d="M -28,20 L -28,70 Q -28,75 -23,75 L 23,75 Q 28,75 28,70 L 28,20 Q 28,15 23,15 L 10,15 L 10,10 L -10,10 L -10,15 L -23,15 Q -28,15 -28,20" 
                    fill="#E50914" />
                  
                  {/* Vest highlights */}
                  <path d="M -25,25 L -25,70 Q -25,72 -23,72 L -20,72 L -20,25 Z" fill="#B20710" opacity="0.6" />
                  <path d="M 20,25 L 20,72 L 23,72 Q 25,72 25,70 L 25,25 Z" fill="#FF1F1F" opacity="0.4" />
                  
                  {/* Vest pockets */}
                  <rect x="-23" y="35" width="18" height="12" rx="2" fill="#B20710" />
                  <rect x="5" y="35" width="18" height="12" rx="2" fill="#B20710" />
                  <line x1="-14" y1="41" x2="-14" y2="41.5" stroke="#fff" strokeWidth="0.5" opacity="0.5" />
                  <line x1="14" y1="41" x2="14" y2="41.5" stroke="#fff" strokeWidth="0.5" opacity="0.5" />
                  
                  {/* Animated Arms with dynamic swing */}
                  <g transform={`rotate(${Math.sin(Date.now() * 0.003) * 15 - rotation * 0.3}) translate(-48, 30)`}>
                    <rect x="0" y="0" width="22" height="55" rx="11" fill="#1f2937" />
                    <circle cx="11" cy="55" r="10" fill="#d4a574" />
                  </g>
                  <g transform={`rotate(${Math.sin(Date.now() * 0.003 + Math.PI) * 15 + rotation * 0.3}) translate(26, 30)`}>
                    <rect x="0" y="0" width="22" height="55" rx="11" fill="#1f2937" />
                    <circle cx="11" cy="55" r="10" fill="#d4a574" />
                  </g>
                </g>
                
                {/* Enhanced Head with more details */}
                <g transform={`translate(175, 170) rotate(${rotation * 0.12})`}>
                  {/* Neck */}
                  <rect x="-10" y="35" width="20" height="25" rx="10" fill="#d4a574" />
                  
                  {/* Face */}
                  <circle cx="0" cy="0" r="45" fill="#d4a574" />
                  
                  {/* Ear with detail */}
                  <g transform="translate(-38, 0)">
                    <ellipse cx="0" cy="0" rx="13" ry="17" fill="#c99763" />
                    <ellipse cx="2" cy="0" rx="7" ry="10" fill="#d4a574" opacity="0.7" />
                  </g>
                  
                  {/* Enhanced Hair with texture */}
                  <path d="M -35,-25 Q -48,-48 -25,-52 Q -5,-55 5,-53 Q 25,-52 35,-45 Q 48,-35 35,-20 L 30,-15 Q 20,-5 0,0 Q -20,-5 -30,-15 Z" 
                    fill="#5c2410" />
                  
                  {/* Hair highlights */}
                  <path d="M -30,-30 Q -35,-45 -20,-48 Q -10,-50 0,-49" 
                    stroke="#7c3418" strokeWidth="3" fill="none" opacity="0.6" />
                  <path d="M 10,-48 Q 20,-47 28,-42" 
                    stroke="#7c3418" strokeWidth="3" fill="none" opacity="0.6" />
                  
                  {/* Hair strand */}
                  <path d="M -32,-20 Q -28,-38 -12,-35 L -16,-15 Z" fill="#441f0d" />
                  
                  {/* Netflix glow on hair */}
                  <path d="M -35,-25 Q -48,-48 -25,-52 Q -5,-55 5,-53 Q 25,-52 35,-45 Q 48,-35 35,-20" 
                    fill="none" stroke="url(#hairNetflixGlow)" strokeWidth="2.5" opacity="0.8" />
                  
                  {/* Eyebrows */}
                  <path d="M -18,-8 Q -15,-12 -8,-10" stroke="#3a1a0d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M 8,-10 Q 15,-12 18,-8" stroke="#3a1a0d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  
                  {/* Eyes with animation */}
                  <g className="eyes" style={{ animation: 'blink 4s infinite' }}>
                    <ellipse cx="-14" cy="2" rx="5" ry="6" fill="#1f2937" />
                    <ellipse cx="14" cy="2" rx="5" ry="6" fill="#1f2937" />
                    <circle cx="-13" cy="1" r="2" fill="white" />
                    <circle cx="15" cy="1" r="2" fill="white" />
                    <circle cx="-12.5" cy="0.5" r="1" fill="white" opacity="0.6" />
                    <circle cx="15.5" cy="0.5" r="1" fill="white" opacity="0.6" />
                  </g>
                  
                  {/* Nose */}
                  <path d="M 0,5 Q 2,10 0,12" stroke="#c99763" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  
                  {/* Smile */}
                  <path d="M -12,18 Q 0,24 12,18" stroke="#c99763" strokeWidth="2" fill="none" strokeLinecap="round" />
                </g>
                
                <defs>
                  <linearGradient id="hairNetflixGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E50914" />
                    <stop offset="50%" stopColor="#FF6B6B" />
                    <stop offset="100%" stopColor="#E50914" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Right Side - Netflix-styled Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-slideIn">
              About <span className="text-red-600">Me</span>
            </h1>
            
            <div className="space-y-4 text-lg text-gray-300 animate-slideIn" style={{ animationDelay: '0.2s' }}>
              <p className="leading-relaxed">
                Hi! I'm <span className="text-red-500 font-bold">Siddharthi Saha</span>, a passionate software developer 
                currently working at <span className="text-white font-semibold">LTIMindtree</span> on the Blueverse Agentic Foundry platform.
              </p>
              
              <p className="leading-relaxed">
                I specialize in building <span className="text-red-500 font-semibold">high-performance React applications</span>, 
                optimizing complex UIs, and integrating cutting-edge AI technologies. My work focuses on creating 
                intuitive user experiences while maintaining exceptional code quality.
              </p>
              
              <p className="leading-relaxed">
                From <span className="text-white font-semibold">autonomous quadcopters</span> to <span className="text-red-500 font-semibold">real-time crypto dashboards</span>, 
                I love tackling challenging problems and pushing the boundaries of what's possible with modern web technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8 animate-slideIn" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: "🎓", title: "Education", sub: "IIT (ISM) Dhanbad", detail: "B.Tech Electrical" },
                { icon: "💼", title: "Experience", sub: "LTIMindtree", detail: "Senior Software Developer" },
                { icon: "🚀", title: "Passion", sub: "Performance", detail: "60% TTI Gain" },
                { icon: "🤖", title: "Interest", sub: "Frontend Webdevelopment", detail: "React Developer" }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="relative bg-zinc-900 rounded-lg p-5 border border-zinc-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.sub}</p>
                    <p className="text-xs text-red-500 mt-1">{item.detail}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 mt-8 animate-slideIn" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={() => navigate('/developer')}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded font-bold hover:shadow-lg hover:shadow-red-600/50 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <span>Back</span>
                <span className="text-xl">←</span>
              </button>
              <a 
                href="https://drive.google.com/file/d/1i2_Y8BLXxtVO_2rSxvzYO9gZ_FZIf5Xd/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded font-bold transition-all transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes blink {
          0%, 96%, 100% {
            transform: scaleY(1);
          }
          98% {
            transform: scaleY(0.1);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.8s ease-out backwards;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .eyes {
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default SkateboardAbout;
