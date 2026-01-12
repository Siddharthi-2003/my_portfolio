import React, { useState } from 'react';
import { ExternalLink, Github, Heart, MessageCircle, Share2 } from 'lucide-react';
import NavbarProfile from './NavbarProfile';

const ProjectsShowcase = () => {
  const [likedProjects, setLikedProjects] = useState(new Set());

  const projects = [
    {
      id: 1,
      title: "Blueverse Frontend",
      company: "LTIMindtree • Hyderabad, India",
      description: "Lead frontend developer for Blueverse Agentic Foundry - an enterprise platform for building, deploying, and governing autonomous AI agents. Engineered complex Drag-and-Drop Agent Builder UI using React Flow and Redux Toolkit, reducing agent creation time by 40%. Optimized Marketplace performance with windowing for 1000+ agents, improving TTI by 60%. Built JSON-schema driven form engine for dynamic agent configuration and integrated with AWS Bedrock via REST/GraphQL.",
      image: "/images/LTIMindtree-launches-AI-ecosystem-BlueVerse.jpg",
      technologies: ["React.js", "Redux Toolkit", "React Flow", "React Hook Form", "AWS Bedrock", "GraphQL", "REST API"],
      category: "Professional",
      stats: { views: "8.5K", likes: 456 },
      links: {
        live: "#",
        github: null
      }
    },
    {
      id: 2,
      title: "Document Digitizer Application",
      company: "LTIMindtree",
      description: "Contributed to testing, debugging, and Dockerization of a Document Digitizer application ensuring seamless frontend-backend integration and deployment efficiency.",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=600&fit=crop",
      technologies: ["Docker", "Azure AI", "React.js", "Testing", "CI/CD"],
      category: "Professional",
      stats: { views: "3.8K", likes: 189 },
      links: {
        live: "#",
        github: null
      }
    },
    {
      id: 3,
      title: "Autonomous Quadcopter",
      company: "Personal Project",
      description: "Engineered an autonomous quadcopter system utilizing ArUco tag detection for precise pose estimation, achieving 20% improvement in accuracy. Programmed for GPS-denied navigation.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
      technologies: ["Raspberry Pi", "PX4 Autopilot", "OpenCV", "MAVSDK", "TfLite"],
      category: "Academic",
      stats: { views: "4.4K", likes: 312 },
      links: {
        live: null,
        github: "#"
      }
    },
    {
      id: 4,
      title: "Crypto Tracker",
      company: "Personal Project",
      description: "Built a cryptocurrency price tracking platform with real-time data integration using CoinGecko API, enhancing user engagement by 40%. Features interactive Chart.js visualizations.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
      technologies: ["React", "Material-UI", "Chart.js", "CoinGecko API", "JavaScript"],
      category: "Personal",
      stats: { views: "6.1K", likes: 428 },
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Food Ordering Website",
      company: "Tech Alpha",
      description: "Created a responsive food ordering website during internship, enhancing user experience and reducing load time by 30%. Built with optimized HTML, CSS, and JavaScript.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "Professional",
      stats: { views: "2.9K", likes: 156 },
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 6,
      title: "Heart Rate Monitoring System",
      company: "Personal Project",
      description: "Designed and prototyped a cost-effective IoT-based heart rate monitoring system providing real-time health alerts for early detection of cardiac risks.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      technologies: ["IoT", "Microcontroller", "Sensors", "Real-time Processing"],
      category: "Academic",
      stats: { views: "3.2K", likes: 201 },
      links: {
        live: null,
        github: "#"
      }
    }
  ];

  const toggleLike = (projectId) => {
    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Professional': return 'from-red-500 to-rose-600';
      case 'Personal': return 'from-orange-500 to-red-500';
      case 'Academic': return 'from-rose-500 to-pink-600';
      default: return 'from-red-400 to-rose-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-950 text-white">
      <NavbarProfile />
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  Projects
                </h1>
                <p className="text-gray-400 text-lg">Building innovative solutions across various domains</p>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_100px_rgba(255,0,0,0.9),0_0_60px_rgba(255,50,50,0.8),0_0_30px_rgba(255,100,100,0.7),0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:z-10"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeIn 0.6s ease-out forwards'
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${getCategoryColor(project.category)} shadow-lg`}>
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title & Company */}
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-red-400 font-semibold">{project.company}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-xs text-gray-300 hover:border-red-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats & Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => toggleLike(project.id)}
                        className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors group"
                      >
                        <Heart 
                          size={20} 
                          className={`transition-all ${likedProjects.has(project.id) ? 'fill-red-500 text-red-500' : ''}`}
                        />
                        <span className="text-sm font-semibold">
                          {likedProjects.has(project.id) ? project.stats.likes + 1 : project.stats.likes}
                        </span>
                      </button>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MessageCircle size={20} />
                        <span className="text-sm font-semibold">{project.stats.views}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-110"
                          title="View on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-110"
                          title="View Live"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      <button 
                        className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-110"
                        title="Share"
                      >
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Intense Red Backlight Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-500/0 to-red-700/0 group-hover:from-red-600/10 group-hover:via-red-500/8 group-hover:to-red-700/10 transition-all duration-300 pointer-events-none rounded-2xl blur-sm" />
                
                {/* Bright Red Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" 
                     style={{
                       boxShadow: 'inset 0 0 40px rgba(255, 0, 0, 0.2), inset 0 0 20px rgba(255, 50, 50, 0.15)'
                     }} 
                />
                
                {/* Outer Red Aura */}
                <div className="absolute -inset-4 bg-gradient-radial from-red-500/0 to-transparent opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Footer Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent mb-2">
                {projects.length}
              </div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                {projects.filter(p => p.category === 'Professional').length}
              </div>
              <div className="text-gray-400 text-sm">Professional</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-2">
                {projects.reduce((acc, p) => acc + p.stats.likes, 0) + likedProjects.size}
              </div>
              <div className="text-gray-400 text-sm">Total Likes</div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
