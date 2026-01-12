import React, { useState, useEffect, useRef } from 'react';
import { Eye, Zap, Trophy, Coffee, Code, Brain, Rocket, Heart, Star, Sparkles, Target, Gamepad2, Award, Lock, Unlock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StalkerComponent() {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [eyePosition, setEyePosition] = useState({ x: 50, y: 50 });
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [konami, setKonami] = useState([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const [stalkerLevel, setStalkerLevel] = useState(0);
  const [floating, setFloating] = useState(false);
  
  // Whack-a-mole game
  const [molePosition, setMolePosition] = useState(0);
  const [moleScore, setMoleScore] = useState(0);
  const [moleActive, setMoleActive] = useState(false);
  
  // Memory card game
  const [memoryCards, setMemoryCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [memoryMoves, setMemoryMoves] = useState(0);
  
  // Typing speed game
  const [typingText, setTypingText] = useState('');
  const [typingTarget, setTypingTarget] = useState('');
  const [typingScore, setTypingScore] = useState(0);
  const [typingStarted, setTypingStarted] = useState(false);
  
  // Color match game
  const [colorTarget, setColorTarget] = useState({ color: '', name: '' });
  const [colorOptions, setColorOptions] = useState([]);
  const [colorScore, setColorScore] = useState(0);
  
  // Snake direction game
  const [snakeScore, setSnakeScore] = useState(0);
  const [currentDirection, setCurrentDirection] = useState('');
  const [directionTimer, setDirectionTimer] = useState(null);
  
  const containerRef = useRef(null);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

  const codingPhrases = [
    "const awesome = true;",
    "React.render(<Magic />)",
    "npm install happiness",
    "git commit -m 'hired'",
    "sudo make me coffee",
    "while(alive) { code(); }",
    "import success from 'life'",
    "async function hire() {}"
  ];

  const colors = [
    { name: 'Red', color: '#ef4444' },
    { name: 'Blue', color: '#3b82f6' },
    { name: 'Green', color: '#22c55e' },
    { name: 'Yellow', color: '#eab308' },
    { name: 'Purple', color: '#a855f7' },
    { name: 'Pink', color: '#ec4899' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setEyePosition({ x, y });
      }
    };

    const handleKeyDown = (e) => {
      setKonami(prev => {
        const newKonami = [...prev, e.key].slice(-8);
        if (newKonami.join(',') === konamiCode.join(',')) {
          setShowEasterEgg(true);
          setTimeout(() => setShowEasterEgg(false), 5000);
        }
        return newKonami;
      });

      // Snake direction game
      if (directionTimer && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        const directionMap = {
          'ArrowUp': '↑',
          'ArrowDown': '↓',
          'ArrowLeft': '←',
          'ArrowRight': '→'
        };
        if (directionMap[e.key] === currentDirection) {
          setSnakeScore(prev => prev + 1);
          startDirectionChallenge();
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentDirection, directionTimer]);

  useEffect(() => {
    if (clickCount >= 10) setStalkerLevel(1);
    if (clickCount >= 25) setStalkerLevel(2);
    if (clickCount >= 50) setStalkerLevel(3);
    if (clickCount >= 100) setStalkerLevel(4);
  }, [clickCount]);

  // Initialize memory game
  useEffect(() => {
    const skills = ['⚛️', '🐍', '☕', '🚀', '💻', '🎨', '⚡', '🔥'];
    const doubled = [...skills, ...skills];
    setMemoryCards(doubled.sort(() => Math.random() - 0.5).map((skill, idx) => ({ id: idx, skill, flipped: false })));
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (memoryCards[first].skill === memoryCards[second].skill) {
        setMatchedCards(prev => [...prev, first, second]);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 800);
      }
      setMemoryMoves(prev => prev + 1);
    }
  }, [flippedCards, memoryCards]);

  const handleMainClick = () => {
    setClickCount(prev => prev + 1);
    setFloating(true);
    setTimeout(() => setFloating(false), 500);
  };

  // Whack-a-mole game
  const startMoleGame = () => {
    setMoleActive(true);
    setMoleScore(0);
    const interval = setInterval(() => {
      setMolePosition(Math.floor(Math.random() * 9));
    }, 800);

    setTimeout(() => {
      clearInterval(interval);
      setMoleActive(false);
    }, 15000);
  };

  const whackMole = (position) => {
    if (position === molePosition && moleActive) {
      setMoleScore(prev => prev + 1);
      setMolePosition(Math.floor(Math.random() * 9));
    }
  };

  // Memory card game
  const flipCard = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
      setFlippedCards(prev => [...prev, index]);
    }
  };

  // Typing speed game
  const startTypingGame = () => {
    const target = codingPhrases[Math.floor(Math.random() * codingPhrases.length)];
    setTypingTarget(target);
    setTypingText('');
    setTypingStarted(true);
  };

  const handleTypingChange = (e) => {
    const value = e.target.value;
    setTypingText(value);
    if (value === typingTarget) {
      setTypingScore(prev => prev + 1);
      setTimeout(() => startTypingGame(), 500);
    }
  };

  // Color match game
  const startColorGame = () => {
    const target = colors[Math.floor(Math.random() * colors.length)];
    const shuffled = [...colors].sort(() => Math.random() - 0.5).slice(0, 4);
    if (!shuffled.find(c => c.name === target.name)) {
      shuffled[0] = target;
    }
    setColorTarget(target);
    setColorOptions(shuffled.sort(() => Math.random() - 0.5));
  };

  const checkColor = (selectedName) => {
    if (selectedName === colorTarget.name) {
      setColorScore(prev => prev + 1);
      setTimeout(() => startColorGame(), 300);
    }
  };

  // Snake direction game
  const startDirectionChallenge = () => {
    const directions = ['↑', '↓', '←', '→'];
    setCurrentDirection(directions[Math.floor(Math.random() * directions.length)]);
  };

  const achievements = [
    { level: 0, title: "Curious Visitor", desc: "Just passing by...", icon: Eye },
    { level: 1, title: "Interested Stalker", desc: "10+ clicks - Getting intrigued!", icon: Star },
    { level: 2, title: "Dedicated Investigator", desc: "25+ clicks - You're committed!", icon: Brain },
    { level: 3, title: "Professional Creeper", desc: "50+ clicks - Impressive dedication!", icon: Trophy },
    { level: 4, title: "Ultimate Stalker", desc: "100+ clicks - You're hired! 🎉", icon: Rocket }
  ];

  const funFacts = [
    "🚁 Built an autonomous quadcopter that finds objects better than my ability to find my keys",
    "⚡ Optimized React rendering so hard, the UI now loads faster than your regrets",
    "🎯 Solved WebSocket stale closures - unlike my coffee, my state is always fresh",
    "🔥 Handled race conditions smoother than a Formula 1 driver",
    "🎨 My drag-and-drop is so smooth, even butter is jealous",
    "📊 Visualizes 50+ crypto assets in real-time (and watches my portfolio cry)",
    "🤖 Creates AI agents at LTIMindtree - basically Skynet, but friendlier",
    "💾 LocalStorage expert - I remember things better than your ex"
  ];

  const CurrentAchievement = achievements[stalkerLevel].icon;

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-8 overflow-hidden relative">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-300 opacity-40" />
          </div>
        ))}
      </div>

      {/* Easter Egg Alert */}
      {showEasterEgg && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-4 rounded-full shadow-2xl animate-bounce z-50">
          <div className="flex items-center gap-3">
            <Rocket className="w-6 h-6" />
            <span className="font-bold text-lg">🎮 KONAMI CODE ACTIVATED! You're a true gamer! 🎮</span>
          </div>
        </div>
      )}

      {/* Header with moving eyes */}
      <div className="text-center mb-12 relative">
        <div className="flex justify-center gap-4 mb-6">
          <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
            <div 
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full transition-all duration-100 flex items-center justify-center"
              style={{
                transform: `translate(${(eyePosition.x - 50) * 0.2}px, ${(eyePosition.y - 50) * 0.2}px)`
              }}
            >
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
          <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
            <div 
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full transition-all duration-100 flex items-center justify-center"
              style={{
                transform: `translate(${(eyePosition.x - 50) * 0.2}px, ${(eyePosition.y - 50) * 0.2}px)`
              }}
            >
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Welcome, Stalker! 👀
        </h1>
        <p className="text-xl text-cyan-300">I see you checking me out... Let's make this fun!</p>
        <p className="text-sm text-gray-400 mt-2 italic">
          (Hint: Try using arrow keys - ↑↑↓↓←→←→)
        </p>
      </div>

      {/* Click Counter Game */}
      <div className="max-w-4xl mx-auto mb-12">
        <div 
          onClick={handleMainClick}
          onMouseEnter={() => setHoverCount(prev => prev + 1)}
          className={`bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:rotate-1 ${floating ? 'animate-bounce' : ''}`}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Click Me! (If You Dare)</h2>
            <div className="text-6xl font-extrabold mb-4 text-yellow-300">{clickCount}</div>
            <p className="text-lg">Stalker Level: <span className="text-pink-400 font-bold">{stalkerLevel}</span></p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <CurrentAchievement className="w-8 h-8 text-yellow-300" />
              <span className="text-xl font-semibold">{achievements[stalkerLevel].title}</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">{achievements[stalkerLevel].desc}</p>
          </div>
        </div>

        {clickCount >= 50 && !secretUnlocked && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setSecretUnlocked(true)}
              className="bg-gradient-to-r from-pink-500 to-yellow-500 px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transform transition-all shadow-lg animate-pulse"
            >
              🔓 Unlock Secret Achievement!
            </button>
          </div>
        )}

        {secretUnlocked && (
          <div className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-2">🎉 SECRET UNLOCKED! 🎉</h3>
            <p className="text-lg">You've discovered Siddharthi's hidden message:</p>
            <p className="text-xl font-semibold mt-3 italic">
              "If you clicked this many times, you either really want to hire me, or you need a new hobby. Either way, let's grab coffee! ☕"
            </p>
          </div>
        )}
      </div>

      {/* GAMES SECTION */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
          <Gamepad2 className="w-10 h-10 text-green-400" />
          Interactive Games Arena
          <Gamepad2 className="w-10 h-10 text-green-400" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Whack-a-Mole Game */}
          <div className="bg-gradient-to-br from-red-600 to-pink-600 p-6 rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Target className="w-6 h-6" /> Whack-a-Bug
              </h3>
              <div className="text-2xl font-bold">🏆 {moleScore}</div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[...Array(9)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => whackMole(idx)}
                  className={`h-16 rounded-lg transition-all transform ${
                    idx === molePosition && moleActive
                      ? 'bg-red-900 scale-110 animate-pulse'
                      : 'bg-red-800/30'
                  } hover:scale-105`}
                >
                  {idx === molePosition && moleActive && <span className="text-3xl">🐛</span>}
                </button>
              ))}
            </div>
            <button
              onClick={startMoleGame}
              disabled={moleActive}
              className="w-full bg-white text-red-600 py-3 rounded-xl font-bold hover:scale-105 transition-all disabled:opacity-50"
            >
              {moleActive ? 'Squashing Bugs... 15s' : 'Start Bug Hunt!'}
            </button>
          </div>

          {/* Typing Speed Game */}
          <div className="bg-gradient-to-br from-green-600 to-teal-600 p-6 rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Code className="w-6 h-6" /> Code Typing
              </h3>
              <div className="text-2xl font-bold">⚡ {typingScore}</div>
            </div>
            {!typingStarted ? (
              <button
                onClick={startTypingGame}
                className="w-full bg-white text-green-600 py-12 rounded-xl font-bold text-xl hover:scale-105 transition-all"
              >
                Start Typing Challenge!
              </button>
            ) : (
              <div>
                <div className="bg-black/30 p-4 rounded-lg mb-4 text-center font-mono text-xl">
                  {typingTarget}
                </div>
                <input
                  type="text"
                  value={typingText}
                  onChange={handleTypingChange}
                  className="w-full bg-white/20 border-2 border-white/50 rounded-lg px-4 py-3 font-mono text-lg"
                  placeholder="Type here..."
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Memory Card Game */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Brain className="w-6 h-6" /> Memory Match
              </h3>
              <div className="text-xl font-bold">Moves: {memoryMoves}</div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {memoryCards.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => flipCard(idx)}
                  className={`h-16 rounded-lg text-3xl transition-all transform ${
                    flippedCards.includes(idx) || matchedCards.includes(idx)
                      ? 'bg-purple-300 scale-95'
                      : 'bg-purple-800 hover:scale-105'
                  }`}
                >
                  {(flippedCards.includes(idx) || matchedCards.includes(idx)) ? card.skill : '?'}
                </button>
              ))}
            </div>
            {matchedCards.length === memoryCards.length && (
              <div className="mt-4 bg-yellow-500 text-black p-3 rounded-lg text-center font-bold">
                🎉 Completed in {memoryMoves} moves!
              </div>
            )}
          </div>

          {/* Color Match Game */}
          <div className="bg-gradient-to-br from-yellow-600 to-orange-600 p-6 rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Sparkles className="w-6 h-6" /> Color Match
              </h3>
              <div className="text-2xl font-bold">🎨 {colorScore}</div>
            </div>
            {colorOptions.length === 0 ? (
              <button
                onClick={startColorGame}
                className="w-full bg-white text-orange-600 py-12 rounded-xl font-bold text-xl hover:scale-105 transition-all"
              >
                Start Color Challenge!
              </button>
            ) : (
              <div>
                <div className="bg-black/30 p-6 rounded-lg mb-4 text-center">
                  <div className="text-sm mb-2">Click the color:</div>
                  <div className="text-4xl font-bold" style={{ color: colorTarget.color }}>
                    {colorTarget.name}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {colorOptions.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => checkColor(color.name)}
                      className="h-20 rounded-xl transition-all transform hover:scale-105"
                      style={{ backgroundColor: color.color }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Arrow Direction Challenge */}
        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-6 rounded-3xl shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Zap className="w-6 h-6" /> Quick Reflex Challenge
            </h3>
            <div className="text-2xl font-bold">⚡ {snakeScore}</div>
          </div>
          {!directionTimer ? (
            <button
              onClick={() => {
                setDirectionTimer(true);
                startDirectionChallenge();
              }}
              className="w-full bg-white text-blue-600 py-8 rounded-xl font-bold text-xl hover:scale-105 transition-all"
            >
              Start Arrow Challenge! Press the matching arrow key!
            </button>
          ) : (
            <div className="text-center">
              <div className="text-8xl mb-4 animate-pulse">{currentDirection}</div>
              <p className="text-xl">Press the matching arrow key!</p>
              <button
                onClick={() => {
                  setDirectionTimer(null);
                  setSnakeScore(0);
                }}
                className="mt-4 bg-white/20 px-6 py-2 rounded-lg hover:bg-white/30 transition-all"
              >
                Stop Game
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Fun Facts Grid */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
          <Zap className="w-10 h-10 text-yellow-400" />
          Fun Facts About Siddharthi
          <Zap className="w-10 h-10 text-yellow-400" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {funFacts.map((fact, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border-2 border-purple-500/30 hover:border-pink-500 transition-all duration-300 hover:scale-105 cursor-pointer transform hover:rotate-1"
              onMouseEnter={() => setHoverCount(prev => prev + 1)}
            >
              <p className="text-lg">{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-br from-pink-500 to-red-500 p-6 rounded-2xl text-center transform hover:scale-110 transition-all">
          <Coffee className="w-12 h-12 mx-auto mb-2" />
          <div className="text-3xl font-bold">∞</div>
          <div className="text-sm">Coffees Consumed</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-2xl text-center transform hover:scale-110 transition-all">
          <Code className="w-12 h-12 mx-auto mb-2" />
          <div className="text-3xl font-bold">{hoverCount}</div>
          <div className="text-sm">Your Hover Count</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-2xl text-center transform hover:scale-110 transition-all">
          <Trophy className="w-12 h-12 mx-auto mb-2" />
          <div className="text-3xl font-bold">{moleScore + typingScore + colorScore + snakeScore}</div>
          <div className="text-sm">Total Game Score</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-6 rounded-2xl text-center transform hover:scale-110 transition-all">
          <Heart className="w-12 h-12 mx-auto mb-2" />
          <div className="text-3xl font-bold">100%</div>
          <div className="text-sm">React Enthusiasm</div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-indigo-600 to-purple-600 p-10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-bold mb-4">Impressed? Let's Connect!</h2>
        <p className="text-xl mb-6">If you've made it this far, you're definitely interested (or just really bored)</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:sahasiddharthi0@gmail.com" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transform transition-all shadow-lg">
            📧 Email Me
          </a>
          <a href="https://www.linkedin.com/in/siddharthi-saha-269280259/" className="bg-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transform transition-all shadow-lg">
            💼 LinkedIn
          </a>
          <a href="https://github.com/Siddharthi-2003" className="bg-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transform transition-all shadow-lg">
            💻 GitHub
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-300">
          P.S. - You've clicked {clickCount} times, played {[moleScore, typingScore, colorScore, snakeScore].filter(s => s > 0).length} games, and hovered {hoverCount} times. That's dedication! 🏆
        </p>
      </div>

      {/* Footer Easter Egg */}
      <div className="text-center mt-12 text-gray-400 text-sm">
        <button
          onClick={() => navigate('/profile')}
          className="mb-6 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Profile
        </button>
        <p>Made with ⚡ by Siddharthi | Stalker Stats: Level {stalkerLevel} | Keep exploring for surprises!</p>
        <p className="mt-2 italic">Hint: Your keyboard has secrets... 🎮</p>
      </div>
    </div>
  );
}