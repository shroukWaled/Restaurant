import React, { useEffect, useState } from 'react';
import spoon from "../style/assets/spoon.png";
import drink from "../style/assets/lemon.png";
import "../style/Menusection.css";
import axios from 'axios';

const Menusection = () => {
  const url_path = 'http://localhost:3000/wines';
  const coctail_url="http://localhost:3000/cocktails";
  const [wines, setWines] = useState([]);
  const [cocktails,setCoctails]=useState([]);

  useEffect(() => {
    axios.get(url_path)
      .then((res) => {setWines(res.data); })
      .catch(err => console.log(err));
  }, []);
  useEffect(()=>{
  axios.get(coctail_url)
  .then((res)=>{setCoctails(res.data);})
  .catch((err)=>console.log(err));

  },[]);

  return (
    <div className='menusection'>
      <div className='menuheader'>
        <p>Menu that fits you palette</p>
        <img src={spoon} alt='spoon' />
        <h1>Today’s Special</h1>
      </div>
      <div className='menucontent'>
        <div className='wines'>
          <h1 className='h1style'>Wine & Beer</h1>
          {wines.map((wine) => (
            <div className='wine' key={wine.ID}>
              
              <div className='firstrow'>
                <p className='title'>{wine.title}</p>
                <div className='seperator'></div>
                <p className='price'>${wine.price}</p>
              </div>
              <p className='tag'>{wine.tags}</p>
            </div>
          ))}
        </div>
        <div className='imagedrink'>
          <img src={drink} alt='drink' />
        </div>
        <div className='cocktails'>
          <h1 className='h1style'>Cocktails</h1>
          {cocktails.map((cocktail)=>(
            <div className='cocktail' key={wines.id}>
               <div className='firstrow'>
                <p className='title'>{cocktail.title}</p>
                <div className='seperator'></div>
                <p className='price'>${cocktail.price}</p>
            </div>
            <p className='tag'>{cocktail.tags}</p>
          </div>
       
          ))}
         
        </div>
        </div>
      
      
      <button className='button-style'>View More</button>
    </div>
  );
};

export default Menusection;
