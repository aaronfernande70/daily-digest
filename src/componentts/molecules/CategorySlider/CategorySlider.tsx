"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import CategoryTile from "./CategoryTile";

const CategorySlider = () => {
    const categories = [
        {name: "New York Times", val:"NYT"} ,
        {name: "News API", val:"NewsAPI"},
        {name: "The News Data", val:"TND"},
    ]


  return (
    <div className="flex justify-center gap-4 px-2 pt-2 broder border-t border-gray-500 md:p-4">
      <div
className="flex gap-6 overflow-x-auto scrollbar-hide justify-between md:gap-12"
      >
        {categories.map((category, index) => (

          // <SwiperSlide key={index}>
            <CategoryTile key={index} category={category}/>
          // </SwiperSlide>
        ))} 

        
      </div>
    </div>
  );
};

export default CategorySlider;
