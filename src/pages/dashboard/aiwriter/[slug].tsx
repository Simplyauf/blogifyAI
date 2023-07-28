import React, { useEffect } from "react";
import ArrowDown from "@/assets/direction-down 01.svg";
import AlignCenter from "@/assets/align-center.svg";
import AlignJustify from "@/assets/align-justify.svg";
import AlignLeft from "@/assets/align-left.svg";
import AlignRight from "@/assets/align-right.svg";
import Copy from "@/assets/copy.svg";
import ADirectionDown from "@/assets/align-center.svg";

import Download from "@/assets/download 01.svg";
import FontColor from "@/assets/font-color.svg";
import FontRectangle from "@/assets/font-rectangle.svg";
import Frame from "@/assets/Frame.svg";
import Undo from "@/assets/undo.svg";
import Redo from "@/assets/redo.svg";
import Link from "@/assets/link.svg";
import MinusCircle from "@/assets/minus-circle.svg";
import ListViewCircle from "@/assets/list view-circle.svg";
import ArrowCenter from "@/assets/align-center.svg";
import BoldIcon from "@/assets/bold.svg";
import Underline from "@/assets/underline.svg";
import Italic from "@/assets/italic.svg";
import DashboardLayout from "@/src/layouts/DashboardLayout";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { fetchAiWriter } from "@/src/redux/actions/aiWriterActions";
import { PostTitleGenerator } from "@/src/components/aiWriter/post-title-generator";
import { ArticleGeneratorComp } from "@/src/components/aiWriter/article-generator";
import { ProductDescription } from "@/src/components/aiWriter/product-description";
import { ProductNameGenerator } from "@/src/components/aiWriter/product-name-generator";
import { TestimonialGenerator } from "@/src/components/aiWriter/testimonial-generator";
import { BlogPostIdea } from "@/src/components/aiWriter/blogPostIdea";
import { FacebookAddCopy } from "@/src/components/aiWriter/facebookAddCopy";
import { YoutubeVideoDescription } from "@/src/components/aiWriter/YoutubeVideoDescription";
import { YoutubeVideoTag } from "@/src/components/aiWriter/Youtube-video-tag";
import { InstagramCaptions } from "@/src/components/aiWriter/instagramCaptions";
import LinkIcon from "@/assets/link.svg";
import { InstagramHashTag } from "@/src/components/aiWriter/instagramHashtag";
import { ClipLoader } from "react-spinners";

const Page = () => {
  const router = useRouter();
  const slugVal = router.query.slug;
  const dispatch = useAppDispatch();
  const { loadingSingle, aiListSingle } = useAppSelector(
    (state) => state.aiWriters
  );
  console.log(slugVal);
  useEffect(() => {
    dispatch(fetchAiWriter(slugVal));
  }, [dispatch, slugVal]);
  console.log(aiListSingle, "hello");
  return (
    <section className="pt-8 px-4 sm:px-6 pb-[80px] sm:pb-8 min-h-screen bg-Brand/Surface/surface-200  md:w-[75%] 2xl:px-[4%] absolute  w-full lg:w-[80%]  xl:w-[85%] right-0">
      {loadingSingle ? (
        <ClipLoader />
      ) : (
        <div>
          <h2 className="font-DarkerGrotesque mt-4 text-[26px] font-bold leading-[34px] text-[#000] ">
            {aiListSingle?.aiListSingle?.title}
          </h2>

          {/* <ArticleGenerator /> */}
          <div className="w-full mt-4 rounded-lg p-3 sm:p-5 lg:p-6  gap-8 lg:gap-[16px] bg-Brand/Surface/surface-50 flex flex-col lg:flex-row">
            {slugVal === "post_title_generator" && <PostTitleGenerator />}
            {slugVal === "article_generator" && <ArticleGeneratorComp />}
            {slugVal === "product_description" && <ProductDescription />}
            {slugVal === "product_name" && <ProductNameGenerator />}
            {slugVal === "testimonial_review" && <TestimonialGenerator />}
            {slugVal === "blog_post_ideas" && <BlogPostIdea />}
            {slugVal === "facebook_ads" && <FacebookAddCopy />}
            {slugVal === "youtube_video_description" && (
              <YoutubeVideoDescription />
            )}
            {slugVal === "youtube_video_tag" && <YoutubeVideoTag />}
            {slugVal === "instagram_captions" && <InstagramCaptions />}
            {slugVal === "instagram_hashtag" && <InstagramHashTag />}

            <div className="w-full lg:w-[60%] lg:px-4 lg:border-l-[0.8px] lg:border-l-Surface/surface-400">
              <div className="flex items-center gap-[10px]">
                <Undo /> <Redo /> <Copy /> <Download /> <MinusCircle />
              </div>
              <div className="mt-[32px]">
                <h2 className="font-DarkerGrotesque text-ellipsis mt-4 text-[26px] font-bold leading-[34px] text-[#000] ">
                  Untitled Document
                </h2>
                <div className="lg:w-[320px] w-full h-[48px] py-[4px] my-4  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
                  <input
                    type="text"
                    placeholder="Paragraph"
                    className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                  />
                  <ArrowDown />
                </div>
              </div>
              <div className="flex justify-between items-center w-full flex-wrap xl:flex-nowrap gap-y-8 gap-x-4 sm:gap-x-6 ">
                <div className="flex items-center gap-2 w-[45%]  lg:w-auto sm:w-auto BigMobile:w-auto ">
                  <div className="flex items-center">
                    <FontColor />
                    <ArrowDown />
                  </div>
                  <div className="flex items-center">
                    <FontRectangle />
                    <ArrowDown />
                  </div>
                </div>
                <LinkIcon className="w-[15%] sm:w-auto BigMobile:w-auto block lg:hidden " />
                <div className="flex items-center justify-end lg:justify-normal w-[35%] lg:w-auto sm:w-auto BigMobile:w-auto">
                  <BoldIcon />
                  <Italic />
                  <Underline />
                </div>
                <LinkIcon className="hidden lg:block w-[35%] lg:w-auto sm:w-auto BigMobile:w-auto" />
                <div className="flex items-center gap-2 w-[50%]  lg:w-auto sm:w-auto BigMobile:w-auto">
                  <div className="flex items-center">
                    <ListViewCircle />
                    <ArrowDown />
                  </div>
                  <div className="flex items-center">
                    <Frame />
                    <ArrowDown />
                  </div>
                </div>
                <div className="flex items-center  sm:w-auto BigMobile:w-auto gap-2 w-[50%] lg:w-auto justify-end lg:justify-normal">
                  <AlignLeft />
                  <AlignCenter />
                  <AlignRight />
                  <AlignJustify />
                </div>
              </div>
              <div className="mt-4">
                <h5 className=" text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque  font-medium">
                  Output
                </h5>
                <textarea
                  name=""
                  placeholder="AI text"
                  id=""
                  className="h-[343px] focus-within:outline-none w-full border rounded-lg border-Brand/Surface/surface-800 py-[4px] mt-[10px] resize-none px-[16px] bg-Brand/Surface/surface-50"
                ></textarea>
              </div>
              <button className="h-12 mt-5 rounded-[8px] w-full flex justify-center items-center px-4 py-3 border-[1.5px] border-Brand/Text/Text-400 bg-Brand/Surface/surface-50 text-[16px] leading-6 font-DarkerGrotesque font-medium text-Brand/Text/Text-800">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

Page.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
