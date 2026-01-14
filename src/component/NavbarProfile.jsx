import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavbarProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
    setShowMobileMenu(false);
  };

  const navLinks = [
    { path: "/Recruiter", label: "Home" },
    { path: "/about", label: "Professional" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/hire", label: "Hire Me" }
  ];

  return (
    <div className="bg-black text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 flex-shrink-0">
            SIDDHARTHI's RESUME
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-red-500 font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            
            <div className="relative">
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition text-sm font-medium"
              >
                Profile
              </button>

              {/* Desktop Profile Dropdown */}
              {showProfileDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowProfileDropdown(false)}
                  />
                  <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-red-600 rounded-lg shadow-2xl z-50">
                    <div className="p-4">
                      <h3 className="text-red-600 font-semibold mb-4 text-sm">
                        SELECT PROFILE
                      </h3>
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
                              onError={(e) =>
                                (e.target.src =
                                  "https://via.placeholder.com/40?text=" +
                                  profile.name[0])
                              }
                            />
                            <div>
                              <div className="text-white font-medium text-sm">
                                {profile.name}
                              </div>
                              <div className="text-gray-400 text-xs">
                                @{profile.name.toLowerCase()}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition"
            aria-label="Toggle menu"
          >
            {showMobileMenu ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden border-t border-gray-800 py-4 space-y-2">
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setShowMobileMenu(false)}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "bg-red-600 text-white font-semibold"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Divider */}
            <div className="border-t border-gray-800 my-4"></div>

            {/* Mobile Language Selector */}
           

            {/* Mobile Profile Section */}
            <div className="px-4 py-2">
              <h3 className="text-red-600 font-semibold mb-3 text-sm">
                SELECT PROFILE
              </h3>
              <div className="space-y-2">
                {profiles.map((profile) => (
                  <div
                    key={profile.id}
                    onClick={() => handleProfileClick(profile)}
                    className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-red-600/20 rounded-lg cursor-pointer transition"
                  >
                    <img
                      src={profile.img}
                      alt={profile.name}
                      className="w-12 h-12 rounded-full border-2 border-red-600 object-cover"
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/48?text=" +
                          profile.name[0])
                      }
                    />
                    <div>
                      <div className="text-white font-medium">{profile.name}</div>
                      <div className="text-gray-400 text-sm">
                        @{profile.name.toLowerCase()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarProfile;