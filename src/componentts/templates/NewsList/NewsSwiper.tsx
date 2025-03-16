"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

import Image from "next/image";
import Link from "next/link";
import { placeholderImage } from "@/utils/constants";
import { ArticleProps } from "@/utils/index.types";

const NewsSwiper = ({news=[]}) => {

    return (
        <>
        <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        >
        {news?.map((article:ArticleProps) => {
          
                const title = article?.title;
                const description = article?.description || article?.abstract;
                const urlToImage = article?.urlToImage || article?.media?.[0]?.["media-metadata"]?.[2]?.url || article?.image_url;
                const url = article?.url;
            return(
                <SwiperSlide key={title} className="news-card">
                <Link href={url?? '/'} target="_blank">
                            <div  className="article-card border-b-1 boder py-2 border-gray-400 my-2 flex gap-2 flex-col h-">
                            <Image width={850} height={400} src={urlToImage ?? placeholderImage} alt={title ?? "Image"} />
                            <h3 title={title} className="line-clamp-2">{title}</h3>
                            <p title={description} className="line-clamp-2">{description}</p>
                            </div>
                    
                  </Link>
                </SwiperSlide>
            )})}
        </Swiper>
        </>
        
    )
}

export default NewsSwiper;