import React, { useState } from 'react';
import { Code, Database, Cloud, Cpu, BookOpen, Award } from 'lucide-react';
import NavbarProfile from './NavbarProfile';

const SkillsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = {
    languages: [
      { name: 'C++', level: 90, icon: '💻', color: 'from-red-500 to-rose-600' },
      { name: 'Python', level: 85, icon: '🐍', color: 'from-orange-500 to-red-500' },
      { name: 'JavaScript', level: 88, icon: '⚡', color: 'from-red-400 to-pink-500' },
      { name: 'HTML/CSS', level: 90, icon: '🎨', color: 'from-rose-500 to-red-600' },
      { name: 'PHP', level: 70, icon: '🐘', color: 'from-red-600 to-rose-700' }
    ],
    databases: [
      { name: 'MySQL', level: 80, icon: '🗄️', color: 'from-red-500 to-orange-600' },
      { name: 'PostgreSQL', level: 75, icon: '🐘', color: 'from-rose-500 to-red-600' }
    ],
    frameworks: [
      { name: 'React.js', level: 90, icon: '⚛️', color: 'from-red-400 to-rose-500' },
      { name: 'Node.js', level: 82, icon: '🟢', color: 'from-orange-500 to-red-600' },
      { name: 'Material-UI', level: 85, icon: '🎭', color: 'from-red-500 to-pink-600' },
      { name: 'Bootstrap', level: 88, icon: '🅱️', color: 'from-rose-500 to-red-600' },
      { name: 'OpenCV', level: 78, icon: '👁️', color: 'from-red-600 to-rose-700' },
      { name: 'Chart.js', level: 80, icon: '📊', color: 'from-pink-500 to-red-500' }
    ],
    cloud: [
      { name: 'Azure AI', level: 85, icon: '☁️', color: 'from-red-500 to-orange-600' },
      { name: 'Azure OpenAI', level: 80, icon: '🤖', color: 'from-rose-400 to-red-500' },
      { name: 'Docker', level: 82, icon: '🐳', color: 'from-red-400 to-pink-500' },
      { name: 'MLOps', level: 75, icon: '⚙️', color: 'from-red-600 to-rose-700' }
    ],
    tools: [
      { name: 'GitHub', level: 90, icon: '🐙', color: 'from-red-700 to-rose-800' },
      { name: 'Linux', level: 85, icon: '🐧', color: 'from-orange-500 to-red-600' },
      { name: 'Raspberry Pi', level: 80, icon: '🥧', color: 'from-red-500 to-pink-600' },
      { name: 'PX4 Autopilot', level: 75, icon: '🚁', color: 'from-rose-600 to-red-700' }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Skills', icon: Code },
    { id: 'languages', name: 'Languages', icon: Code },
    { id: 'databases', name: 'Databases', icon: Database },
    { id: 'frameworks', name: 'Frameworks', icon: BookOpen },
    { id: 'cloud', name: 'AI & Cloud', icon: Cloud },
    { id: 'tools', name: 'Tools', icon: Cpu }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skills).flatMap(([category, items]) =>
        items.map(item => ({ ...item, category }))
      );
    }
    return skills[activeCategory]?.map(item => ({ ...item, category: activeCategory })) || [];
  };

  const stats = {
    totalSkills: Object.values(skills).flat().length,
    avgLevel: Math.round(
      Object.values(skills).flat().reduce((acc, s) => acc + s.level, 0) /
      Object.values(skills).flat().length
    ),
    categories: Object.keys(skills).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-950 text-white">
      <NavbarProfile />
      <div className="p-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 via-rose-500 to-pink-600 bg-clip-text text-transparent">
              Siddharthi Saha
            </h1>
            <p className="text-xl text-gray-400">Product Engineer @ LTIMindtree</p>
            <p className="text-lg text-gray-500 mt-2">IIT (ISM) Dhanbad | Electrical Engineering</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent mb-2">
                {stats.totalSkills}
              </div>
              <div className="text-gray-400 text-sm">Total Skills</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-rose-500 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-2">
                {stats.avgLevel}%
              </div>
              <div className="text-gray-400 text-sm">Avg Proficiency</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                {stats.categories}
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === id
                    ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/50 scale-105'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                <Icon size={20} />
                {name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredSkills().map((skill, index) => (
              <div
                key={`${skill.category}-${skill.name}`}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: 'fadeIn 0.5s ease-out forwards'
                }}
              >
                {/* Skill Icon & Name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{skill.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                      <p className="text-xs text-gray-500 capitalize">{skill.category}</p>
                    </div>
                  </div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: `${skill.level}%`,
                      boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)'
                    }}
                  />
                </div>

                {/* Hover Effect Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="mt-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-red-400" size={32} />
              <h2 className="text-3xl font-bold">Achievements & Certifications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-red-500 transition-all">
                <div className="text-red-400 font-bold mb-2">🏆 Team Leader</div>
                <p className="text-gray-300">Ranked 2nd at Concetto Tech Fest, IIT(ISM) Dhanbad</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-orange-500 transition-all">
                <div className="text-orange-400 font-bold mb-2">💻 Competitive Programming</div>
                <p className="text-gray-300">80%+ completion rate on <a href="https://www.geeksforgeeks.org/profile/sahasid1e68" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-200">GeeksForGeeks</a>, <a href="https://leetcode.com/u/21je0921/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-200">LeetCode</a>, CodeStudio</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-rose-500 transition-all">
                <div className="text-rose-400 font-bold mb-2">📜 Certifications</div>
                <p className="text-gray-300"><a href="https://www.hackerrank.com/certificates/6192ae3c915f" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-200">CSS</a>, Java, <a href="https://www.cse.iitb.ac.in/~evalpro-support/codeastra2023/certificates/589.png" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-200">C++</a>, <a href="https://learn.microsoft.com/en-us/users/siddharthisaha-9521/credentials/887266d4483ba85f?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-200">Azure AI</a>, <a href="https://www.coursera.org/account/accomplishments/verify/RMROTT2Q4AMO" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-200">Analytical Thinking</a></p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-pink-500 transition-all">
                <div className="text-pink-400 font-bold mb-2">🤖 Robotics</div>
                <p className="text-gray-300">Member of Roboism, Robotronics Club IIT(ISM)</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
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

export default SkillsShowcase;
