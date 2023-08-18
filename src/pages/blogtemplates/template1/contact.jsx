import React from "react";
import { Footer } from "@/src/components/blogTemplates/template1/footer";
import { Header } from "@/src/components/blogTemplates/template1/header";
import ArrowLeft from "@/assets/arrow left2.svg";
import BlogTemplate1 from "@/assets/Template1Hero.jpeg";
import Mail from "@/assets/mail notification.svg";
import Call from "@/assets/call.svg";
import ArrowRight from "@/assets/arrow right2.svg";
import { Autoplay, Navigation, Pagination, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Location from "@/assets/location.svg";
import "swiper/css/scrollbar";
import { useRef } from "react";

const Contact = () => {
  const sliderRef = useRef();
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
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${BlogTemplate1.src}), lightgray 0px -39.379px / 100% 249.653% `,
              // dhhdhdhd
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
                Contact
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
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${BlogTemplate1.src}), lightgray 0px -39.379px / 100% 249.653% `,
              // dhhdhdhd
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
                Contact
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
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${BlogTemplate1.src}), lightgray 0px -39.379px / 100% 249.653% `,
              // dhhdhdhd
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
                Contact
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
      <section className="mt-[120px] mx-auto 2xl:px-[250px] pb-[132px] lg:px-[50px] px-[4%] xl:px-[120px] w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center w-full">
          <div className="flex flex-col py-8 px-6 gap-6 bg-[#fff]  rounded-[8px]">
            <div className="rounded-[50%] bg-Brand/Text/Text-800 w-[56px] flex justify-center items-center h-[56px]">
              <Location />
            </div>
            <div>
              <h2 className="font-DarkerGrotesque text-[28px]  leading-[36px] font-bold text-[#00000]">
                Physical Address
              </h2>
              <div className="mt-[8px]">
                <p> 3481 Melrose Place</p>
                <p>Beverly Hills, CA 90210</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-8 px-6 gap-6 bg-[#fff]   rounded-[8px]">
            <div className="rounded-[50%] bg-Brand/Text/Text-800 w-[56px] flex justify-center items-center h-[56px]">
              <Mail />
            </div>
            <div>
              <h2 className="font-DarkerGrotesque text-[28px]  leading-[36px] font-bold text-[#00000]">
                Email Address
              </h2>
              <div className="mt-[8px]">
                <p>personal@gmail.com</p>
                <p>company gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-8 px-6 gap-6 bg-[#fff]   rounded-[8px]">
            <div className="rounded-[50%] bg-Brand/Text/Text-800 w-[56px] flex justify-center items-center h-[56px]">
              <Call />
            </div>
            <div>
              <h2 className="font-DarkerGrotesque text-[28px]  leading-[36px] font-bold text-[#00000]">
                Phone number
              </h2>
              <div className="mt-[8px]">
                <p>(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[120px] ">
          <form
            action=""
            className="w-full lg:w-[799px] mx-auto bg-[#fff] p-[12px] BigMobile:p-[32px] sm:p-[56px] gap-4 flex flex-col"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="name"
              className="w-full h-[50px] px-4 border-Brand/Surface/surface-800 border bg-Brand/Surface/surface-50 rounded-[8px]"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="email"
              className="w-full h-[50px] px-4 border-Brand/Surface/surface-800 border bg-Brand/Surface/surface-50 rounded-[8px]"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="subject"
              className="w-full h-[50px] px-4 border-Brand/Surface/surface-800 border bg-Brand/Surface/surface-50 rounded-[8px]"
            />
            <textarea
              name=""
              placeholder="Message"
              id=""
              cols="30"
              rows="10"
              className="h-[262px] w-full  px-4 border-Brand/Surface/surface-800 border bg-Brand/Surface/surface-50 rounded-[8px]"
            ></textarea>
            <button
              type="submit"
              className="w-[212px] h-[56px] rounded-[8px] bg-Brand/Text/Text-800 text-[20px] font-medium leading-8 font-DarkerGrotesque text-Brand/Surface/surface-50"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
