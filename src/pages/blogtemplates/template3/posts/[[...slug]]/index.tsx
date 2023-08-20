import { data } from "@/src/components/blogTemplates/dataJson";
import Category from "@/src/components/blogTemplates/template3/category";
import PostDetails from "@/src/components/blogTemplates/template3/postDetails";

import { useRouter } from "next/router";
import React from "react";
import { ClipLoader } from "react-spinners";

const Index = ({ slug }: any) => {
  const router = useRouter();

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

  let b;

  if (!slug) {
    b = {
      props: {
        notFound: true,
      },
    };
  } else if (slug.length === 1) {
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
