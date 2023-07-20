import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/auth/signup");
  }, 500);

  return <main></main>;
}
