import React from "react";
import { Header } from "../../../components/blogTemplates/template2/header";
import Twitter from "@/assets/twitter2.svg";
import Facebook from "@/assets/facebook2.svg";
import Linkedin from "@/assets/Linkedin.svg";
import Pinterest from "@/assets/Pinterest.svg";
import SingleNewsImg from "@/assets/singleNewsImg.jpeg";
import Image from "next/image";
import { Footer } from "@/src/components/blogTemplates/template2/footer";
import { SingleCategoryHorizontal2 } from "@/src/components/blogTemplates/template2/singleCategoryHorizontal2";

const SingleNewsFullDetails = () => {
  return (
    <section className="w-full bg-Brand/Surface/surface-50 min-h-screen ">
      <Header />
      <section className="w-full mt-[56px] 2xl:px-[360px] pb-[132px] lg:px-[200px] px-[4%] xl:px-[320px] ">
        <h2 className="font-DarkerGrotesque  text-[90px] text-center leading-normal font-bold text-[#00000]">
          About
        </h2>
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
          </div>
        </article>
      </section>
      <Footer />
    </section>
  );
};

export default SingleNewsFullDetails;
