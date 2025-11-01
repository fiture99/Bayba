import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Management from "./components/Management";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Branches from "./components/Branches";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Partners />
                <Contact />
              </>
            }
          />
          <Route path="/branches" element={<Branches />} />
          <Route path="/management" element={<Management />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
