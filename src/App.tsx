"use client";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RightMenuSide from "./components/RightMenuSide";
import ConfigPanel from "./components/ConfigPanel";
import AOS from "aos";
import ScrollArrow from "./components/ScrollArrow";
import ProjectsPage from "./pages/projects";
import NameLoader from "./components/NameLoader";
// import SiteLoader from "./components/SiteLoader";
export default function App() {
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, [])
const [menuOpen, setMenuOpen] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
    const [loading, setLoading] = useState(true);

  return (
    <>
      {/* <SiteLoader/> */}
      {loading && <NameLoader onFinish={() => setLoading(false)} />}
       <Header
        onMenuClick={() => {
          setMenuOpen(true);
          setConfigOpen(false); // 🔥 safety
        }}
        onConfigClick={() => {
          setConfigOpen(true);
          setMenuOpen(false); // 🔥 safety
        }}
      />
      <RightMenuSide
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
      <ConfigPanel
        open={configOpen}
        onClose={() => setConfigOpen(false)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer/>
      <ScrollArrow/>
    </>
  );
}
