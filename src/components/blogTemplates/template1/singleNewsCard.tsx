import DummyNewsImg from "@/assets/dummyNewsImg.png";
import Share from "@/assets/share2.svg";
import Image from "next/image";
export const SingleNewsCard = () => {
  return (
    <article className="flex flex-col gap-3">
      <div className="bg-Brand/Primary/Primary-100 rounded-lg h-[352px] pb-0">
        <Image
          src={DummyNewsImg}
          alt="blog-image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-cover rounded-lg h-["
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex flex-col gap-3 mt-[8px]">
        <div className="flex gap-[10px] items-center">
          <button className="min-w-fit w-[66px] h-[29px] flex justify-center items-center rounded-[32px] p-4 bg-[] border border-Brand/Text/Text-800 leading-normal font-DarkerGrotesque text-[14px] font-semibold">
            Travel
          </button>
          <button className="min-w-fit w-[66px] h-[29px] flex justify-center items-center rounded-[32px] p-4 bg-[] border border-Brand/Text/Text-800 leading-normal font-DarkerGrotesque text-[14px] font-semibold">
            Tech
          </button>
        </div>
        <h3 className=" text-[18px] text text-[#999] leading-[110%] font-DarkerGrotesque  font-medium">
          Monday, October 13, 2017
        </h3>
        <h2 className="font-DarkerGrotesque text-[24px] font-bold  leading-[32px] text-[#444]">
          This is post about travel, adventure and fun
        </h2>
        <p className="font-DarkerGrotesque text-[18px] font-medium  leading-[32px] text-[#555]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          suntexplicabo. Nemo enim ipsam voluptatem quia voluptas consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <div className="flex items-center gap-8">
          <button className="min-w-fit w-[56px] h-[48px] flex justify-center items-center rounded-[32px] py-3 px-4   bg-Brand/Text/Text-800 leading-normal font-DarkerGrotesque text-[14px] font-semibold text-Brand/Surface/surface-50">
            Read more
          </button>
          <div className="flex items-center gap-[6px]">
            <span>share</span>
            <Share />
          </div>
        </div>
      </div>
    </article>
  );
};
