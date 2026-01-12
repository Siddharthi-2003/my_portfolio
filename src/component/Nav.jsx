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
      <div className="px-30 py-5 bg-black text-white z-10">
        <div
          className="absolute inset-0 bg-cover nav-bg opacity-30"
          style={{ backgroundImage: "url('/images/profile-bg.jpg')" }}
        ></div>
        <div className="relative z-0">
          <div className="flex justify-between items-center">
            <div className="text-4xl font-bold text-red-600">SIDDHARTHI's RESUME</div>
            <div className=" flex">
              <div>
                <select
                  className="pr-25 border p-1 mr-2 border-gray-500"
                  name=""
                  id=""
                >
                  <option className="text-black" value="English">
                    English
                  </option>
                  
                </select>
              </div>
              <button className="bg-red-600 px-5 py-1 rounded">Sign In</button>
            </div>
          </div>
          <div className="py-20 flex flex-col items-center ">
            <div className="text-6xl font-bold w-150 text-center mt-55">
              Discover the young girl behind this site 
            </div>
            <div className="py-5 font-bold text-[18px]">
              Ready to watch? 
           
            </div>
            <p>
              click on the button bellow 
            </p>
            <div className="py-5">
              {/* <input
                className="border p-2 border-gray-500 pr-30 mr-5"
                type="text"
                placeholder="Email Address"
              /> */}
                <button className="bg-red-600 p-2 px-5 rounded" onClick={handleGetStarted}>
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
