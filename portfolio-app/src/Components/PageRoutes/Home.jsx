import image from "../images/Kincaid.jpg";
import "../Styles/Home.css";


const Home = () => {


  return (
<div className="home-page">
  <section className="about-section">  
    <img src={image}  alt='Kincaid' className="image-desc"/>
    <div className="about-me-text">
    <p className="styled-text-1">Hello 👋,</p>
    <p className="styled-text-2">I`m Kiprotich Kincaid</p>
    <p className="styled-text-2">A full stack software Developer<br/> and a Data Analyst</p>
    <p className="styled-text-3">
          With a combination of both class and self-taught experience,<br/>
          i have skills and passion to build robust,and easily maintainable<br/>
          web applications and Analyzing big data.<br/>
          Committed to staying current with the latest technologies<br /> to deliver outstanding solutions<br/>
         & open to learning from industry experts. <br/>
    </p>
</div>
  </section>
</div>

   
  )
}

export default Home