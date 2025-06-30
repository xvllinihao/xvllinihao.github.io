"use client";
import { useLanguage } from "./LanguageProvider";
import { content } from "../../public/texts/mainPageText";

export default function MainContent() {
  const { language } = useLanguage();
  const texts = content[language];

  return (
    <main className="flex flex-col gap-6 p-4 bg-white">
      <div className="mx-auto max-w-2xl manga-card p-6 scroll-fade-in">
        <p className="text-justify text-black manga-text">
          <span className="manga-title text-2xl block mb-3 manga-float">{texts.greetings}</span> 
          <span className="text-base leading-relaxed">{texts.introduction}</span>
        </p>
      </div>
    
      <div className="mx-auto max-w-2xl manga-card p-6 scroll-fade-in">
        <div className="text-black manga-text">
          <span className="block mb-4 text-base leading-relaxed">
            {texts.my_hope}
          </span>
          <span className="text-base font-semibold manga-title">
            {texts.naming_reason}
          </span>
        </div>
      </div>
      
      <div className="mx-auto max-w-2xl panel-border p-6 scroll-fade-in speed-lines">
        <div className="text-center">
          <h2 className="manga-title text-3xl mb-4 manga-float">
            🥷 {texts.welcome_message} 🥷
          </h2>
          <p className="manga-text text-lg mb-4">{texts.welcome_subtitle}</p>
          
          <div className="manga-card p-4 inline-block">
            <p className="manga-sfx text-xl mb-2">
              ⚡ {texts.ninja_technique} ⚡
            </p>
            <p className="manga-text text-sm">{texts.ninja_technique_desc}</p>
          </div>
        </div>
      </div>
    </main>
  );
} 