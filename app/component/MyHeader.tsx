"use client";
import Link from "next/link";
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
    <div className="bg-jin-yellow min-h-min flex flex-col items-center justify-center p-4">
      <div className="flex flex-row gap-6">
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
      <div className="mr-2 p-2">
        <img className="rounded-full h-28" src="/me.jpg" alt="my photo" />
      </div>
      <div className="text-center flex items-center">
        <AiFillLinkedin className="mr-1" />
        <a href="https://www.linkedin.com/in/li-xu-412015216/" className="text-blue-500/75" target="_blank">
          Li Xu
        </a>
      </div>
      <div className="text-center flex items-center">
        <AiOutlineMail className="mr-1" />
        <a href="mailto:xvllinihao.com" className="text-blue-500/75">xvllinihao.com</a>
      </div>
      <div className="text-center flex items-center">
        <AiFillGithub className="mr-1" />
        <a href="https://github.com/xvllinihao" target="_blank" className="text-blue-500/75">
          github.com/xvllinihao
        </a>
      </div>
    </div>
  );
}
