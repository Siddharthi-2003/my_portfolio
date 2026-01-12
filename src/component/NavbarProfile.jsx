import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
    <div className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-red-600">SIDDHARTHI's RESUME</div>
        <div className="flex items-center gap-4">
          <Link to="/Recruiter" className={isActive("/recruiter") ? "text-red-500 font-semibold" : "text-gray-300 hover:text-white"}>Home</Link>
          <Link to="/about" className={isActive("/about") ? "text-red-500 font-semibold" : "text-gray-300 hover:text-white"}>Professional</Link>
          <Link to="/skills" className={isActive("/skills") ? "text-red-500 font-semibold" : "text-gray-300 hover:text-white"}>Skills</Link>
          <Link to="/projects" className={isActive("/projects") ? "text-red-500 font-semibold" : "text-gray-300 hover:text-white"}>Projects</Link>
          <Link to="/hire" className={isActive("/hire") ? "text-red-500 font-semibold" : "text-gray-300 hover:text-white"}>Hire Me</Link>
        </div>
        <div className="flex items-center gap-3 relative">
          <select className="bg-black border border-gray-600 text-white p-1 rounded">
            <option>English</option>
          </select>
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
      </div>
    </div>
  );
};

export default NavbarProfile;
