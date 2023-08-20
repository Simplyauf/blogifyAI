import React, { useRef } from "react";
import Search from "@/assets/search 04.svg";
import BlogTemplate1 from "@/assets/Template1Hero.jpeg";
import DownArrow from "@/assets/direction-down 01.svg";
import ArrowLeft from "@/assets/arrow left2.svg";
import ArrowtRight from "@/assets/arrow right2.svg";
import { Autoplay, Navigation, Pagination, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import DummyNewsImg from "@/assets/dummyNewsImg.png";
import Share from "@/assets/share2.svg";
import Image from "next/image";
import { SingleNewsCard } from "@/src/components/blogTemplates/template1/singleNewsCard";
import { SingleCategory } from "@/src/components/blogTemplates/singleCategory";
import { NavBar } from "@/src/components/blogTemplates/template1/navBar";
import { Footer } from "@/src/components/blogTemplates/template1/footer";
import { Header } from "@/src/components/blogTemplates/template1/header";
import Link from "next/link";
import { Newsletter } from "@/src/components/blogTemplates/template1/newsletter";
import { data } from "@/src/components/blogTemplates/template1/dataJson";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import Category from "@/src/components/blogTemplates/template1/category";
import PostDetails from "@/src/components/blogTemplates/template1/postDetails";

const Index = ({ slug }: any) => {
  const router = useRouter();
  console.log(slug);
  if (router.isFallback) {
    return <ClipLoader size={50} color="black" />;
  }
  if (!slug) {
    return <h2>error</h2>;
  }

  if (slug.category || slug.sub) {
    return <Category slug={slug} />;
  }

  if (slug.post) {
    return <PostDetails slug={slug} />;
  }
  // console.log(slug.sub);
};

export default Index;

export async function getStaticProps(context: { params: { slug: any } }) {
  const { params } = context;
  const slug = params.slug;

  console.log(slug, "snail", slug.length);

  let b;
  if (slug.length === 1) {
    const actualData = data.find((elem: any) => elem.title === params.slug[0]);
    if (actualData) {
      b = {
        props: {
          slug: { category: actualData },
        },
      };
    } else {
      b = {
        props: {
          notFound: true,
        },
      };
    }
  } else if (slug.length === 2) {
    const findCategory = data.find(
      (elem: any) => elem.title === params?.slug[0]
    );

    const subCategoryData = findCategory?.sub.find(
      (elem: any) => elem.title === params.slug[1]
    );
    const postData = findCategory?.posts.find(
      (elem: any) => elem.title === params.slug[1]
    );

    if (postData) {
      b = {
        props: {
          slug: { post: postData },
        },
      };
    } else if (subCategoryData) {
      b = {
        props: {
          slug: { sub: subCategoryData },
        },
      };
    } else {
      b = {
        props: {
          notFound: true,
        },
      };
    }
  } else if (slug.length === 3) {
    const findCategory = data.find(
      (elem: any) => elem.title === params?.slug[0]
    );
    const subCategoryData = findCategory?.sub.find(
      (elem: any) => elem.title === params.slug[1]
    );

    const postData = subCategoryData?.posts.find(
      (elem: any) => elem.title === params.slug[2]
    );

    if (postData) {
      b = {
        props: {
          slug: { post: postData },
        },
      };
    } else {
      b = {
        props: {
          notFound: true,
        },
      };
    }
  } else {
    b = {
      props: {
        notFound: true,
      },
    };
  }

  console.log(b, "prop");

  return b;
}

export async function getStaticPaths() {
  // const response = await fetch(`${a}`);
  // const data = await response.json();

  // console.log(response);
  const paths = data.flatMap((post: any) => {
    return post.posts.flatMap((elem: any) => {
      return post.sub.map((sub: any) => {
        return {
          params: {
            slug: [post.title, elem.title, sub.title],
          },
        };
      });
    });
  });
  // console.log(paths);
  // const paths = data.map((post: any) => {
  //   return {
  //     params: {
  //       slug: `${post.title}`,
  //     },
  //   };
  // });

  return { paths, fallback: true };
}
