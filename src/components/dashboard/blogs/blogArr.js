import Image from "next/image";
import BlogImg from "@/assets/Blog Image.png";
import SmallBlogImg from "@/assets/smallBlogImg.png";

export const blogArr = [
  {
    GridImg: (className) => (
      <Image
        src={BlogImg.src}
        alt="blog-image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full object-fill"
        style={{ width: "100%", height: "187px" }}
      />
    ),
    ListImg: (className) => (
      <Image
        src={SmallBlogImg.src}
        alt="blog-image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full object-fill"
        style={{ width: "170px", height: "88px" }}
      />
    ),
    title: "Blogsite Title",
    url: "blogsitetitle.com",
    status: "Live",
  },
  {
    GridImg: (className) => (
      <Image
        src={BlogImg.src}
        alt="blog-image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full object-fill"
        style={{ width: "100%", height: "187px" }}
      />
    ),
    ListImg: (className) => (
      <Image
        src={SmallBlogImg.src}
        alt="blog-image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full object-fill"
        style={{ width: "170px", height: "88px" }}
      />
    ),

    title: "Blogsite Title",
    url: "blogsitetitle.com",
    status: "action-needed",
  },
  {
    GridImg: (className) => (
      <Image
        src={BlogImg.src}
        alt="blog-image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full object-fill"
        style={{ width: "100%", height: "187px" }}
      />
    ),
    ListImg: (className) => (
      <Image
        src={SmallBlogImg.src}
        alt="blog-image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full object-fill"
        style={{ width: "170px", height: "88px" }}
      />
    ),

    title: "Blogsite Title",
    url: "blogsitetitle.com",
    status: "Inactive",
  },
];
