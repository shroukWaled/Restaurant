import React from 'react';
import "../style/Footer.css";
import Gericht from "../style/assets/gericht.png";
import spoon from "../style/assets/spoon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className='footer'>
     <div className='row'> 
       <div className='contact'>
        <h3>Contact Us</h3>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230</p>
        <p>+1 212-555-1230</p>
       </div>
       <div className='gericht'>
        <img src={Gericht} alt='gericht image'/>
        <p>“The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={spoon} alt='spoon image'/>
        <div className='icon'>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        </div>
       </div>
       <div className='houres'> 
        <h3>Working Hours</h3>
        <p>Monday-Friday:</p>
        <p>08:00 am -12:00 am</p>
        <p>Saturday-Sunday:</p>
        <p>07:00am -11:00 pm</p>
        </div>
        </div>
     <div className='copyright'>
      <p>© 2021 Geritcht. All Rights Reserved.</p>
     </div>
    </div>
  )
}

export default Footer
