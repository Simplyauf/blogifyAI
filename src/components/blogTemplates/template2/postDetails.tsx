import React from "react";
import { Header } from "../../../components/blogTemplates/template2/header";
import Twitter from "@/assets/twitter2.svg";
import Facebook from "@/assets/facebook2.svg";
import Linkedin from "@/assets/Linkedin.svg";
import Pinterest from "@/assets/Pinterest.svg";
import SingleNewsImg from "@/assets/singleNewsImg.jpeg";
import Image from "next/image";
import { Footer } from "@/src/components/blogTemplates/template2/footer";
import { SinglePostHorizontal } from "@/src/components/blogTemplates/template2/singlePostHorizontal";

const PostDetails = ({ slug }: any) => {
  return (
    <section className="w-full bg-Brand/Surface/surface-50 min-h-screen ">
      <Header />
      <section className="w-full mt-[48px] md:mt-[56px] 2xl:px-[360px] pb-[132px] lg:px-[200px] px-[4%] xl:px-[320px] ">
        <div className="flex flex-col gap-4 items-start pb-6 border-b border-Surface/surface-600">
          <h2 className="font-DarkerGrotesque  text-[72px] sm:text-[90px]  leading-normal font-bold text-[#00000]">
            Title
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
        </article>
        <div className="mt-[137px] grid grid-cols-1 gap-8 px-[4%] sm:px-0 w-full">
          <h2 className="font-DarkerGrotesque text-[42px]  leading-[50px] font-bold text-[#00000]">
            Related
          </h2>
          <SinglePostHorizontal />
          <SinglePostHorizontal />
          <SinglePostHorizontal />
          <SinglePostHorizontal />
          <SinglePostHorizontal />
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default PostDetails;
