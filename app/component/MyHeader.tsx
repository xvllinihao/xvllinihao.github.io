"use client";
import Link from "next/link";
import Image from "next/image";
import ProfileImage from "../../public/Images/me.jpg"
import { usePathname } from "next/navigation";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
/*
 * @Author: xvllinihao lixu_work@yahoo.com
 * @Date: 2023-10-14 14:53:43
 * @LastEditors: xvllinihao lixu_work@yahoo.com
 * @LastEditTime: 2023-10-15 11:18:03
 * @FilePath: \xvllinihao.github.io\app\component\MyHeader.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function MyHeader() {
  const pathname = usePathname();

  return (
    <div className="bg-gray-100 min-h-min flex flex-col items-center justify-center p-4">
      <div className="flex flex-row gap-6 text-[24px]">
        <Link
          href="/"
          className={`font-serif font-bold ${
            pathname === "/" ? "underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/Resume"
          className={`font-serif font-bold ${
            pathname === "/Resume" ? "underline" : ""
          }`}
        >
          Resume
        </Link>
        <Link
          href="/article"
          className={`font-serif font-bold ${
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
          <a href="https://www.linkedin.com/in/li-xu-412015216/" className="text-blue-500/75" target="_blank">
            LinkedIn
          </a>
        </div>
        <div className="text-center flex items-center">
          <AiOutlineMail className="mr-1" />
          <a href="mailto:xvllinihao.com" className="text-blue-500/75">Mail</a>
        </div>
        <div className="text-center flex items-center">
          <AiFillGithub className="mr-1" />
          <a href="https://github.com/xvllinihao" target="_blank" className="text-blue-500/75">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
