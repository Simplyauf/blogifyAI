import React from "react";
import { Header } from "./header";
import Twitter from "@/assets/twitter2.svg";
import Facebook from "@/assets/facebook2.svg";
import Linkedin from "@/assets/Linkedin.svg";
import Pinterest from "@/assets/Pinterest.svg";
import Image from "next/image";

const SingleNewsFullDetails = () => {
  return (
    <section className="w-full bg-Brand/Surface/surface-50 min-h-screen ">
      <Header />
      <section className="w-full mt-[56px] 2xl:px-[360px] pb-[132px] lg:px-[200px] px-[4%] xl:px-[320px] ">
        <div className="flex flex-col gap-4 items-start">
          <h2 className="font-DarkerGrotesque  text-[90px]  leading-normal font-bold text-[#00000]">
            Travel
          </h2>
          <div className="flex items-center gap-[21px]">
            <p className="font-DarkerGrotesque text-[14px] font-normal  leading-normal text-[#555]">
              Share:
            </p>{" "}
            <div className="h-6 w-6">
              <Image
                src={Facebook}
                alt="blog-image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full "
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <Facebook />
            <Twitter />
            <Linkedin />
            <Pinterest />
          </div>
        </div>
      </section>
    </section>
  );
};

export default SingleNewsFullDetails;
