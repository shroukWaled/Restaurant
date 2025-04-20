import React from 'react'
import { Link } from 'react-router'
import "../style/Aboutsection.css"
import knife from "../style/assets/knife.png"
import spoon from "../style/assets/spoon.png";
const Aboutsection = () => {
  return (
    <div className='aboutsection'>
        <div className='container'>
            <div className='About'>
                <h1>About Us</h1>
                <img src={spoon} alt="spoon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <Link to="/About"> <button>know more</button></Link>
            </div>
            <img src={knife} alt="knife image" className='knife'/>
            <div className='history'>
                <h1>Our History</h1>
                <img src={spoon} alt="spoon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <Link to="/Service"> <button> know more</button></Link>
            </div>
        </div>
      
    </div>
  )
}

export default Aboutsection
