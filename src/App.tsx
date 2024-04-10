import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <main>
          <div>
            <Routes>
              <Route index element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
