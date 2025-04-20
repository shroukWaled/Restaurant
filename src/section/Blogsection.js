// import React from 'react'
// import spoon from "../style/assets/spoon.png"
// import { Swiper, SwiperSlide } from "swiper/react";
// import "../style/Blogsection.css"
// import "swiper/swiper-bundle.min.css";
// import b1 from "../style/assets/b1.png"
// import b2 from "../style/assets/b2.png"
// import b3 from "../style/assets/b3.png"
// import b4 from "../style/assets/b4.png"
// import b6 from "../style/assets/b6.png"
// import b7 from "../style/assets/b7.png"
// const Blogsection = () => {
//   return (
//     <div className='blogsection'>
//         <div className='blogheader'>
//             <p>blogs</p>
//             <img src={spoon} alt='sponn'/>
//             <h1>gerícht updates</h1>
//         </div>
//         <div className='blogs'>
//             <div className='blog'>
//               <img src={b1} alt='blog item'/>
//               <p> resturant / admin</p>
//               <h2>15 Things You Need To Know About Food Restaurant</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
//               <p>read more</p>   
//             </div>
//             <div className='blog'>
//               <img src={b2} alt='blog item'/>
//               <p> resturant / admin</p>
//               <h2>15 Things You Need To Know About Food Restaurant</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
//               <p>read more</p>   
//             </div>
//             <div className='blog'>
//               <img src={b3} alt='blog item'/>
//               <p> resturant / admin</p>
//               <h2>15 Things You Need To Know About Food Restaurant</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
//               <p>read more</p>   
//             </div>
//             <div className='blog'>
//               <img src={b4} alt='blog item'/>
//               <p> resturant / admin</p>
//               <h2>15 Things You Need To Know About Food Restaurant</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
//               <p>read more</p>   
//             </div><div className='blog'>
//               <img src={b7} alt='blog item'/>
//               <p> resturant / admin</p>
//               <h2>15 Things You Need To Know About Food Restaurant</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
//               <p>read more</p>   
//             </div><div className='blog'>
//               <img src={b6} alt='blog item'/>
//               <p> resturant / admin</p>
//               <h2>15 Things You Need To Know About Food Restaurant</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
//               <p>read more</p>   
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Blogsection;

import React from "react";
import spoon from "../style/assets/spoon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/Blogsection.css";
import b1 from "../style/assets/b1.png";
import b2 from "../style/assets/b2.png";
import b3 from "../style/assets/b3.png";
import b4 from "../style/assets/b4.png";
import b6 from "../style/assets/b6.png";
import b7 from "../style/assets/b7.png";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Blogsection = () => {
  const blogs = [
    { img: b1, title: "15 Things You Need To Know About Food Restaurant" },
    { img: b2, title: "15 Things You Need To Know About Food Restaurant" },
    { img: b3, title: "15 Things You Need To Know About Food Restaurant" },
    { img: b4, title: "15 Things You Need To Know About Food Restaurant" },
    { img: b7, title: "15 Things You Need To Know About Food Restaurant" },
    { img: b6, title: "15 Things You Need To Know About Food Restaurant" },
  ];

  return (
    <div className="blogsection">
      <div className="blogheader">
        <p>blogs</p>
        <img src={spoon} alt="spoon" />
        <h1>gerícht updates</h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="blog">
              <img src={blog.img} alt="blog item" />
              <p>restaurant / admin</p>
              <h2>{blog.title}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                pharetra adipiscing ultrices vulputate posuere tristique. In sed
                odio nec aliquet eu proin mauris et.
              </p>
              <p>read more</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blogsection;
