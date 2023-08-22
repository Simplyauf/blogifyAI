import Link from "next/link";
import React, { useEffect } from "react";
import Close from "@/assets/close-black.svg";
import { useRouter } from "next/router";
import { data } from "../dataJson";

interface Proptype {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HorizontalNav = ({ isNavOpen, setIsNavOpen }: Proptype) => {
  const router = useRouter();

  useEffect(() => {
    setIsNavOpen(false);
  }, [router]);
  return (
    <section
      className={`fixed min-h-screen z-[1000] overflow-y-auto w-full flex flex-col items-center justify-center text-Shade/Shade1 font-DarkerGrotesque leading-[34px] gap-[40px] transition-all duration-200 bg-Accent/Warning/Warning-800  ${
        isNavOpen ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <Close
        className="cursor-pointer right-5 top-5 absolute"
        onClick={() => setIsNavOpen(false)}
      />
      <Link href="/blogtemplates/template2/" className="cursor-pointer">
        {" "}
        <span className="text-[26px] font-bold  leading-[34px]">Home</span>
      </Link>
      <Link href="/blogtemplates/template2/about" className="cursor-pointer">
        {" "}
        <span className="text-[26px] font-bold  leading-[34px]">About</span>
      </Link>
      <Link href="/blogtemplates/template2/contact" className="cursor-pointer">
        {" "}
        <span className="text-[26px] font-bold  leading-[34px]">Contact</span>
      </Link>
      {data.map((category: any, index: any) => {
        return (
          <Link
            key={index}
            href={`/blogtemplates/template2/posts/${category.title}`}
            className="cursor-pointer"
          >
            {" "}
            <span className="text-[26px] font-bold capitalize leading-[34px]">
              {category.title}
            </span>
          </Link>
        );
      })}
    </section>
  );
};
