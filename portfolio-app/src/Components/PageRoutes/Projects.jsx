import "../Styles/Projects.css";
import image from "../images/Kincaid.jpg";


const Projects = () => {
  return (
    <div><h1>Projects</h1>
    <p className="text-center text-light style-text">THere are a few past sample projects I`ve worked on. Want to see more? Email me. <br /> 
    Based on my Tech stack</p>
    <div className="container projects">
      
    <img src={image}  alt='Kincaid' className="img"/>
    <img src={image}  alt='Kincaid' className="img"/>
    <img src={image}  alt='Kincaid' className="img"/>
    <img src={image}  alt='Kincaid' className="img"/>
    <img src={image}  alt='Kincaid' className="img"/>
    <img src={image}  alt='Kincaid' className="img"/>
    </div>
    </div>
  )
}

export default Projects