

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/Instagram';
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
          <li> <a href='https://www.facebook.com/kinc.kroos'><FacebookIcon /></a></li>
          <li> <a href='https://twitter.com/kiprotichkinca1'><TwitterIcon /></a></li> 
          <li><a href='www.linkedin.com/in/kiprotich-kincaid-b50664203'><LinkedInIcon /></a></li>
          <li><GithubIcon /></li>
        </ul>

      </div>
    </div>
  );
};

export default Footer;
