import "../Styles/Resume.css";
import JavaScript from "../images/Javascript.jpeg";
import frontend from "../images/Frontend.jpeg";
import responsive from "../images/Responsive.jpeg";
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

const Resume = () => {

  const imageCertClick1 = () => {
    window.location.href ="https://www.freecodecamp.org/certification/Kincaid/javascript-algorithms-and-data-structures";
 };

  const imageCertClick2 = () => {
    window.location.href = "https://www.freecodecamp.org/certification/Kincaid/front-end-development-libraries";
 };
  
  const imageCertClick3 = () => {
     window.location.href = "https://www.freecodecamp.org/certification/Kincaid/responsive-web-design";
  };

  return (
    <div className="resume  text-light">
      <h1>My <b className="i">Resume</b></h1>
      <section>
      <div>
        <h2 className="education ">Education</h2>
        <p className="course">Bsc, Computer Science and Statistics -<b className="b">Technical University of Mombasa</b> </p>
        <p className="dates">Sep 2018-Dec 2022</p>
        <p className="grade"><b>Grade:</b> <i>Second Class Honours Upper Division</i></p>
      </div>
      <div>
        <ul className="course-list">
          <li><StarBorderPurple500Icon className="List-icon"/> System Analysis And Design</li>
          <li><StarBorderPurple500Icon className="List-icon"/> Database Management And Administration</li>
          <li><StarBorderPurple500Icon className="List-icon"/> Data structures and Algorithms</li>
          <li><StarBorderPurple500Icon className="List-icon"/> Data Analysis and Intepretation</li>
          <li><StarBorderPurple500Icon className="List-icon"/> Artificial Intelligence and Machine Learning</li>
        </ul>
      </div>
      </section>

    <section>
         <h2 className="works">Works</h2>
         <div>
            <p className="course">Web Application Developer and Data Analyst- <b className="b">Freelancer</b></p>
            <p className="dates">2022-Present</p>
          </div>
        <div>
         <ul className="course-list">
           <li><StarBorderPurple500Icon className="List-icon"/> Design and develop web applications using React,Django and databases including PosgreSQL</li>
           <li><StarBorderPurple500Icon className="List-icon"/> Implement responsive designs on user websites </li>
           <li> <StarBorderPurple500Icon className="List-icon"/> Data Analysis and Intepretation using various tools</li>
         </ul>
      </div>
       
      <div>
            <p className="course">Data analyst/Data entry clerk - <b className="b">Tegat Co. ltd</b></p>
            <p className="dates">2022</p>
          </div>
        <div>
         <ul className="course-list">
           <li><StarBorderPurple500Icon className="List-icon"/> Prepare data and information for making regular report data analysis</li>
           <li><StarBorderPurple500Icon className="List-icon"/> Perform data analysis for complex data and files</li>
           <li><StarBorderPurple500Icon className="List-icon"/> Data enumeration, survey and data collection</li>
         </ul>
      </div>
      <div>

      <div>
            <p className="course">Industrial Trainee - <b className="b">Tegat Co. ltd</b></p>
            <p className="dates">2022</p>
          </div>
        <div>
         <ul className="course-list">
           <li><StarBorderPurple500Icon className="List-icon"/> Install, configure, test and maintain operating systems,<br/>
              application software and system management tools</li>
           <li><StarBorderPurple500Icon className="List-icon"/> CCTV camera installation</li>
           <li><StarBorderPurple500Icon className="List-icon"/> Troubleshooting problems of network cables</li>
           <li><StarBorderPurple500Icon className="List-icon"/> Resolving user login conflicts and IP address conflict</li>
           <li><StarBorderPurple500Icon className="List-icon"/> Connection of computers to local staff network domain</li>
         </ul>
      </div>
      </div>
    </section>


    
    

    <div>
      <div>
            <h2>Certifications </h2>
            <p className="dates">2022</p>
          </div>
        <div>
          <div><h3 className="cert-1">JavaScript Data Structures and Algorithms</h3></div>
          <p className="course-list">
           Certication of completion from a course that teaches JavaScript <br/>data structures and algorithms from basic to advance concepts
            </p>
            <img className="image" src={JavaScript} alt="certificate" onClick={imageCertClick1} />
         </div>

         <div>
          <div><h3 className="cert-1">Front End Development Libraries</h3></div>
          <p className="course-list">Certification of completion from a course that teaches react fundamentals as well as<br/>
             advanced concepts like higher-order components, 
            pure components, rendering optimisation, state management,<br/> routing and so much more
            </p>
            <img className="image" src={frontend} alt="certificate" onClick={imageCertClick2} />
         </div>

         <div>
          <div><h3 className="cert-1">Responsive Web Design</h3></div>
          <p className="course-list">Certification of graduation from a course that teaches everything about responsiveness of web and web applications
            </p>
            <img className="image" src={responsive} alt="certificate" onClick={imageCertClick3} />
         </div>
          
    </div>
  </div>
  )
}

export default Resume






