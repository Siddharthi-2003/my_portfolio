import React from "react";
import { useNavigate } from "react-router-dom";
import funkyPhoto from "../assets/nanobananas-1768236935495.png";

const Reader = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Netflix-style Header */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent px-4 sm:px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-red-600 text-2xl sm:text-3xl md:text-4xl font-bold">READER</h1>
          <div className="flex gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
            <button onClick={() => navigate('/profile')} className="hover:text-gray-300">Home</button>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Funky Background Sticker Photo - Right Aligned */}
        <div 
          className="absolute inset-y-0 right-0 w-full sm:w-3/4 md:w-1/2 bg-cover bg-center opacity-20 sm:opacity-50 md:opacity-100"
          style={{backgroundImage: `url(${funkyPhoto})`}}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        <div className="relative z-10 h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-full md:max-w-2xl lg:max-w-3xl">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 drop-shadow-2xl leading-tight">
              Binge-Read<br/>Everything
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 md:mb-8 text-gray-200 leading-relaxed max-w-xl">
              Why Netflix and chill when you can <span className="text-red-500 font-bold">CODE and thrill</span>? 
              The Reader profile is your all-access pass to knowledge that actually makes sense 
              (unlike your last debugging session 😅).
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="bg-white text-black px-6 md:px-8 py-2.5 md:py-3 rounded text-base sm:text-lg md:text-xl font-bold hover:bg-gray-200 flex items-center justify-center gap-2">
                ▶ Start Reading
              </button>
              <button className="bg-gray-600/80 px-6 md:px-8 py-2.5 md:py-3 rounded text-base sm:text-lg md:text-xl font-bold hover:bg-gray-600 flex items-center justify-center gap-2">
                ⓘ More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Rows */}
      <div className="relative z-20 -mt-16 sm:-mt-24 md:-mt-32 px-4 sm:px-6 md:px-8 lg:px-12 pb-8 md:pb-12">
        
        {/* Row 1 */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">📚 Trending Now: Hot Takes & Cool Code</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { emoji: "🚀", title: "JavaScript Magic", desc: "Because var is so 2015", color: "from-yellow-600 to-orange-600" },
              { emoji: "🎯", title: "React Hooks 101", desc: "useState your way to glory", color: "from-blue-600 to-cyan-600" },
              { emoji: "🔥", title: "CSS That Doesn't Suck", desc: "Flexbox: The chosen one", color: "from-pink-600 to-purple-600" },
              { emoji: "💪", title: "TypeScript Gains", desc: "Any is not your friend", color: "from-green-600 to-teal-600" }
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-br ${item.color} rounded-lg p-4 md:p-6 hover:scale-105 transition-transform cursor-pointer shadow-xl`}>
                <div className="text-4xl md:text-5xl mb-2 md:mb-3">{item.emoji}</div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">🎬 Documentaries (aka Long Reads)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              { emoji: "📖", title: "The API Chronicles", desc: "REST in peace, GraphQL is here", color: "from-red-900 to-red-700" },
              { emoji: "🐛", title: "Debugging: A Love Story", desc: "console.log('why???')", color: "from-purple-900 to-purple-700" },
              { emoji: "⚡", title: "Speed Reading Node.js", desc: "async/await for no one", color: "from-green-900 to-green-700" }
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-br ${item.color} rounded-lg p-4 md:p-6 hover:scale-105 transition-transform cursor-pointer shadow-xl border border-gray-700`}>
                <div className="text-4xl md:text-5xl mb-2 md:mb-3">{item.emoji}</div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Best Practices */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">💡 Because You Watched: "How Not to Code"</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { emoji: "✨", title: "Clean Code", desc: "Marie Kondo your functions", color: "from-indigo-600 to-blue-600" },
              { emoji: "🎨", title: "Design Patterns", desc: "Singleton walks into a bar...", color: "from-pink-600 to-red-600" },
              { emoji: "🔐", title: "Security 101", desc: "SQL injection ain't cool", color: "from-gray-700 to-gray-900" },
              { emoji: "🎭", title: "Git Good", desc: "Commit like a pro", color: "from-orange-600 to-red-600" }
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-br ${item.color} rounded-lg p-4 md:p-6 hover:scale-105 transition-transform cursor-pointer shadow-xl`}>
                <div className="text-4xl md:text-5xl mb-2 md:mb-3">{item.emoji}</div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-gradient-to-r from-red-900/40 to-black rounded-lg p-5 sm:p-6 md:p-8 border border-red-800/50 shadow-2xl mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-red-500">🍿 About This Profile</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-3 md:mb-4">
            The Reader profile is designed for those who want to explore and learn (and procrastinate productively 😏). 
            Browse through curated content that's actually useful, discover technical insights that won't put you to sleep, 
            and stay updated with the latest trends and best practices in the industry.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 italic">
            Warning: Side effects may include increased productivity, fewer bugs, and the sudden urge to refactor everything. 
            Binge responsibly! 🎯
          </p>
        </div>

        {/* Fun Footer */}
        <div className="text-center text-gray-500 text-xs sm:text-sm py-6 md:py-8">
          <p>Are you still reading? Impressive. 👏</p>
          <p className="mt-2">Next episode auto-loads in 5... 4... 3... (just kidding, we respect your time)</p>
        </div>
      </div>
    </div>
  );
};

export default Reader;