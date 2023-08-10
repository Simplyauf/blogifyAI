import BlogTemplateImg from "@/assets/blogTemplateImg.svg";

interface PropTypes {
  setCreateBlogModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setChooseBlogTemplateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SingleTemplateCard = ({
  setCreateBlogModalOpen,
  setChooseBlogTemplateModalOpen,
}: PropTypes) => {
  return (
    <article className="flex flex-col gap-4 min-w-[237px] rounded-t-lg">
      <BlogTemplateImg
        className="w-full rounded-t-lg cursor-pointer"
        onClick={() => {
          setCreateBlogModalOpen(true);
          setChooseBlogTemplateModalOpen(false);
        }}
      />
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-1">
          <h3 className="uppercase text-[#000] text-[18px] font-bold  leading-[26px] font-DarkerGrotesque">
            Metly
          </h3>
          <p className="text-Brand/Text/Text-600 text-[14px] font-semibold  leading-normal font-DarkerGrotesque">
            Personal
          </p>
        </div>
        <button className="w-[76px] h-[35px] flex items-center justify-center border-[1.5px]  rounded-[4px] p-4 border-Brand/Text/Text-400  text-Brand/Text/Text-800 text-[14px] font-medium  leading-normal font-DarkerGrotesque">
          Preview
        </button>
      </div>
    </article>
  );
};
