import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "../redux/hooks";
import Cookies from "js-cookie";

import StarsFrame from "@/assets/starsFrame.svg";
import Logo from "@/assets/pen.svg";
import HeroImgMobile from "@/assets/HeroImg-homepage.png";
import MultipleDotsLG from "@/assets/multipleDotsLg.svg";
import MultipleDotsSM from "@/assets/multipleDotsSM.svg";
import AiVector from "@/assets/aiIcon.png";
import CreateIcon from "@/assets/icons8-create-icon-96.png";
import Money from "@/assets/icons8-money.png";
import UploadCloud from "@/assets/icons8-upload-to-cloud-96.png";
import Increase from "@/assets/icons8-increase-96.png";
import Improvement from "@/assets/icons8-improvement-96.png";
import Vector3LG from "@/assets/Vector3-footer.svg";
import Vector3SM from "@/assets/Vector3-footerSM.svg";
import Vector1LG from "@/assets/Vector1-footer.svg";
import Vector1SM from "@/assets/Vector1SM-footer.svg";
import Vector2LG from "@/assets/Vector2-footer.svg";
import Vector2SM from "@/assets/Vector2SM-footer.svg";
import Vector4SM from "@/assets/Vector4SM-footer.svg";
import Vector4LG from "@/assets/Vector4-footer.svg";
import Linkedin from "@/assets/linkedin-footer.svg";
import Twitter from "@/assets/twitter-footer.svg";
import Link from "@/assets/link-footer.svg";
import Scribble60 from "@/assets/scribble final version-60.svg";
import Scribble135 from "@/assets/scribble final version-135.svg";
import Scribble146 from "@/assets/scribble final version-146.svg";
import Scribble123 from "@/assets/scribble final version-123.svg";
import { AIFeatures } from "../components/AIFeatures";
import Testimonial1 from "@/assets/testimonial1.png";
import Header from "../components/homepage/header";
import HeroSection from "../components/homepage/heroSection";

const inter = Inter({ subsets: ["latin"] });

const services = [
  {
    icon: AiVector,
    title: "AI Magic at Your Fingertips",
    description:
      "Experience the true potential of AI-generated blogs. Our advanced algorithms craft engaging, SEO-friendly posts tailored to your niche and audience.",
  },
  {
    icon: Money,
    title: "Discover Lucrative Opportunities",
    description:
      "Explore our job portal filled with exciting positions in the blogging niche. Our AI provides you with available jobs that can be done with the help of our AI.",
  },
  {
    icon: CreateIcon,
    title: "Tailored to Perfection",
    description:
      "Personalization is key. Our AI learns your preferences, style, and tone, and delivers articles that resonate with your brand's identity and captivate your readers.",
  },
  {
    icon: Increase,
    title: "Boost Your SEO",
    description:
      "Our AI optimizes content for search engines, enhancing your blog's visibility and driving organic traffic, ultimately propelling your brand to new heights.",
  },
  {
    icon: UploadCloud,
    title: "Hassle-Free Publishing",
    description:
      "Say goodbye to writer's block. With our AI blogging services, never worry about content creation again. Focus on what matters – your audience.",
  },
  {
    icon: Improvement,
    title: "Analytics",
    description:
      "Blogify provides you with a measure of performance on your blogs, actionable and easy-to-read Data-driven for your blogging success.",
  },
];

