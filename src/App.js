import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Siteheadersection from './section/Siteheadersection';
import Aboutsection from "./section/Aboutsection"
import Nopage from './pages/Nopage';
import Reservation from './section/Reservation';
import Menusection from "./section/Menusection"
import Chefsection from "./section/Chefsection"
import Testimonysection from "./section/Testimonysection"
import Videosection from "./section/Videosection"
import Blogsection from "./section/Blogsection"
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Siteheadersection" element={<Siteheadersection />} />
          <Route path='/Aboutsection' element={<Aboutsection/>}/>
          <Route path="/Reservation" element={<Reservation/>}/>
          <Route path="/Menusection" element={<Menusection/>}/>
          <Route path='/Chefsection' element={<Chefsection/>}/>
          <Route path='/Testimonysection' element={<Testimonysection/>}/>
          <Route path='/Videosection' element={<Videosection/>}/>
          <Route path='Blogsection' element={<Blogsection/>}/>
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
