import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "../redux/hooks";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();

  setTimeout(() => {
    router.push("/auth/signup");
  }, 500);
  // const user = Cookies.get("user");
  // if (!user) {
  //   router.push("/auth/login");
  // }
  return <main>heollo</main>;
}
