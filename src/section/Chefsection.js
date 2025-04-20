import React from 'react'
import "../style/Chefsection.css"
import quote from "../style/assets/quote.png"
import spoon  from "../style/assets/spoon.png"
import chef from "../style/assets/chef.png"
import sign from "../style/assets/sign.png"
const Chefsection = () => {
  return (
    <div className='Chefsection'>
        <div className='left'>
            <img src={chef} about='' alt='chef'/>
        </div>
        <div className='right'>
            <div>
                <p>Chef’s Word</p>
                <img src={spoon}  alt='spon'/>
                <h1>What we believe in</h1>
            </div>
            <div>
               
                <p> <img src={quote} alt='quote'/>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
            </div>
            <div>
                <p>Kevin Luo</p>
                <p>Chef & Founder</p>
                <img src={sign} alt='sign'/>
            </div>
        </div>
    </div>
  )
}

export default Chefsection