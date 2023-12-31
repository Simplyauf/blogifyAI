import DashboardLayout from "@/src/layouts/DashboardLayout";
import React, { useEffect } from "react";
import Search from "@/assets/search 03.svg";
import { useState } from "react";
import { AIWriter } from "..";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";

import { fetchAiWriters } from "@/src/redux/actions/aiWriterActions";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
import Link from "next/link";

const AiWriter = () => {
  // const [data, setData] = useState([]);
  const { aiList, loadingAll, errorAiList } = useAppSelector(
    (state) => state.aiWriters
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAiWriters());
  }, [dispatch]);
  const router = useRouter();
  // setData(ai)
  // console.log(aiList?.aiList?.aiList);
  return (
    <section className="pt-8 pb-[102px] sm:pb-[119px] px-5 sm:px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  md:w-[75%]  w-full lg:w-[80%]  xl:w-[85%] right-0">
      {errorAiList && (
        <section className="w-full min-h-[300px] h-[calc(100vh-200px)] flex  flex-col gap-4 justify-center items-center">
          <h2 className="font-bold font-DarkerGrotesque text-2xl lg:text-4xl">
            {" "}
            {errorAiList}
          </h2>
          <button
            className=" h-[48px] flex justify-center items-center text-[20px] bg-Brand/Primary/Primary-800 rounded-lg text-Brand/Surface/surface-50 font-medium leading-8 font-DarkerGrotesque w-[148px] "
            onClick={() => dispatch(fetchAiWriters())}
          >
            Retry
          </button>
        </section>
      )}
      {loadingAll ? (
        <div className="mt-[10px]">
          <ClipLoader />
        </div>
      ) : (
        <div className="grid mt-4 gap-6 w-full grid-cols-1 BigMobile:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-between">
          {aiList?.aiList?.map((elem: any, index: number) => {
            const { title, description, image, slug } = elem;
            return (
              <Link
                key={index}
                href={{
                  pathname: "/dashboard/aiwriter/[slug]",
                  query: { slug: slug },
                }}
                // onClick={() =>
                //   router.push("/dashboard/aiwriter/article-generator")
                // }
                className="flex flex-col w-full   items-start justify-start p-5  rounded-lg bg-Brand/Surface/surface-50 cursor-pointer"
              >
                <div
                  className="flex p-2 items-center justify-center rounded-[50%] bg-Brand/Primary/Primary-100 w-[40px] h-[40px] "
                  dangerouslySetInnerHTML={{ __html: image }}
                />

                <h3 className="text-Brand/Text/Text-800 text-ellipsis text-[20px] font-bold  leading-7 font-DarkerGrotesque mt-4">
                  {title}
                </h3>
                <p className="mt-1 text-Brand/Text/Text-600 text-[16px] font-medium leading-normal font-DarkerGrotesque ">
                  {description}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};

AiWriter.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AiWriter;
