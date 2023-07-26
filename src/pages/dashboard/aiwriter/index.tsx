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

const AiWriter = () => {
  // const [data, setData] = useState([]);
  const { aiList, loadingAll } = useAppSelector((state) => state.aiWriters);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAiWriters());
  }, [dispatch]);
  const router = useRouter();
  // setData(ai)
  // console.log(aiList?.aiList?.aiList);
  return (
    <section className="mt-8 px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-full lg:w-[80%]  xl:w-[85%] right-0">
      {loadingAll ? (
        <div className="mt-[10px]">
          <ClipLoader />
        </div>
      ) : (
        <div className="grid mt-4 gap-6 w-full grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 justify-between">
          {aiList?.aiList?.map((elem: any, index: number) => {
            const { title, description, image } = elem;
            return (
              <article
                key={index}
                onClick={() =>
                  router.push("/dashboard/aiwriter/article-generator")
                }
                className="flex flex-col w-full   items-start justify-start p-5  rounded-lg bg-Brand/Surface/surface-50 cursor-pointer"
              >
                <div
                  className="flex p-2 items-center justify-center rounded-[50%] bg-Brand/Primary/Primary-100 w-[40px] h-[40px]"
                  dangerouslySetInnerHTML={{ __html: image }}
                />

                <h3 className="text-Brand/Text/Text-800 text-ellipsis text-[20px] font-bold  leading-7 font-DarkerGrotesque mt-4">
                  {title}
                </h3>
                <p className="mt-1 text-Brand/Text/Text-600 text-[16px] font-medium leading-normal font-DarkerGrotesque ">
                  {description}
                </p>
              </article>
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
