import React from "react";
import { Header } from "../../../components/blogTemplates/template1/header";
import Twitter from "@/assets/twitter2.svg";
import Facebook from "@/assets/facebook2.svg";
import Linkedin from "@/assets/Linkedin.svg";
import Pinterest from "@/assets/Pinterest.svg";
import SingleNewsImg from "@/assets/singleNewsImg.jpeg";
import Send from "@/assets/sent-fast.svg";
import Women from "@/assets/Women.png";
import Image from "next/image";
import { Footer } from "@/src/components/blogTemplates/template1/footer";
import { SingleCommentCard } from "@/src/components/blogTemplates/singleCommentCard";

const SingleNewsFullDetails = () => {
  return (
    <section className="w-full bg-Brand/Surface/surface-50 min-h-screen ">
      <Header />
      <section className="w-full mt-[56px] 2xl:px-[360px] pb-[132px] lg:px-[200px] px-[4%] xl:px-[320px] ">
        <div className="flex flex-col gap-4 items-start pb-6 border-b border-Surface/surface-600">
          <h2 className="font-DarkerGrotesque  text-[90px]  leading-normal font-bold text-[#00000]">
            Travel
          </h2>
          <div className="flex items-center gap-[21px]">
            <p className="font-DarkerGrotesque text-[14px] font-normal  leading-normal text-[#555]">
              Share:
            </p>{" "}
            <div className="h-[38px] flex justify-center items-center  rounded-[50%] border w-[38px] border-[#135CB6] bg-[#135CB6]">
              <Facebook />
            </div>
            <div className="h-[38px] flex justify-center items-center  rounded-[50%] border w-[38px] bg-[#00ACED] border-[#00ACED]">
              <Twitter />
            </div>
            <div className="h-[38px] flex justify-center items-center  rounded-[50%] border w-[38px] bg-[#2767B1] border-[#2767B1]">
              {" "}
              <Linkedin />
            </div>
            <div className="h-[38px] flex justify-center items-center  rounded-[50%] border w-[38px] bg-[#E60023] border-[#E60023]">
              {" "}
              <Pinterest />
            </div>
          </div>
        </div>
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
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
                Donec quis commodo mi. Nunc consectetur sollicitudin leo, et
                bibendum nibh rhoncus eget. Integer at consectetur elit.
                Praesent sit amet lacinia ex. Nam pretium ligula mauris, vitae
                consectetur elit posuere et. Aenean eu commodo leo. Etiam
                maximus, dui ac sodales molestie, felis lectus bibendum est, in
                eleifend tellus mi vel magna. Vestibulum rutrum lacus ex, eget
                posuere urna ultricies vitae. Vivamus luctus diam ex, id blandit
                leo pellentesque ac. Ut maximus nisi sed erat commodo, sed
                convallis massa scelerisque. Praesent eget tortor gravida,
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
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. &nbsp;consectetur elit. Praesent sit amet lacinia
                ex. Nam pretium ligula mauris, vitae consectetur elit posuere
                et. Aenean eu commodo leo. Etiam maximus, dui ac sodales
                molestie, felis lectus bibendum est, in eleifend tellus mi vel
                magna. Vestibulum rutrum lacus ex, eget posuere urna ultricies
                vitae. Vivamus luctus diam ex, id blandit leo pellentesque ac.
              </span>
            </p>
            <p>
              <span style={{ fontSize: "18px" }}>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment Donec quis
                commodo mi. Nunc consectetur sollicitudin leo, et bibendum nibh
                rhoncus eget. Integer at consectetur elit. Praesent sit amet
                lacinia ex. Nam pretium ligula mauris, vitae consectetur elit
                posuere et.
              </span>
            </p>
            <p>
              <span style={{ fontSize: "18px" }}>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
                Donec quis commodo mi. Nunc consectetur sollicitudin leo, et
                bibendum nibh rhoncus eget. Integer at consectetur elit.
                Praesent sit amet lacinia ex. Nam pretium ligula mauris, vitae
                consectetur elit posuere et. Aenean eu commodo leo. Etiam
                maximus, dui ac sodales molestie, felis lectus bibendum est, in
                eleifend tellus mi vel magna. Vestibulum rutrum lacus ex, eget
                posuere urna ultricies vitae. Vivamus luctus diam ex, id blandit
                leo pellentesque ac. Ut maximus nisi sed erat commodo, sed
                convallis massa scelerisque. Praesent eget tortor gravida,
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
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
                Donec quis commodo mi. Nunc consectetur sollicitudin leo, et
                bibendum nibh rhoncus eget. Integer at consectetur elit.
                Praesent sit amet lacinia ex.&nbsp;
              </span>
            </p>
            <p>
              <span style={{ fontSize: "18px" }}>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
                Donec quis commodo mi. Nunc consectetur sollicitudin leo, et
                bibendum nibh rhoncus eget. Integer at consectetur elit.
                Praesent sit amet lacinia ex. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas imperdiet mattis ante, in
                posuere odio aliquam sed. Suspendisse lectus odio. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet
                mattis ante,&nbsp;
              </span>
            </p>
          </div>
          <div className="mt-[32px] w-[768px] 2xl:w-[800px]">
            <h3 className="py-[44px]  leading-[42px] font-DarkerGrotesque text-[34px] font-bold">
              Comments (25)
            </h3>
            <section className="w-full flex flex-col gap-4">
              <SingleCommentCard />
              <SingleCommentCard />

              <section className="w-full">
                <h2 className="font-DarkerGrotesque text-[32px] z-1 relative leading-[40px] font-bold text-[#00000]">
                  Leave a comment
                </h2>
                <h2 className="font-DarkerGrotesque text-[18px] z-1 relative leading-[110%] font-medium text-[#00000]">
                  Your email address will not be published. Required fields are
                  marked
                </h2>
                <textarea
                  name=""
                  id=""
                  placeholder="Subject"
                  className="w-full h-[262px] py-[4px] mt-6   border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px] resize-none"
                ></textarea>
                <div className="grid w-full mt-6 grid-cols-2 gap-4">
                  <div className="">
                    <h5 className=" text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque  font-medium">
                      Name
                    </h5>
                    <div className="w-full h-[48px] py-[4px] mt-[10px]  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
                      <input
                        type="text"
                        placeholder="name"
                        className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                      />
                    </div>
                  </div>
                  <div className="">
                    <h5 className=" text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque  font-medium">
                      Email
                    </h5>
                    <div className="w-full h-[48px] py-[4px] mt-[10px]  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
                      <input
                        type="email"
                        placeholder="email"
                        className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="min-w-fit mt-6 w-[212px] h-[56px] bg-Brand/Text/Text-800 rounded-[8px] flex justify-center items-center font-medium font-DarkerGrotesque leading-8 text-Brand/Surface/surface-50 text-[20px] "
                >
                  Post a comment
                </button>
              </section>
            </section>
          </div>
        </article>
      </section>
      <Footer />
    </section>
  );
};

export default SingleNewsFullDetails;
