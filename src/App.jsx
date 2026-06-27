import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Layout from "./components/Layout";
import CrazyAnimations from "./components/CrazyAnimations";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Admission from "./pages/Admission";
import ChildGuidance from "./pages/ChildGuidance";

function ScrollTop() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (hash) return; // let in-page anchors (#event) scroll normally
    // Jump to the very top INSTANTLY — bypass CSS smooth-scroll so the new
    // page doesn't glide up from where you were. The page-drop animation
    // then plays the entrance cleanly from the top.
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <CrazyAnimations />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/child-guidance" element={<ChildGuidance />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
