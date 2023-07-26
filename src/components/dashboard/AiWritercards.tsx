import { fetchAiWriters } from "@/src/redux/actions/aiWriterActions";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ClipLoader } from "react-spinners";

const AiWritercards = () => {
  const { aiList, loadingAll } = useAppSelector((state) => state.aiWriters);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAiWriters());
  }, [dispatch]);
  const router = useRouter();
  return (
    <div>
      {loadingAll ? (
        <div className="mt-[10px]">
          <ClipLoader />
        </div>
      ) : (
        <div className="grid mt-4 gap-6 w-full grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 justify-between">
          {aiList?.aiList?.slice(0, 14).map((elem: any, index: number) => {
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
    </div>
  );
};

export default AiWritercards;
