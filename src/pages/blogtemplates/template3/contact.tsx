import React from "react";
import { Footer } from "@/src/components/blogTemplates/template3/footer";
import { Header } from "@/src/components/blogTemplates/template3/header";

import { useRef } from "react";

const Contact = () => {
  return (
    <section className="w-full bg-Brand/Surface/surface-50 min-h-screen ">
      <Header />

      <section className="md:mt-[120px] mt-0  2xl:px-[250px] pb-[132px] lg:px-[50px] px-[4%] xl:px-[120px] w-full">
        <div className="mt-[48px] md:mt-[120px] ">
          <h2 className="font-DarkerGrotesque text-[72px] sm:text-[96px] text-center  font-bold text-[#000000]">
            Contact
          </h2>
          <form
            action=""
            className="w-full lg:w-[799px] mx-auto bg-[#fff] p-[12px] BigMobile:p-[32px] sm:p-[56px] gap-4 flex flex-col"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="name"
              className="w-full placeholder:text-Brand/Text/Text-400 h-[50px] px-4 border-Brand/Surface/surface-50 border bg-Surface/surface-400 rounded-[8px]"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="email"
              className="w-full placeholder:text-Brand/Text/Text-4 h-[50px] px-4 border-Brand/Surface/surface-50 border bg-Surface/surface-400 rounded-[8px]"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="subject"
              className="w-full placeholder:text-Brand/Text/Text-4 h-[50px] px-4 border-Brand/Surface/surface-50 border bg-Surface/surface-400 rounded-[8px]"
            />
            <textarea
              name=""
              placeholder="Message"
              id=""
              cols={30}
              rows={10}
              className="h-[262px] w-full  px-4 border-Brand/Surface/surface-50 border bg-Surface/surface-400 rounded-[8px]"
            ></textarea>
            <button
              type="submit"
              className="w-[212px] mx-auto h-[56px] rounded-[8px] bg-Brand/Text/Text-800 text-[20px] font-medium leading-8 font-DarkerGrotesque text-Brand/Surface/surface-50"
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
