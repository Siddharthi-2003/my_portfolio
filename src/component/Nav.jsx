import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/profile");
  };
  
  return (
    <>
      {/* scoped styles to shift background down on laptop screens */}
      <style>{`
        .nav-bg { background-position: center top !important; }
        @media (min-width: 1024px) { .nav-bg { background-position: center 0.10% !important; } }
      `}</style>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 py-5 bg-black text-white z-10 min-h-screen">
        <div
          className="absolute inset-0 bg-cover nav-bg opacity-30"
          style={{ backgroundImage: "url('/images/profile-bg.jpg')" }}
        ></div>
        <div className="relative z-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 text-center sm:text-left">
              SIDDHARTHI'S RESUME
            </div>
          </div>
          
          {/* Hero Section */}
          <div className="py-10 sm:py-16 md:py-20 flex flex-col items-center px-4">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-center mt-8 sm:mt-16 md:mt-32 lg:mt-55 leading-tight">
              Discover the young girl behind this site 
            </div>
            <div className="py-4 sm:py-5 font-bold text-base sm:text-lg text-center">
              Ready to watch? 
            </div>
            <p className="text-sm sm:text-base text-center mb-4">
              click on the button below 
            </p>
            <div className="py-3 sm:py-5">
              <button 
                className="bg-red-600 p-3 px-6 sm:p-2 sm:px-5 rounded text-base sm:text-lg font-semibold hover:bg-red-700 transition-colors"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;