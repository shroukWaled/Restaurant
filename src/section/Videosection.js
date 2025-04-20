import React from 'react'
import meal from "../style/assets/meal.mp4"
import "../style/Videosection.css"
const Videosection = () => {
  return (
    <div className='videosection'>
        <div className='videostyle'><video src={meal}/></div>
    </div>
  )
}

export default Videosection;