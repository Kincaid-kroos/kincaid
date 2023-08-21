
import '../Styles/Footer.css';
import '../Styles/Contacts.css';
const Contact = () => {
  return (
    <div className="contact-container">
        <hr className="my-0 hr-line" />
      <h1>Contact <b className='bold-contact'>Me</b></h1>
      <section className='styled-section'>
        <div className="contact-info">
          <p className="label">Email:</p>
          <p className="value">kiprotichkincaid@gmail.com</p>
        </div>
      </section>
      <section>
        <div className="contact-info">
          <p className="label">Mobile No:</p>
          <p className="value">+254 701 218 138</p>
        </div>
      </section>
      <section>
        <div className="contact-info">
          <p className="label">Location:</p>
          <p className="value">Nairobi, Kenya</p>
        </div>
      </section>
      <hr className="my-4 hr-line hr-line-2" />
  
    
    
  </div>
  )
}

export default Contact