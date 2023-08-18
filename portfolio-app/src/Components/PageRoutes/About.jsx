 import "../Styles/About.css";
import { BiPen } from 'react-icons/bi';
import { CiDatabase } from 'react-icons/ci';
import { MdOutlineDesignServices } from 'react-icons/md';
import { IoMdCodeWorking } from 'react-icons/io';

const About = () => {
  return (
    <div>
    <div className="container">
    <h1>About Me</h1>
    <div className="stack-container">
   
       <div>
           <h2 className="tech-stack" style={{ color: "green" }}> My Tech Stack </h2>
       </div>
  <      div className=" text-center skills">
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

 <div className="skillset" >
  <div className="skillset-1">
    <div className="skillset-2 text-center ">
          <h1 className="skillset-header">Skillset</h1>
          <p
            className="skillset-p text-light"
            style={{ fontSize: "25px", lineHeight: "150%" }}
          >
            With skills in over 4 different fields Below, <br/>
            I can pretty much take on any challenge.
          </p>
        </div>
        <div className="skillset-group">
          <div className="group">
            <MdOutlineDesignServices
              size={5}
              color="yellow"
              className="group-hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Frontend Developer
            </h2>
            <p
              className="text-[#5b6876]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              I have a strong understanding of the frontend development process
              and I can build any website from scratch. I have experience with
              HTML, CSS, JavaScript, React, Nextjs, and Tailwind.
            </p>
          </div>
          <div className="mt-4 group">
            <IoMdCodeWorking
              size={60}
              color="#4c24dd"
              className="group-hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Backend Developer
            </h2>
            <p
              className="text-[#5b6876]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              I have a strong understanding of the backend development process
              and I can build any website from scratch. I have experience with
              Ruby, Rails, Postgresql, and Rspec.
            </p>
          </div>
        </div>
        <div>
          <div className="group">
            <CiDatabase
              size={60}
              color="#4c24dd"
              className="group-hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Database design
            </h2>
            <p
              className="text-[#5b6876]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              I have a strong understanding of the database design process and I
              can build any database from scratch. I have experience with
              Postgresql.
            </p>
          </div>
          <div className="mt-8 group">
            <BiPen
              size={60}
              color="#4c24dd"
              className="group-hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Content Writing
            </h2>
            <p
              className="text-[#5b6876]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              I have a strong understanding of the content writing process and I
              can write any content from scratch. I have experience with writing
              articles, blogs, and essays.
            </p>
          </div>
        </div>
      </div>
   

</div>
























    </div>

  )
}

export default About