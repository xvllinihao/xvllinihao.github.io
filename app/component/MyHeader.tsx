"use client";
import Link from "next/link";
import Image from "next/image";
import ProfileImage from "../../public/Images/me.jpg"
import { usePathname } from "next/navigation";
// 移除未使用的图标导入
import { useLanguage } from "./LanguageProvider";

export default function MyHeader() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="bg-white min-h-min flex flex-col items-center justify-center p-6 border-b-4 border-black">
      {/* Language Switch */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => setLanguage('en')}
          className={`manga-button px-4 py-2 text-sm ${
            language === 'en' 
              ? 'bg-gray-300 text-black' 
              : 'bg-white text-black hover:bg-gray-300'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('zh')}
          className={`manga-button px-4 py-2 text-sm ${
            language === 'zh' 
              ? 'bg-gray-300 text-black' 
              : 'bg-white text-black hover:bg-gray-300'
          }`}
        >
          中文
        </button>
      </div>

      {/* Site title with clean styling */}
      <div className="text-center mb-4">
        <h1 className="font-black text-4xl mb-2 tracking-wider">
          <span>Li no Nindo</span>
        </h1>
        <p className="font-semibold text-lg tracking-wide">NINJA DEVELOPER</p>
      </div>

      <div className="flex flex-row gap-8 text-lg mb-4">
        <Link
          href="/"
          className={`manga-button px-4 py-2 transition-all duration-200 ${
            pathname === "/" ? "bg-gray-300 text-black" : "bg-white text-black hover:bg-gray-300"
          }`}
        >
          ■ {t('home')}
        </Link>
        <Link
          href="/Resume"
          className={`manga-button px-4 py-2 transition-all duration-200 ${
            pathname === "/Resume" ? "bg-gray-300 text-black" : "bg-white text-black hover:bg-gray-300"
          }`}
        >
          ▣ {t('resume')}
        </Link>
        <Link
          href="/article"
          className={`manga-button px-4 py-2 transition-all duration-200 ${
            pathname === "/article" ? "bg-gray-300 text-black" : "bg-white text-black hover:bg-gray-300"
          }`}
        >
          ▤ {t('articles')}
        </Link>
      </div>
      
      <div className="p-2 relative">
        <div className="relative">
          <Image 
            src={ProfileImage} 
            alt="Ninja Portrait"
            className="rounded-full w-32 h-32 border-4 border-black object-cover bg-white"
          />
          {/* 忍者等级标识 */}
          <div className="absolute -bottom-2 -right-2 bg-gray-300 text-black px-2 py-1 border-2 border-black text-xs font-bold">
            CHUUNIN
          </div>
        </div>
      </div>

      <div className="text-center mb-3">
        <h1 className="font-bold text-2xl text-black">Li Xu</h1>
        <p className="font-medium text-base text-gray-600">NINJA DEVELOPER</p>
      </div>
      
      <div className="flex flex-row gap-4 border-4 border-black p-3">
        <div className="text-center flex items-center hover:bg-gray-200 p-2 transition-colors">
          <span className="mr-1 text-black">▬</span>
          <a href="https://www.linkedin.com/in/li-xu-412015216/" className="font-medium text-black" target="_blank">
            LinkedIn
          </a>
        </div>
        <div className="text-center flex items-center hover:bg-gray-200 p-2 transition-colors">
          <span className="mr-1 text-black">▣</span>
          <a href="mailto:xvllinihao@gmail.com" className="font-medium text-black">Mail</a>
        </div>
        <div className="text-center flex items-center hover:bg-gray-200 p-2 transition-colors">
          <span className="mr-1 text-black">▦</span>
          <a href="https://github.com/xvllinihao" target="_blank" className="font-medium text-black">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
