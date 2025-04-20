import React from 'react'
import spoon from "../style/assets/spoon.png";
import "../style/Testimony.css"
import customer1 from "../style/assets/c1.png";
import customer2 from "../style/assets/c2.png";
import customer3 from "../style/assets/c3.png";
import customer4 from "../style/assets/c4.png";
import quote from "../style/assets/quote.png";
const Testimonysection = () => {
  return (
    <div className='testimonysection'>
        <div className='testimonyheader'>
            <p>Testimony</p>
            <img src={spoon} alt='spoon image' />
            <h1>Happy customers</h1>

        </div>
        <div className='testimony'>
            <div>
                <img src={customer1} alt='customer1'/>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                
                <img src={quote} alt='quote'/>
                <p>Wade Warren</p>
                <p>Sommelier</p></div>
            </div>
            <div>
                <img src={customer2} alt='customer2'/>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                
                <img src={quote} alt='quote'/>
                <p>Jane Cooper</p>
                <p>Chef</p></div>
            </div>
            <div>
                <img src={customer3} alt='customer3'/>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                
                <img src={quote} alt='quote'/>
                <p>Robert Fox</p>
                <p>chef</p></div>
            </div>
            <div>
                <img src={customer4} alt='customer4'/>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                
                <img src={quote} alt='quote'/>
                <p>Brooklyn Simmons</p>
                <p>Caterer</p></div>
            </div>
        </div>
        
    </div>
  )
}

export default Testimonysection