export default function Home() {
  const router = useRouter();
  // const { isAuthenticated } = useAppSelector((state) => state.auth);

  // const user = Cookies.get("user");
  // if (!user) {
  //   router.push("/auth/login");
  console.log(Testimonial1);
  // }
  return (
    <section className="w-full bg-Surface/surface-400 min-h-screen">
      <Header />
      <HeroSection />
      <section className="mt-[78px] md:-[127px] py-[64px] w-full px-[4%] md:px-[80px] BigMobile:px-[8%] xl:px-[165px] 2xl:px-[15%]">
        <div className="w-full relative">
          <Scribble60 className="absolute -left-[60px] sm:block hidden" />

          <h2 className="text-Brand/Primary/Primary-800 text-center font-bold leading-[40px] text-[32px] md:max-w-[373px]  max-w-[248px] mx-auto font-DarkerGrotesque relative w-full ">
            Your One-stop platform for easy Blogging
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full mt-[48px] gap-4  lg:gap-8 relative">
          <Scribble60 className="absolute top-[341px] -left-[25px] sm:hidden block z-[1]" />
          {services.map((service, index) => {
            return (
              <article
                key={index}
                className="flex h-[341px] flex-col rounded-[20px] z-[2] px-8 py-12 bg-white items-start gap-8 shadow-[0px_24px_44px_0px_rgba(20,20,43,0.04)]"
              >
                <Image
                  src={service.icon.src}
                  alt="service"
                  sizes="100w"
                  width={64}
                  height={64}
                />
                <div>
                  <h2 className="text-[#0b0a33]  font-bold leading-8 text-[24px] font-DarkerGrotesque">
                    {service.title}
                  </h2>
                  <p className="text-[#7a7d9c] mt-[11px]   leading-[110%] font-medium text-[18px]   font-DarkerGrotesque ">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="w-full flex justify-center items-center mt-12 relative">
          <button className=" h-[48px] flex justify-center items-center text-[20px] bg-Brand/Primary/Primary-800 rounded-lg text-Brand/Surface/surface-50 font-medium leading-8 font-DarkerGrotesque w-[148px] mx-auto">
            Get Started
          </button>
          <Scribble146 className="absolute  hidden sm:block right-[-20px] md:right-[-30px] xl:right-[-100px] top-[30px]   z-[1] sm:z-0" />
        </div>
      </section>
      <section className="py-[64px] w-full px-[4%] md:px-[80px] BigMobile:px-[8%] xl:px-[165px] 2xl:px-[15%] bg-Brand/Surface/surface-50 relative ">
        <div className="relative w-full">
          <Scribble123 className="absolute -left-[60px] top-[120px]  sm:top-0 z-[2]" />
          <h2 className="text-Brand/Primary/Primary-800 text-center font-bold leading-[50px] text-[42px] md:max-w-[361px]  max-w-[275px] mx-auto  font-DarkerGrotesque">
            Advanced AI Features for Professionals
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full mt-[48px] gap-8  z-[3]">
          {AIFeatures.map((feature, index) => {
            return (
              <article key={index} className="w-full flex gap-4 items-start">
                <div className="justify-center flex  items-center min-w-[40px] w-10 h-10 rounded-[50%] bg-Brand/Primary/Primary-100 ">
                  {feature.image(" ")}
                </div>
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-[#0b0a33] font-DarkerGrotesque text-[20px] font-bold leading-7">
                    {feature.title}
                  </h3>
                  <p className="text-[#7a7d9c] leading-normal font-medium font-DarkerGrotesque">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="w-full flex justify-center items-center mt-12 relative">
          <Scribble135 className="absolute left-0 top-[50px] sm:top-[30px]" />
          <button className=" h-[48px] flex justify-center items-center text-[20px] bg-Brand/Primary/Primary-800 rounded-lg text-Brand/Surface/surface-50 font-medium leading-8 font-DarkerGrotesque w-[148px] mx-auto">
            Get Started
          </button>
        </div>
      </section>
      <section className="py-[64px] w-full px-[6%] md:px-[15%] flex flex-col items-center justify-center bg-Brand/Primary/Primary-100 xl:px-[20%] 2xl:px-[25%] gap-[48px]">
        <h3 className="text-center font-bold leading-[50px] text-Brand/Primary/Primary-800 text-[42px]   font-DarkerGrotesque">
          Testimonial
        </h3>
        <div className="w-full">
          <article className="bg-Brand/Surface/surface-50  rounded-[10px] sm:pl-[92px] sm:pr-8 px-6 py-[56px] sm:py-[42px] relative">
            <blockquote className="">
              <span className="w-8 text-[72px] font-extrabold leading-[98px] font-Manrope absolute sm:top-3 sm:left-10  top-2">
                “
              </span>
              <p className="text-Gray/900 mt-[11px]   leading-[110%] font-medium text-[18px]   font-DarkerGrotesque ">
                We had an incredible experience working with Landify and were
                impressed they made such a big difference in only three weeks.
                Our team is so grateful for the wonderful improvements they made
                and their ability to get familiar with the product concept so
                quickly. It acted as a catalyst to take our design to the next
                level and get more eyes on our product.
              </p>
            </blockquote>
          </article>
          <div className="flex items-center justify-between  mx-auto w-full mt-6 gap-[80px] md:px-[20px] lg:px-[50px] overflow-auto testimonial-container">
            <div className="flex gap-4 items-center">
              <Image
                src={Testimonial1.src}
                alt="testimonial"
                sizes="100w"
                width={56}
                height={56}
                className="min-w-[56px] min-h-[56px]"
              />
              <div className=" flex-col hidden">
                <h5 className="text-[20px] font-semibold leading-normal text-Text/Gray-900">
                  Jane Cooper
                </h5>
                <p className="font-DarkerGrotesque font-medium leading-normal text-Text/Gray-800 whitespace-nowrap">
                  CEO, ABC Corporation
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src={Testimonial1.src}
                alt="testimonial"
                sizes="100w"
                width={56}
                height={56}
                className="min-w-[56px] min-h-[56px]"
              />
              <div className="hidden flex-col">
                <h5 className="text-[20px] font-semibold leading-normal text-Text/Gray-900">
                  Jane Cooper
                </h5>
                <p className="font-DarkerGrotesque font-medium leading-normal text-Text/Gray-800  whitespace-nowrap ">
                  CEO, ABC Corporation
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src={Testimonial1.src}
                alt="testimonial"
                sizes="100w"
                width={56}
                height={56}
                className="min-w-[56px] min-h-[56px]"
              />
              <div className="flex flex-col">
                <h5 className="text-[20px] font-semibold leading-normal text-Text/Gray-900">
                  Jane Cooper
                </h5>
                <p className="font-DarkerGrotesque font-medium leading-normal text-Text/Gray-800 whitespace-nowrap">
                  CEO, ABC Corporation
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src={Testimonial1.src}
                alt="testimonial"
                sizes="100w"
                width={56}
                height={56}
                className="min-w-[56px] min-h-[56px]"
              />
              <div className="hidden flex-col">
                <h5 className="text-[20px] font-semibold leading-normal text-Text/Gray-900">
                  Jane Cooper
                </h5>
                <p className="font-DarkerGrotesque font-medium leading-normal text-Text/Gray-800 whitespace-nowrap">
                  CEO, ABC Corporation
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src={Testimonial1.src}
                alt="testimonial"
                sizes="100w"
                width={56}
                height={56}
                className="min-w-[56px] min-h-[56px]"
              />
              <div className="hidden flex-col">
                <h5 className="text-[20px] font-semibold leading-normal text-Text/Gray-900">
                  Jane Cooper
                </h5>
                <p className="font-DarkerGrotesque font-medium leading-normal text-Text/Gray-800 whitespace-nowrap">
                  CEO, ABC Corporation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="px-[4%] md:px-[80px] BigMobile:px-[8%] xl:px-[165px] 2xl:px-[15%]  pt-[112px] pb-[56px]">
        <article className="bg-Brand/Primary/Primary-800 rounded-[32px] h-[493px] relative flex flex-col justify-center items-center gap-8">
          <h3 className="text-Brand/Surface/surface-50 text-center font-bold leading-[50px] text-[42px]   font-DarkerGrotesque">
            Try Blogify today
          </h3>
          <button className=" h-[48px] p-4 flex justify-center items-center text-[20px] text-Brand/Primary/Primary-800 rounded-[4px] bg-Brand/Surface/surface-50 font-medium leading-8 font-DarkerGrotesque w-[148px] mx-auto">
            Get Started
          </button>

          {/* vector1 */}
          <Vector1LG className="absolute top-[1.5px] left-[3.3px] md:block hidden" />
          <Vector1SM className="absolute top-[1.5px] left-[3.3px]  md:hidden" />

          {/* vector2*/}
          <Vector2LG className="absolute bottom-[-2.9px] right-[-2.9px] md:block hidden" />
          <Vector2SM className="absolute bottom-[-2.9px] right-[-2.9px]  md:hidden" />

          {/* vector3 */}
          <Vector3SM className="w-[66px] h-[66px] mt-[-4px] " />
          <Vector3LG className="mt-[-4px] hidden md:block md:w-[102px] md:h-[102px]" />

          {/* vector4 */}
          <Vector4SM className="absolute bottom-[2px] left-[6px]  md:hidden" />
          <Vector4LG className="absolute bottom-[2px] left-[6px] md:block hidden" />
        </article>
        <article className="mt-[56px] py-[56px] px-[24px] md:px-[72px] xl:px-[128px] 2xl:px-[150px] flex flex-col justify-center items-center gap-12 rounded-[32px] bg-Brand/Primary/Primary-100">
          <div className="w-full flex gap-[70px] flex-col md:flex-row md:justify-between ">
            <div className="flex gap-2 items-center md:items-start">
              <div
                className="flex justify-center items-center rounded-[50%]  bg-Brand/Primary/Primary-800 w-10 h-10 p-2 cursor-pointer"
                onClick={() => router.push("/")}
              >
                <Logo />
              </div>
              <h3 className="text-Brand/Primary/Primary-800 font-bold leading-[34px] font-DarkerGrotesque text-[26px] md:text-[34px] md:leading-[42px]">
                Blogify
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-[86px]">
              <div className="">
                <h3 className="text-Brand/Primary/Primary-800 font-bold leading-[34px] font-DarkerGrotesque text-[26px]">
                  Quick Links
                </h3>
                <div className="flex flex-col gap-2 mt-4">
                  <h4 className="font-DarkerGrotesque text-[22px] font-medium leading-normal text-Brand/Text/Text-600">
                    About
                  </h4>
                  <h4 className="font-DarkerGrotesque text-[22px] font-medium leading-normal text-Brand/Text/Text-600">
                    Pricing
                  </h4>
                  <h4 className="font-DarkerGrotesque text-[22px] font-medium leading-normal text-Brand/Text/Text-600">
                    Contact
                  </h4>
                  <h4 className="font-DarkerGrotesque text-[22px] font-medium leading-normal text-Brand/Text/Text-600">
                    Blog
                  </h4>
                </div>
              </div>
              <div className="">
                <h3 className="text-Brand/Primary/Primary-800 font-bold leading-[34px] font-DarkerGrotesque text-[26px]">
                  Legal
                </h3>
                <div className="flex flex-col gap-3 mt-4">
                  <h4 className="font-DarkerGrotesque text-[22px] font-medium leading-normal text-Brand/Text/Text-600">
                    Terms of Service
                  </h4>
                  <h4 className="font-DarkerGrotesque text-[22px] font-medium leading-normal text-Brand/Text/Text-600">
                    Privacy Policy
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <article className="flex flex-wrap items-center justify-between gap-8 w-full">
            <p className="w-full  md:w-auto font-DarkerGrotesque text-[22px] font-medium leading-normal text-Brand/Text/Text-600">
              © Blogify. {new Date().getFullYear()} — All rights reserved.
            </p>
            <div className="flex items-center gap-[10px] ">
              <div className="flex justify-center items-center w-[42px] h-[42px] rounded-[50%] min-w-[42px] border border-Brand/Primary/Primary-200">
                <Twitter />
              </div>

              <div className="flex justify-center items-center w-[42px] h-[42px] rounded-[50%] min-w-[42px] border border-Brand/Primary/Primary-200">
                <Link />
              </div>

              <div className="flex justify-center items-center w-[42px] h-[42px] rounded-[50%] min-w-[42px] border border-Brand/Primary/Primary-200">
                <Linkedin />
              </div>
            </div>
          </article>
        </article>
      </footer>
    </section>
  );
}
