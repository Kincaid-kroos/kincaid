

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/Footer.css';

const Footer = () => {
  const timeline = new Date().getFullYear();

  return (
    
    <div className='footercontainer'>

      <div className='footer footerdivcss'>
        <footer className='footercss text-center '>
          Copyright©{timeline}: || All rights reserved
        </footer>
        <ul className='socio-icons no-bullets text-center'>
          <li> <a href='https://www.facebook.com/kinc.kroos'>< FacebookIcon className="icon-color" /></a></li>
          <li> <a href='https://twitter.com/Kincaid_Kroos'><TwitterIcon  className="icon-color"/></a></li> 
          <li> <a href='https://www.linkedin.com/in/kiprotich-kincaid-b50664203/'><LinkedInIcon  className="icon-color"/></a></li>
          <li> <a href='https://github.com/Kincaid-kroos/kincaid'> <GitHubIcon className="icon-color"/></a></li>
        </ul>

      </div>
    </div>
  );
};

export default Footer;
