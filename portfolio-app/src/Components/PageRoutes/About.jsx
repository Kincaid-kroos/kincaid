 import "../Styles/About.css";
import { BiPen } from 'react-icons/bi';
import { CiDatabase } from 'react-icons/ci';
import { MdOutlineDesignServices } from 'react-icons/md';
import { IoMdCodeWorking } from 'react-icons/io';
import SkillBar from "../Hocs/Skillbar";

const About = () => {
   
  const skills = [
      {skill:'JavaScript', percentage: 80},
      {skill:'Python', percentage: 80},
      {skill:'TypeScript', percentage: 70},
      {skill:'ReactJS', percentage: 80},
      {skill:'Django', percentage: 80},
      {skill:'HTML', percentage: 95},
      {skill:'CSS', percentage: 90},
      {skill:'Git', percentage: 95},
      {skill:'PostgreSQL', percentage: 80},
      {skill:'MYSQL', percentage: 80},
      {skill:'NextJS', percentage: 70},
      {skill:'AWS', percentage: 70},


  ]

  return (
    <div>
          <h1 className="mt-30">About <b className="bold-header">Me</b></h1>
      <div>
        <p className="about-me">
          <p className="about-me-1">Who am I ?</p>
          I&apos;m a Software developer and suddenly Data analyst<br/>
          with a Bsc in Computer Science and Statistics.<br/> I have worked
          with various tools and technologies <br/>in both fields to build 
          innovative and impactful solutions.<br/> Above all i&apos;m a lifelong 
          tech learner and committed to<br/> constantly improving my skills 
          and contributing<br/> to development of tech community.
        </p>
      </div>

      <div>
        <h2 className="tech-stack-header">Tech Stack</h2>
       <div className="stack">
       <p className="stack-header">Stack:</p>
       <p className="stack-p">
       JavaScript, React Js, Python, Django, TypeScript, Bootstrap, RESTful APIs, GraphQL, <br/> 
       Tailwind, NextJS, MySQL, PostgreSQL, CSS, HTML, Git, AWS, SPSS, Excel, SQL.
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

      

    
    <div>
    <h2 className="skills-header">Skills</h2>
      {skills.map((skillset,index) => (
        <SkillBar key={index} skill={skillset.skill} percentage={skillset.percentage} />
      ))}
    

      </div>
   























         </div>
  )
}

export default About