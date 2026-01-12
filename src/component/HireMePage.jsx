import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, Briefcase } from 'lucide-react';
import emailjs from '@emailjs/browser';
import NavbarProfile from './NavbarProfile';

const HireMePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // 1. Log in to https://dashboard.emailjs.com/
    // 2. Go to "Account" -> "Public Key"
    // 3. Paste it below inside the quotes
    emailjs.init('FZhw6FRHi1ep9uYjm'); 
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }

    try {
      // 4. Get these IDs from your EmailJS Dashboard
      const serviceID = 'service_h82mrk6';   // e.g., 'service_xyz'
      const templateID = 'template_o00395l'; // e.g., 'template_abc'

      await emailjs.send(
        serviceID,
        templateID,
        {
          // These keys (from_name, etc.) must match the variables in your EmailJS Email Template
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'sahasiddharthi0@gmail.com', // Ensure your template uses {{to_email}} or set this in the dashboard
        }
      );
      
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(true);
      console.error('Error sending email:', err);
      setTimeout(() => setError(false), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarProfile />
      {/* Hero Section - Netflix Style */}
      <div className="relative min-h-screen md:h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&h=900&fit=crop"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 min-h-full md:h-full flex items-center py-12 md:py-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
                      Siddharthi Saha
                    </span>
                  </h1>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-red-500 font-semibold">
                    Frontend Developer & AI Enthusiast
                  </h2>
                  
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={20} className="text-red-500" />
                    <span>Hyderabad, India</span>
                    <span className="mx-2">•</span>
                    <Briefcase size={20} className="text-red-500" />
                    <span>LTIMindtree</span>
                  </div>
                </div>

                {/* Why Hire Me Section */}
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-900/30 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4">Why Hire Me?</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                    As a <span className="text-white font-semibold">Product Engineer at LTIMindtree</span>, I lead frontend development for the Blueverse Agentic Foundry, building enterprise-scale AI platforms. I specialize in crafting <span className="text-red-400">performant, scalable React applications</span> with complex state management, achieving <span className="text-red-400">40% faster workflows</span> and <span className="text-red-400">60% improved performance</span>.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    From IIT (ISM) Dhanbad graduate to innovative problem-solver, I bring expertise in <span className="text-white font-semibold">React, Redux, TypeScript, AWS</span>, and modern frontend architecture. I don't just write code—I engineer solutions that drive real business impact. Let's build something extraordinary together.
                  </p>
                </div>

                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <a 
                    href="mailto:sahasiddharthi0@gmail.com"
                    className="flex items-center justify-center sm:justify-start gap-2 bg-red-600 hover:bg-red-700 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/50"
                  >
                    <Mail size={20} />
                    Get In Touch
                  </a>
                  <a 
                    href="tel:+919051881296"
                    className="flex items-center justify-center sm:justify-start gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-red-600 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105"
                  >
                    <Phone size={20} />
                    Call Me
                  </a>
                </div>
              </div>

              {/* Right Side - Profile Image */}
              <div className="relative mt-8 sm:mt-16 lg:mt-32">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Container */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-3xl border-2 border-red-600 overflow-hidden">
                    <img 
                      src="/images/WIN_20250129_15_30_54_Pro.jpg"
                      alt="Siddharthi Saha"
                      className="w-full h-auto rounded-2xl"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                  </div>
                </div>

                {/* Available for Hire Badge */}
                <div className="flex justify-center">
                  <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                    Available for Hire
                  </span>
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-8 left-8 right-8 bg-gradient-to-r from-red-600 to-red-500 p-6 rounded-2xl shadow-2xl shadow-red-600/50">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold">4+</div>
                      <div className="text-sm text-red-100">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-sm text-red-100">Projects</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-sm text-red-100">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative bg-gradient-to-b from-black via-red-950/10 to-black py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <p className="text-gray-400 text-lg">
                  Ready to discuss your next project? Feel free to reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="mailto:sahasiddharthi0@gmail.com"
                  className="flex items-center gap-4 p-6 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-600 rounded-xl transition-all duration-300 group"
                >
                  <div className="p-4 bg-red-600/10 rounded-lg group-hover:bg-red-600 transition-colors">
                    <Mail className="text-red-500 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-white font-semibold">sahasiddharthi0@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+919051881296"
                  className="flex items-center gap-4 p-6 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-600 rounded-xl transition-all duration-300 group"
                >
                  <div className="p-4 bg-red-600/10 rounded-lg group-hover:bg-red-600 transition-colors">
                    <Phone className="text-red-500 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="text-white font-semibold">+91 9051881296</div>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/siddharthi-saha-269280259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-600 rounded-xl transition-all duration-300 group"
                >
                  <div className="p-4 bg-red-600/10 rounded-lg group-hover:bg-red-600 transition-colors">
                    <Linkedin className="text-red-500 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">LinkedIn</div>
                    <div className="text-white font-semibold">Siddharthi Saha</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/Siddharthi-2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-600 rounded-xl transition-all duration-300 group"
                >
                  <div className="p-4 bg-red-600/10 rounded-lg group-hover:bg-red-600 transition-colors">
                    <Github className="text-red-500 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">GitHub</div>
                    <div className="text-white font-semibold">Siddharthi-2003</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-red-500">Send a Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Your Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-red-600 rounded-lg outline-none transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Your Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-red-600 rounded-lg outline-none transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-red-600 rounded-lg outline-none transition-colors text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button 
                  onClick={handleSubmit}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg ${
                    error 
                      ? 'bg-red-700 hover:bg-red-800 shadow-red-700/50' 
                      : 'bg-red-600 hover:bg-red-700 hover:scale-105 shadow-red-600/50'
                  }`}
                >
                  {submitted ? (
                    <span>✓ Message Sent to Gmail!</span>
                  ) : error ? (
                    <span>Error - Check Console or Fields</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black border-t border-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-8 text-center text-gray-500">
          <p>© 2025 Siddharthi Saha. All rights reserved. Made with ❤️ and React</p>
        </div>
      </div>
    </div>
  );
};

export default HireMePage;