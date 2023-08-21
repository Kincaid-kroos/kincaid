 import "../Styles/About.css";
import { BiPen } from 'react-icons/bi';
import { CiDatabase } from 'react-icons/ci';
import { MdOutlineDesignServices } from 'react-icons/md';
import { IoMdCodeWorking } from 'react-icons/io';

const About = () => {
  return (
    <div>
          <h1 className="mt-30">About <b className="bold-header">Me</b></h1>
      <div>
        <p className="about-me">
          <p className="about-me-1">Who am I ?</p>
          I'm a Software developer and suddenly data analyst<br/>
          with a Bsc in Computer Science and Statistics. I have worked<br/>
          with various tools and technologies in both fields to <br/>
          innovative and impactful solutions. Above all i'm a lifelong <br/>
          tech learner and committed to constantly improving my skills <br/>
          and contributing to development of tech community.
        </p>
      </div>

      <div>
        <h2 className="tech-stack-header">Tech Stack</h2>
       <div className="stack">
       <p className="stack-header">Stack:</p>
       <p className="stack-p">
       JavaScript, React Js, Python, Django, TypeScript, Bootstrap, RESTful APIs, GraphQL, <br/> 
       Tailwind, MYSQL, PostgreSQL, CSS, HTML, Git, AWS, SPSS,Excel,SQL.
       </p>
        </div> 
      </div>

      <div>
        <h2 className="tech-stack-header">Skillset</h2>
        <div>
        <p className="skillset-p">
            With skills in over 4 different fields, <br/>
            I can pretty much take on any challenge.
          </p>

          <div className="skillset">
          <div className="frontend-skillset container">
            <MdOutlineDesignServices className="design"/>
            <h2 className="skillset-header">
              Frontend Developer
            </h2>
            <p className="front-end">
              I have a strong understanding of the frontend development process
              and I can build any web UI from scratch. I have experience with
              HTML, CSS, JavaScript, TypeScript, React, Bootstrap and Tailwind.
            </p>
          </div>
          <div className="backend-skillset container">
            <IoMdCodeWorking className="design"/>
            <h2 className="skillset-header">
              Backend Developer
            </h2>
            <p className="back-end">
              I have a strong understanding of the backend development process
              and I can build any web app from scratch. I have experience with
              Python,Django,Postgresql and RESTful APIs.
            </p>
          </div>
          <div className="database-skillset container">
            <CiDatabase className="design"/>
            <h2 className="skillset-header">Database design</h2>
            <p
              className="data-base">
              I have a strong understanding of the database design process and I 
              can build any database from scratch. I have experience with SQL, 
              MYSQL and Postgresql.
            </p>
          </div>
          <div className="dataanalysis-skillset container">
            <BiPen className="design"/>
            <h2 className="skillset-header">Data Analysis</h2>
            <p className="data-analysis">
              I have a strong understanding of data analysis process and I can analyse
               any data from scratch. I have experience with SPSS, SQL, Python and Excel .
            </p>
          </div>
        </div>

        </div>
      </div>

      

    
    <div className="container">
    <h1>About Me</h1>
    <div className="stack-container">
    
   
       <div>
           <h2 className="tech-stack" style={{ color: "green" }}> My Tech Stack </h2>
       </div>
  <div className=" text-center skills">
             <div className="skill-card main">Software Development</div>
             <div className="skill-card">Javascript/TypeScript</div>
             <div className="skill-card">HTML&CSS</div>
             <div className="skill-card">Python</div>
             <div className="skill-card">React js</div>
             <div className="skill-card">Django</div>
             <div className="skill-card">Node Js & The Express Framework</div>
             <div className="skill-card">PostgreSQL/MySQL
          </div>
       </div>
    </div>
    </div>

      </div>
   























         
  )
}

export default About