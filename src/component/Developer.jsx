import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HireMePage from "./HireMePage";

const NavbarProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const isActive = (path) => location.pathname === path;

  const profiles = [
    { id: 1, name: "Recruiter", img: "/profiles/avatar1.png", path: "/recruiter" },
    { id: 2, name: "Developer", img: "/profiles/avatar2.png", path: "/developer" },
    { id: 3, name: "Stalker", img: "/profiles/avatar3.png", path: "/stalker" },
    { id: 4, name: "Reader", img: "/profiles/avatar4.png", path: "/reader" }
  ];

  const handleProfileClick = (profile) => {
    navigate(profile.path);
    setShowProfileDropdown(false);
  };
    
  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-zinc-800 px-6 py-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-red-600 text-2xl font-bold">SIDDHARTHI SAHA</div>
        <div className="flex gap-6 text-gray-300">
          <button onClick={() => navigate('/skateboard-about')} className="hover:text-red-500 transition-colors cursor-pointer">About</button>
          <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
          <button onClick={() => navigate('/hire')} className="hover:text-red-500 transition-colors cursor-pointer">Contact</button>
        </div>
        <div className="relative">
          <button 
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
          >
            Sign In
          </button>
          
          {/* Profile Dropdown */}
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-red-600 rounded-lg shadow-lg z-50">
              <div className="p-4">
                <h3 className="text-red-600 font-semibold mb-4 text-sm">SELECT PROFILE</h3>
                <div className="space-y-3">
                  {profiles.map((profile) => (
                    <div
                      key={profile.id}
                      onClick={() => handleProfileClick(profile)}
                      className="flex items-center gap-3 p-2 hover:bg-red-600/20 rounded cursor-pointer transition"
                    >
                      <img 
                        src={profile.img} 
                        alt={profile.name}
                        className="w-10 h-10 rounded-full border border-red-600 object-cover"
                        onError={(e) => e.target.src = "https://via.placeholder.com/40?text=" + profile.name[0]}
                      />
                      <div>
                        <div className="text-white font-medium text-sm">{profile.name}</div>
                        <div className="text-gray-400 text-xs">@{profile.name.toLowerCase()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const Particles = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(229, 9, 20, 0.5)';
      
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);
  
  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const SkillCard = ({ skill, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 10, y: x * -10 });
  };
  
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };
  
  const handleClick = (e) => {
    setIsFlipped(!isFlipped);
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };
  
  return (
    <div 
      ref={cardRef}
      className="relative perspective-1000 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div 
        className="relative preserve-3d transition-all duration-500"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isFlipped ? 'rotateY(180deg)' : ''}`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Front */}
        <div className="relative bg-zinc-900 rounded-lg overflow-hidden backface-hidden border border-zinc-800 hover:border-red-600/50 transition-all duration-300">
          <div className="p-6 relative z-10">
            <div className="text-4xl mb-4 float-animation">{skill.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white">{skill.title}</h3>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden mb-3">
              <div 
                className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-1000 progress-bar"
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
            <p className="text-gray-400 text-sm">{skill.desc}</p>
          </div>
          
          {ripples.map(ripple => (
            <div
              key={ripple.id}
              className="absolute rounded-full bg-red-500/30 ripple"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 0,
                height: 0
              }}
            />
          ))}
        </div>
        
        {/* Back */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-6 backface-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Key Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skill.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm text-white backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CounterAnimation = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);
  
  return <span ref={ref}>{count}{suffix}</span>;
};

const Developer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState([]);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorTrail(prev => [...prev.slice(-10), { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const skills = [
    { 
      icon: "⚛️", 
      title: "Frontend Development", 
      desc: "Lead developer for Blueverse Agentic Foundry, building complex Agent Builder UI with React Flow",
      progress: 95,
      technologies: ["React.js", "Redux Toolkit", "React Flow", "Tailwind CSS", "Material-UI"]
    },
    { 
      icon: "🚀", 
      title: "Performance Optimization", 
      desc: "Improved TTI by 60% implementing windowing for 1000+ items and memoization",
      progress: 90,
      technologies: ["react-window", "Web Workers", "Optimization", "Memoization"]
    },
    { 
      icon: "🤖", 
      title: "AI & Cloud", 
      desc: "Integrated AWS Bedrock, Azure OpenAI, and built autonomous quadcopter systems",
      progress: 85,
      technologies: ["OpenAI API", "Azure AI", "AWS Bedrock", "Machine Learning", "Docker"]
    }
  ];
  
  const projects = [
    {
      title: "TradeStream",
      desc: "Real-time crypto dashboard with 50+ assets, sub-second updates using WebSockets",
      tech: ["React", "WebSockets", "Web Workers", "Tailwind"],
      highlight: "Solved stale closure bugs, optimized to 60fps"
    },
    {
      title: "Autonomous Quadcopter",
      desc: "ArUco tag detection for pose estimation with 20% accuracy improvement",
      tech: ["Raspberry Pi", "PX4", "OpenCV", "MAVSDK", "TfLite"],
      highlight: "GPS-denied autonomous navigation"
    },
    {
      title: "TaskGrid",
      desc: "Collaborative Kanban with drag-and-drop and live presence indicators",
      tech: ["React", "Firebase", "React DnD", "Material UI"],
      highlight: "Fixed race conditions with optimistic concurrency"
    }
  ];
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Particles />
      <NavbarProfile />
      
      {/* Cursor Trail */}
      {cursorTrail.map((pos, i) => (
        <div
          key={pos.id}
          className="fixed w-2 h-2 bg-red-500 rounded-full pointer-events-none z-40"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: (i + 1) / cursorTrail.length * 0.5,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
      
      {/* Spotlight Effect */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-30 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.15) 0%, transparent 70%)',
        }}
      />
      
      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="relative overflow-hidden rounded-xl mb-12 group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 parallax"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop')",
                transform: `translateY(${mousePosition.y * 0.02}px)`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            
            <div className="relative z-10 py-32 px-8">
              <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white slide-up">
                Siddharthi Saha
              </h1>
              <p className="text-2xl text-red-500 mb-4 slide-up-delay font-semibold">
                Software Developer @ LTIMindtree
              </p>
              <p className="text-xl text-gray-300 slide-up-delay-2 max-w-3xl">
                <TypingEffect text="Full-stack developer specializing in React, Performance Optimization, and AI Integration. Building scalable enterprise solutions at Blueverse." speed={30} />
              </p>
              
              <div className="flex gap-4 mt-8 slide-up-delay-3">
                <a href="mailto:sahasiddharthi0@gmail.com" className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-all transform hover:scale-105">
                  📧 Contact
                </a>
                <a href="ttps://github.com/Siddharthi-2003" className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all transform hover:scale-105">
                  💻 GitHub
                </a>
                <a href="https://www.linkedin.com/in/siddharthi-saha-269280259/" className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all transform hover:scale-105">
                  🔗 LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Projects Delivered", value: 15, suffix: "+" },
              { label: "Performance Gain", value: 60, suffix: "%" },
              { label: "Code Quality", value: 95, suffix: "%" },
              { label: "Client Satisfaction", value: 100, suffix: "%" }
            ].map((stat, i) => (
              <div key={i} className="bg-zinc-900 rounded-lg p-6 text-center border border-zinc-800 hover:border-red-600/50 transition-all transform hover:scale-105">
                <div className="text-4xl font-bold text-red-500 mb-2">
                  <CounterAnimation end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Skills Section */}
          <h2 className="text-4xl font-bold mb-8 text-white">Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16 stagger-animation">
            {skills.map((skill, i) => (
              <SkillCard key={i} skill={skill} index={i} />
            ))}
          </div>
          
          {/* Projects Section */}
          <h2 id="projects" className="text-4xl font-bold mb-8 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {projects.map((project, i) => (
              <div 
                key={i}
                className="group relative bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6 z-10">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>
                  <div className="mb-4">
                    <span className="text-red-500 font-semibold text-xs">⭐ {project.highlight}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tech Stack */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-bold mb-6 text-white">Technology Stack</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-red-500 font-bold mb-3">Languages</h3>
                <p className="text-gray-300 text-sm">C++, Python, JavaScript, HTML, CSS, PHP</p>
              </div>
              <div>
                <h3 className="text-red-500 font-bold mb-3">Frameworks</h3>
                <p className="text-gray-300 text-sm">React.js, Node.js, Redux, Bootstrap, Material-UI, OpenCV</p>
              </div>
              <div>
                <h3 className="text-red-500 font-bold mb-3">AI & Cloud</h3>
                <p className="text-gray-300 text-sm">OpenAI API, Azure AI, AWS Bedrock, MLOps, Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .slide-up {
          animation: slideUp 0.8s ease-out;
        }
        
        .slide-up-delay {
          animation: slideUp 0.8s ease-out 0.2s backwards;
        }
        
        .slide-up-delay-2 {
          animation: slideUp 0.8s ease-out 0.4s backwards;
        }
        
        .slide-up-delay-3 {
          animation: slideUp 0.8s ease-out 0.6s backwards;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .progress-bar {
          animation: fillProgress 1.5s ease-out forwards;
        }
        
        @keyframes fillProgress {
          from {
            width: 0%;
          }
        }
        
        .ripple {
          animation: rippleEffect 0.6s ease-out;
        }
        
        @keyframes rippleEffect {
          to {
            width: 300px;
            height: 300px;
            opacity: 0;
            transform: translate(-50%, -50%);
          }
        }
        
        .stagger-animation > * {
          animation: slideUp 0.6s ease-out backwards;
        }
        
        .stagger-animation > *:nth-child(1) {
          animation-delay: 0.1s;
        }
        
        .stagger-animation > *:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .stagger-animation > *:nth-child(3) {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Developer;