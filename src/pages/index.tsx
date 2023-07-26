import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "../redux/hooks";
import Cookies from "js-cookie";
import { ArticleGenerator } from "../components/aiWriter/article-generator";
import { PostTitleGenerator } from "../components/aiWriter/post-title-generator";
import { ProductDescription } from "../components/aiWriter/product-description";
import { YoutubeVideoDescription } from "../components/aiWriter/YoutubeVideoDescription";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();

  // const user = Cookies.get("user");
  // if (!user) {
  //   router.push("/auth/login");
  // }
  return <main>heollo</main>;
}
