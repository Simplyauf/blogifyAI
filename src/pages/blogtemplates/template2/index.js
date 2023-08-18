import React, { useRef } from "react";
import Search from "@/assets/search 04.svg";

import DownArrow from "@/assets/direction-down 01.svg";
import ArrowLeft from "@/assets/arrow left2.svg";
import ArrowtRight from "@/assets/arrow right2.svg";
import { Autoplay, Navigation, Pagination, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HeroBlogTemplate from "@/assets/heroBlogTemplate2.png";

import Share from "@/assets/share2.svg";
import Image from "next/image";

import { Header } from "../../../components/blogTemplates/template2/header";
import { SingleHeroSection } from "../../../components/blogTemplates/template2/singleHeroSection";
import { SinglerecentPost } from "../../../components/blogTemplates/template2/singlerecentPost";
import {
  popularPost,
  RecentpostArr,
  sportsArr,
  TrendingPost,
} from "../../../components/blogTemplates/recentPostsArr";

import { SinglePopularPost } from "../../../components/blogTemplates/template2/singlePopularPost";
import { SingleCategoryHorizontal } from "../../../components/blogTemplates/template2/singleCategoryHorizontal";
import { Footer } from "../../../components/blogTemplates/template2/footer";
import Link from "next/link";

const Template2 = () => {
  const sliderHeroRef = useRef();
  const sliderTrendingRef = useRef();

  return (
    <section className="w-full bg-Brand/Surface/surface-50 min-h-screen ">
      <Header />
      <Swiper
        sty
        modules={[Autoplay, Navigation, Pagination, A11y, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(it) => (sliderTrendingRef.current = it)}
        onSlideChange={() => console.log("slide change")}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#E39F17",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        <SwiperSlide className="">
          {" "}
          <SingleHeroSection />
        </SwiperSlide>
        <SwiperSlide className="">
          {" "}
          <SingleHeroSection />
        </SwiperSlide>
        <SwiperSlide className="">
          {" "}
          <SingleHeroSection />
        </SwiperSlide>
      </Swiper>

      {/* news section */}
      <section className="w-full mt-[56px]  pb-[72px] lg:px-[50px] px-[4%] xl:px-[120px] 2xl:px-[250px] ">
        <h2 className="font-DarkerGrotesque text-[42px]  leading-[50px] font-bold text-[#00000]">
          Recent posts
        </h2>
        <div className="w-full mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[37px] 2xl:grid-cols-4 grid ">
          {RecentpostArr.map((post, index) => {
            return <SinglerecentPost key={index} imageLink={post.image} />;
          })}
        </div>
      </section>
      <div className="w-full mt-6 lg:pl-[50px] px-[4%] lg:pr-0 xl:pl-[120px] 2xl:pl-[250px]">
        <h2 className="font-DarkerGrotesque text-[42px]  leading-[50px] font-bold text-[#00000]">
          Popular posts
        </h2>{" "}
        <div className="mt-8 w-full ">
          <Swiper
            className="h-[800px] sm:h-[720px]"
            modules={[Autoplay, Navigation, Pagination, A11y, EffectFade]}
            spaceBetween={32}
            pagination={{ clickable: true }}
            slidesPerView={1}
            visibilityFullFit={true}
            breakpoints={{
              1024: { slidesPerView: 1.3 },
            }}
            autoResize={false}
            // navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            fadeEffect={{ crossFade: true }}
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#E39F17",
              "--swiper-pagination-bullet-size": "12px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
          >
            {popularPost.map((post, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="w-full sm:w-[800px] lg:w-full"
                >
                  <SinglePopularPost imageLink={post.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <section className="w-full mt-[72px]  pb-[58px] lg:px-[50px] px-[4%] xl:px-[120px] 2xl:px-[250px] grid grid-cols-1 lg:grid-cols-2 gap-[27px]">
        <div className="flex flex-col gap-8">
          <h2 className="font-DarkerGrotesque text-[34px]  leading-[42px] font-bold text-[#00000]">
            Sports
          </h2>
          {sportsArr.map((post, index) => {
            return (
              <SingleCategoryHorizontal
                key={index}
                imageLink={post.image.src}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="font-DarkerGrotesque text-[34px]  leading-[42px] font-bold text-[#00000]">
            Business
          </h2>
          {sportsArr.map((post, index) => {
            return (
              <SingleCategoryHorizontal
                key={index}
                imageLink={post.image.src}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Template2;
