import{Link,NavLink} from 'react-router-dom';
import { useState } from 'react';
import '../Styles/Navbar.css';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mouseOver,setMouseOver] = useState(false);
  const[sectionClick, setSectionClick] = useState(false)
  

  const mouseOverHandler = () => {
    setMouseOver(true);
  };
  const mouseOutHandler = () => {
    setMouseOver(false)
  }
  //clicks 
const handleSectionClick = () => [
  setSectionClick(true)
]

  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (


    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand name-color" to="/">
          Kiprotich Kincaid
        </Link>
            <button className="navbar-toggler" 
                type="button"
                onClick={handleToggleClick}
                data-bs-toggle="collapse" 
                aria-expanded={isNavOpen} 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>

    <div className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`} >
        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${mouseOver ? 'decoration' : ''}`}
                      onMouseOver={mouseOverHandler}
                      onMouseOut={mouseOutHandler}>
            <li className= "nav-item .text-warning-emphasis">
               <NavLink className="nav-link home-link  text-light" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item" onClick={handleSectionClick} style={{ color: sectionClick ? 'blue' : 'inherit' }}>
                        <NavLink className="nav-link text-light" to="/about" >About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light text-capitalize" to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/resume" >Resume</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light " to="/contact">Contact</NavLink>
            </li>
          </ul> 
          <p className="styled-contact">  <SettingsPhoneIcon className='call-settings' />  +254 701 218 138</p>
        </div>
               
        
      </div>
      
    </nav>
    
    
    
  )
}

export default Navbar;