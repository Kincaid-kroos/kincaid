import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/PageRoutes/Home.jsx"; 
import Navbar from "./Components/Hocs/Navbar";
import About from "./Components/PageRoutes/About.jsx"; 
import Resume from "./Components/PageRoutes/Resume.jsx";
import Projects from "./Components/PageRoutes/Projects.jsx"; 
import Contact from "./Components/PageRoutes/Contact.jsx"; 
import Blogs from "./Components/PageRoutes/Blogs.jsx"; 

const App = () => {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
  