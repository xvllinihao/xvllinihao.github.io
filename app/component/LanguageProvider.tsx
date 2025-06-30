"use client";
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    resume: "Resume", 
    articles: "Articles",
    
    // Common
    welcome: "Welcome",
    readMore: "Read more...",
    backTo: "Back to",
    
    // Resume sections
    ninjaRank: "Ninja Rank",
    chuuninLevel: "Chuunin Level",
    education: "Education",
    experience: "Work Experience", 
    skills: "Skills",
    publications: "Publications",
    languages: "Languages",
    
    // Skills
    nativeLevel: "Native proficiency",
    businessLevel: "Business proficiency", 
    elementaryLevel: "Elementary proficiency",
    
    // Footer
    ninjaWay: "Ninja Way: Never give up!",
    techMission: "Making the world a better place through technology"
  },
  zh: {
    // Navigation  
    home: "主页",
    resume: "简历",
    articles: "文章",
    
    // Common
    welcome: "欢迎",
    readMore: "继续阅读...",
    backTo: "返回",
    
    // Resume sections
    ninjaRank: "忍者等级",
    chuuninLevel: "中忍级别", 
    education: "教育背景",
    experience: "工作经历",
    skills: "技能",
    publications: "论文发表",
    languages: "语言能力",
    
    // Skills
    nativeLevel: "母语水平",
    businessLevel: "商务水平",
    elementaryLevel: "初级水平",
    
    // Footer
    ninjaWay: "忍者之道：永不放弃！",
    techMission: "通过技术让世界变得更美好"
  }
};

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
} 