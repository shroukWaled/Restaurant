import React from 'react'
import Siteheadersection from "../section/Siteheadersection"
import Aboutsection from '../section/Aboutsection';
import Reservation from '../section/Reservation';
import Menusection from '../section/Menusection';
import Chefsection from '../section/Chefsection';
import Testimonysection from "../section/Testimonysection"
import Videosection from "../section/Videosection"
import Blogsection from '../section/Blogsection';
const Home = () => {
  return (
    <div>
      <Siteheadersection/>
      <Aboutsection/>
      <Reservation/>
      <Menusection/>
      <Chefsection/>
      <Testimonysection/>
      <Videosection/>
      <Blogsection/>
    </div>
    
  )
}

export default Home;
