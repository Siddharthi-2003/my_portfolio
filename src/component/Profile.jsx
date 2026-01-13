import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const profiles = [
  { id: 1, name: "Recruiter", img: "/profiles/avatar1.png" },
  { id: 2, name: "Developer", img: "/profiles/avatar2.png" },
  { id: 3, name: "Stalker", img: "/profiles/avatar3.png" },
  { id: 4, name: "Reader", img: "/profiles/avatar4.png" },
  
];

const Profile = () => {
  const navigate = useNavigate();

  const handleCardAction = (p) => {
    switch (p.id) {
      case 1:
        navigate("/recruiter");
        break;
      case 2:
        navigate("/developer");
        break;
      case 3:
        navigate("/stalker");
        break;
      case 4:
        navigate("/reader");
        break;
      default:
        break;
    }
  };

  const handleKey = (e, p) => {
    if (e.key === "Enter") handleCardAction(p);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#111111] text-white py-20">
      <h1 className="text-6xl font-semibold mb-12">Who's watching?</h1>

      <div className="w-full max-w-5xl px-6">
        <div className="flex justify-center gap-8 flex-wrap">
          {profiles.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center space-y-4 transform hover:scale-105 transition-all duration-200 cursor-pointer"
              onClick={() => handleCardAction(p)}
              onKeyDown={(e) => handleKey(e, p)}
              role="button"
              tabIndex={0}
            >
              <div className="w-44 h-44 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
                {/* image placeholder: replace src with real images in /public/profiles */}
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // fallback colored block when image not found
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400" style={{display: 'none'}}>
                  😊
                </div>
              </div>
              <div className="text-gray-300">{p.name}</div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Profile;
