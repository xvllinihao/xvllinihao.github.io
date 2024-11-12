"use client";
import Link from "next/link";
import Image from "next/image";
import ProfileImage from "../../public/Images/me.jpg"
import { usePathname } from "next/navigation";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function MyHeader() {
  const pathname = usePathname();

  return (
    <div className="bg-blue-200 min-h-min flex flex-col items-center justify-center p-4">
      <div className="flex flex-row gap-6 text-[24px]">
        <Link
          href="/"
          className={`font-serif font-bold text-blue-500 ${
            pathname === "/" ? "underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/Resume"
          className={`font-serif font-bold text-blue-500 ${
            pathname === "/Resume" ? "underline" : ""
          }`}
        >
          Resume
        </Link>
        <Link
          href="/article"
          className={`font-serif font-bold text-blue-500 ${
            pathname === "/article" ? "underline" : ""
          }`}
        >
          Articles
        </Link>
      </div>
      <div className="p-2">
        <Image 
          src={ProfileImage} 
          alt="my profile photo"
          className="rounded-full w-28"
        />
      </div>
      <div className="flex flex-row gap-2">
        <div className="text-center flex items-center">
          <AiFillLinkedin className="mr-1" />
          <a href="https://www.linkedin.com/in/li-xu-412015216/" className="text-blue-600" target="_blank">
            LinkedIn
          </a>
        </div>
        <div className="text-center flex items-center">
          <AiOutlineMail className="mr-1" />
          <a href="mailto:xvllinihao.com" className="text-blue-600">Mail</a>
        </div>
        <div className="text-center flex items-center">
          <AiFillGithub className="mr-1" />
          <a href="https://github.com/xvllinihao" target="_blank" className="text-blue-600">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
