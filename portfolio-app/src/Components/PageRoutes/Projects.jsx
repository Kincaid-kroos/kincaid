import "../Styles/Projects.css";
import projects from "../Hocs/Projects.jsx"; 
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowser from '@mui/icons-material/OpenInBrowser';




const Projects = () => {
    const navigation = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [showId, setShowId] = useState(0);
   
    const MouseOverhandler = (id) => {
        setShowModal(true);
        setShowId(id);
    }

    const MouseLeavehandler = () => {
        setShowModal(false);
        setShowId(0);
    }

     // This is  the function to navigate to the Videopage component page 
  const navigateToVideoPage = (projectId) => {
    navigation(`/videopage/${projectId}`);
  };


    

    return (
        <div className="">
             <div className="text-center">
                <h1>My <b className="bold">Projects</b></h1>
                 <p className="style-text">These are a few past sample projects I&apos;ve worked on. 
                 </p>
               </div>
            <section >
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onMouseOver={() => MouseOverhandler(project.id)}
                            onMouseLeave={MouseLeavehandler}
                            className="project-box"
                            
                        
                        >
                            <img alt={project.label} src={project.image}     className=" img-size " />
                            {showModal && showId === project.id && (
                                <div  className="modal-contentx" style={{ display: 'block' }}>
                                    <p style={{ color: '#ff8f00', fontSize: '20px' }} >{project.label}</p>
                                    <p style={{ color: '#27AE60', fontSize: '16px' }}>
                                        Tech: <b style={{ color: '#e3f2fd' }} className="text-dark">{project.tech}</b>
                                    </p>
                                    <div>
                                        <Link to={project.github} target="_blank" style={{ color: '#e3f2fd', fontSize: '18px' }} className="text-primary"> 
                                             Github < GitHubIcon  className="text-dark"/>
                                        </Link>
                                    </div>
                                    <div>
                                    {project.server && (
                                        <Link to={project.server} target="_blank" style={{ color: '#e3f2fd', fontSize: '18px' }}  className="text-primary">
                                           View Demo<OpenInBrowser className="text-dark" />
                                        </Link>
                                     )}
                                    </div>
                                <div>
                                    <p style={{ color: '#27AE60', fontSize: '16px' }}>
                                        Status: <b style={{ color: '#e3f2fd' }} className="text-dark">{project.status}</b>
                                    </p>
                                    <div>
                                       {project.video && (
                                          <button onClick={() => navigateToVideoPage(project.id)}
                                              style={{ color: "#e3f2fd", fontSize: "18px" }}
                                              className="text-primary">
                                              Click video
                                           </button>
                                        )}
                                      </div>
                                </div>
                                  
                            </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Projects;
