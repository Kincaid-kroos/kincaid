import{Link,NavLink} from 'react-router-dom';
import { useState} from 'react';
import '../Styles/Navbar.css';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import { Modal } from '@mui/material';

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  

  const openToggle = () => {
    setIsNavOpen(true);
  };

  const closeToggle = () => {
    setIsNavOpen(false);
  };


  return (


    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand name-color" to="/">
          Kiprotich <b>Kincaid</b>
        </Link>
            <button className="navbar-toggler" 
                type="button"
                onClick={openToggle}
                data-bs-toggle="collapse" 
                aria-expanded={isNavOpen} 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> 
             </button>

      <div className="collapse navbar-collapse" >
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className= "nav-item .text-warning-emphasis">
               <NavLink className="nav-link text-hover" aria-current="page" to="/" >HOME</NavLink>
            </li>
            <li className="nav-item">
                        <NavLink className="nav-link text-hover " to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-hover " to="/projects">PROJECTS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-hover " to="/resume" >RESUME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-hover" activeClassName="active-nav-link" to="/contact">CONTACT</NavLink>
            </li>
          </ul> 
          <p className="styled-contact">  <SettingsPhoneIcon className='call-settings' />  +254 701 218 138</p>
        </div>
       


            
    <Modal open={isNavOpen} onClose={closeToggle}>
      <div className="modal-container">   
        <div className="modal-content">
           <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 `}>
            <li className= "nav-item .text-warning-emphasis">
               <NavLink className="nav-link " aria-current="page" to="/" onClick={closeToggle}>Home</NavLink>
            </li>
            
            <li className="nav-item">
                        <NavLink className="nav-link " to="/about" onClick={closeToggle}>About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " to="/projects" onClick={closeToggle}>Projects</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " to="/resume" onClick={closeToggle}>Resume</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " to="/contact" onClick={closeToggle}>Contact</NavLink>
            </li>

          </ul> 
          <p className="styled-contact">  <SettingsPhoneIcon className='call-settings' />  +254 701 218 138</p>
      
        </div>
        </div>
        </Modal> 
        
     
      </div>
       
    </nav>
    
    
    
  )
}

export default Navbar;