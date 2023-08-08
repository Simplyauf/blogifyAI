import React from "react";
import { Footer } from "@/src/components/blogTemplates/template1/footer";
import { Header } from "../../../components/blogTemplates/template1/header";
import ArrowLeft from "@/assets/arrow left2.svg";
import BlogTemplate1 from "@/assets/Template1Hero.jpeg";
import ArrowRight from "@/assets/arrow right2.svg";
import { Autoplay, Navigation, Pagination, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Search from "@/assets/search 04.svg";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SingleNewsImg from "@/assets/singleNewsImg.jpeg";
import "swiper/css/scrollbar";
import { useRef } from "react";
import Image from "next/image";

import { SingleCategory } from "@/src/components/blogTemplates/template1/singleCategory";
import { Newsletter } from "@/src/components/blogTemplates/template1/newsletter";

const About = () => {
  const sliderRef = useRef();
  console.log(BlogTemplate1);
  return (
    <section className="w-full bg-Brand/Surface/surface-50 min-h-screen ">
      <Header />
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(it) => (sliderRef.current = it)}
        onSlideChange={() => console.log("slide change")}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        <SwiperSlide className="">
          <div
            style={{
              background: `url(${BlogTemplate1.src})`,
              backgroundSize: "cover",
            }}
            className="bg-no-repeat  w-full h-[calc(100vh-182px)] flex items-center  relative"
          >
            <div className="flex justify-between items-center w-full px-[4%] lg:px-[80x] xl:px-[109px]">
              <div
                className="rounded-[50%] p-3 border-2 flex justify-center items-center border-l-Brand/Surface/surface-50 w-[50px] h-[50px] cursor-pointer"
                onClick={() => sliderRef.current?.slidePrev()}
              >
                <ArrowLeft />
              </div>
              <h3 className="font-DarkerGrotesque leading-normal lg:leading-[128px] font-bold tracking-[-0.8px]  text-[56px] BigMobile:text-[72px] sm:text-[96px] mt-[-10px] text-Brand/Text/Text-100">
                About
              </h3>
              <div
                className="rounded-[50%] p-3 border-2 flex justify-center items-center border-l-Brand/Surface/surface-50 w-[50px] h-[50px] cursor-pointer"
                onClick={() => sliderRef.current?.slideNext()}
              >
                <ArrowRight />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            style={{
              background: `url(${BlogTemplate1.src})`,
              backgroundSize: "cover",
            }}
            className="bg-no-repeat  w-full h-[calc(100vh-182px)] flex items-center  relative"
          >
            <div className="flex justify-between items-center w-full px-[4%] lg:px-[80x] xl:px-[109px]">
              <div
                className="rounded-[50%] p-3 border-2 flex justify-center items-center border-l-Brand/Surface/surface-50 w-[50px] h-[50px] cursor-pointer"
                onClick={() => sliderRef.current?.slidePrev()}
              >
                <ArrowLeft />
              </div>
              <h3 className="font-DarkerGrotesque leading-normal lg:leading-[128px] font-bold tracking-[-0.8px]  text-[56px] BigMobile:text-[72px] sm:text-[96px] mt-[-10px] text-Brand/Text/Text-100">
                About
              </h3>
              <div
                className="rounded-[50%] p-3 border-2 flex justify-center items-center border-l-Brand/Surface/surface-50 w-[50px] h-[50px] cursor-pointer"
                onClick={() => sliderRef.current?.slideNext()}
              >
                <ArrowRight />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            style={{
              background: `url(${BlogTemplate1.src})`,
              backgroundSize: "cover",
            }}
            className="bg-no-repeat  w-full h-[calc(100vh-182px)] flex items-center  relative"
          >
            <div className="flex justify-between items-center w-full px-[4%] lg:px-[80x] xl:px-[109px]">
              <div
                className="rounded-[50%] p-3 flex justify-center items-center border-2 border-l-Brand/Surface/surface-50 w-[50px] h-[50px] cursor-pointer"
                onClick={() => sliderRef.current?.slidePrev()}
              >
                <ArrowLeft />
              </div>
              <h3 className="font-DarkerGrotesque leading-normal lg:leading-[128px] font-bold tracking-[-0.8px]  text-[56px] BigMobile:text-[72px] sm:text-[96px] mt-[-10px] text-Brand/Text/Text-100">
                About
              </h3>
              <div
                className="rounded-[50%] p-3 border-2 flex justify-center items-center border-l-Brand/Surface/surface-50 w-[50px] h-[50px] cursor-pointer"
                onClick={() => sliderRef.current?.slideNext()}
              >
                <ArrowRight />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <section className="w-full mt-[56px] 2xl:px-[150px] pb-[132px] lg:px-[50px] px-[4%] xl:px-[112px] ">
        <div className="w-full mt-6 grid-cols-1 lg:grid-cols-[70%_30%] 2xl:grid-cols-[65%_35%] 2xl:gap-12 grid gap-8 ">
          <article className="mt-[46px] w-full flex flex-col">
            <div className=" h-[471px] pb-0 bg-Brand/Primary/Primary-100">
              <Image
                src={SingleNewsImg}
                alt="blog-image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover "
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h2 className="text-[#000]  font-DarkerGrotesque text-[40px] lg:text-[60px] font-bold leading-[50x] lg:leading-[88px] tracking-[-0.7px]">
              We design and build ultimate{" "}
            </h2>
            <div className="mt-8 pb-8 post-content w-full font-Mulish text-[20px] font-medium leading-[160%] text-[#161B3D] flex flex-col gap-8">
              <p>
                <span style={{ fontSize: "18px" }}>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  Donec quis commodo mi. Nunc consectetur sollicitudin leo, et
                  bibendum nibh rhoncus eget. Integer at consectetur elit.
                  Praesent sit amet lacinia ex. Nam pretium ligula mauris, vitae
                  consectetur elit posuere et. Aenean eu commodo leo. Etiam
                  maximus, dui ac sodales molestie, felis lectus bibendum est,
                  in eleifend tellus mi vel magna. Vestibulum rutrum lacus ex,
                  eget posuere urna ultricies vitae. Vivamus luctus diam ex, id
                  blandit leo pellentesque ac. Ut maximus nisi sed erat commodo,
                  sed convallis massa scelerisque. Praesent eget tortor gravida,
                  ultrices nulla vitae, mattis augue.&nbsp;
                </span>
              </p>
              <p>
                <span style={{ fontSize: "20px" }}>
                  <strong>Nullam et ullamcorper quam, id laoreet erat.</strong>
                </span>
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. &nbsp;consectetur elit. Praesent sit amet
                  lacinia ex. Nam pretium ligula mauris, vitae consectetur elit
                  posuere et. Aenean eu commodo leo. Etiam maximus, dui ac
                  sodales molestie, felis lectus bibendum est, in eleifend
                  tellus mi vel magna. Vestibulum rutrum lacus ex, eget posuere
                  urna ultricies vitae. Vivamus luctus diam ex, id blandit leo
                  pellentesque ac.
                </span>
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  Organically grow the holistic world view of disruptive
                  innovation via workplace diversity and empowerment Donec quis
                  commodo mi. Nunc consectetur sollicitudin leo, et bibendum
                  nibh rhoncus eget. Integer at consectetur elit. Praesent sit
                  amet lacinia ex. Nam pretium ligula mauris, vitae consectetur
                  elit posuere et.
                </span>
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  Donec quis commodo mi. Nunc consectetur sollicitudin leo, et
                  bibendum nibh rhoncus eget. Integer at consectetur elit.
                  Praesent sit amet lacinia ex. Nam pretium ligula mauris, vitae
                  consectetur elit posuere et. Aenean eu commodo leo. Etiam
                  maximus, dui ac sodales molestie, felis lectus bibendum est,
                  in eleifend tellus mi vel magna. Vestibulum rutrum lacus ex,
                  eget posuere urna ultricies vitae. Vivamus luctus diam ex, id
                  blandit leo pellentesque ac. Ut maximus nisi sed erat commodo,
                  sed convallis massa scelerisque. Praesent eget tortor gravida,
                  ultrices nulla vitae, mattis augue.&nbsp;
                </span>
              </p>
              <p>
                <span style={{ fontSize: "20px" }}>
                  <strong>Nullam et ullamcorper quam, id laoreet erat.</strong>
                </span>
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  Donec quis commodo mi. Nunc consectetur sollicitudin leo, et
                  bibendum nibh rhoncus eget. Integer at consectetur elit.
                  Praesent sit amet lacinia ex.&nbsp;
                </span>
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  Donec quis commodo mi. Nunc consectetur sollicitudin leo, et
                  bibendum nibh rhoncus eget. Integer at consectetur elit.
                  Praesent sit amet lacinia ex. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Maecenas imperdiet mattis ante,
                  in posuere odio aliquam sed. Suspendisse lectus odio. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  imperdiet mattis ante,&nbsp;
                </span>
              </p>
            </div>
          </article>
          <section className="flex w-full flex-col-reverse lg:flex-col gap-8 items-start">
            <Newsletter />
            <div className="flex w-full flex-col gap-4 items-start">
              <h2 className="font-DarkerGrotesque text-[32px]  leading-10 font-bold text-[#00000]">
                Categories
              </h2>
              <SingleCategory />
              <SingleCategory />
              <SingleCategory />
              <SingleCategory />
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default About;
