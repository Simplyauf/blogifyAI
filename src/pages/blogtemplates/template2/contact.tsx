import React from "react";
import { Footer } from "@/src/components/blogTemplates/template2/footer";
import { Header } from "@/src/components/blogTemplates/template2/header";

import { useRef } from "react";

const Contact = () => {
  return (
    <section className="w-full bg-Brand/Surface/surface-50 min-h-screen ">
      <Header />

      <section className="mt-[30px] md:mt-[120px] 2xl:px-[150px] pb-[132px] lg:px-[50px] px-[4%] xl:px-[112px] w-full">
        <div className="mt-0 md:mt-[120px]">
          <h2 className="font-DarkerGrotesque text-[72px] sm:text-[96px] text-center  font-bold text-[#00000]">
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
              cols={30}
              rows={10}
              className="h-[262px] w-full  px-4 border-Brand/Surface/surface-800 border bg-Brand/Surface/surface-50 rounded-[8px]"
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
