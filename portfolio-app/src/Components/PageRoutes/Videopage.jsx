import projects from "../Hocs/Projects.jsx"; 
import { useParams } from 'react-router-dom';
import '../Styles/Videopage.css';


const Videopage = () => {
  const { projectId } = useParams();

  //project finding the matching id 
  const project = projects.find((p) => p.id === Number(projectId));

  return (
    <div className="container mt-10 text-white">
      <h2>{project.label}</h2>
      <div className="video-container">
        <video controls className="video">
          <source src={project.video} type="video/mp4" />
          No browser support for the video.
        </video>
      </div>
      <p>{project.describtion}</p>
    </div>
  );
};

export default Videopage;
