
import projects from "../Hocs/Projects.jsx"; 
import { useParams } from 'react-router-dom';

const Videopage = () => {
  const { projectId } = useParams();

  // Find the project with the matching projectId from your data
  const project = projects.find((p) => p.id === Number(projectId));

  return (
    <div>
      <h2>{project.label}</h2>
      <video controls>
        <source src={project.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videopage;
