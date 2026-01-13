import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Questions from "./component/Questions";
import Reasons from "./component/Reasons";
import Subscription from "./component/Subscription";

import Profile from "./component/Profile";
import Recruiter from "./component/Recruiter";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import HireMePage from "./component/HireMePage";
import Developer from "./component/Developer";
import Stalker from "./component/Stalker";
import Reader from "./component/Reader";
import SkateboardAbout from "./component/SkateboardAbout";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-black px-20 text-white">
              <Nav />
              
              
              <Footer />
            </div>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hire" element={<HireMePage />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/stalker" element={<Stalker />} />
        <Route path="/reader" element={<Reader />} />
        <Route path="/skateboard-about" element={<SkateboardAbout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
