import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Hocs/Navbar";
import Home from "./Components/PageRoutes/Home.jsx"; 
import About from "./Components/PageRoutes/About.jsx"; 
import Projects from "./Components/PageRoutes/Projects.jsx"; 
import Resume from "./Components/PageRoutes/Resume.jsx";
import Contact from "./Components/PageRoutes/Contact.jsx";  
import Footer from './Components/Hocs/Footer';

const App = () => {
  return (
    <div className='general-styling'>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
};

export default App;
  