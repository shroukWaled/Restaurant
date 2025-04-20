import React from 'react'
import "../style/Reservation.css"
import spoon from "../style/assets/spoon.png"
const Reservation = () => {
  return (
    <div className='reservation'>
        <div className='reservation-container'>
            <div className='header'>
                <p>reservations</p>
                <img src={spoon} alt='spoon image'/>
                <h1>book a table</h1>
            </div>
            <div className='form-container'>
            <form>
                <div className='select'>
                    <select name='person'>
                    <option value="1person">1 person</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                    <option value="four">four</option>
                </select>
                <select name='date'>
                    <option >12/5/2025</option>
                    <option >25/5/2025</option>
                    <option >28/5/2025</option>
                    <option >29/5/2025</option>
                </select>
                <select name='time'>
                    <option >9:00Am</option>
                    <option >11:00Am</option>
                    <option >12:00Am</option>
                    <option >11:00pm</option>
                </select></div>
                <button type="submit" className='submit'>book Now</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Reservation;