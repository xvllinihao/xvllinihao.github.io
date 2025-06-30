"use client";
import { MdSchool, MdWork, MdLanguage } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";
import { FaPython, FaJava, FaRust, FaBook } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTypescript, SiReact, SiNodedotjs } from "react-icons/si";
import { CN, US, JP, NL } from "country-flag-icons/react/3x2";
import { useLanguage } from "./LanguageProvider";

const resumeData = {
  en: {
    education: [
      {
        school: "Delft University of Technology",
        degree: "Master in Computer Science",
        period: "2020.09-2022.06",
        description: "Advanced ninja techniques mastered"
      },
      {
        school: "Beijing University of Posts and Telecommunications", 
        degree: "Bachelor in Computer Science and Technology",
        period: "2016.09-2020.07",
        description: "Foundation ninja techniques acquired"
      }
    ],
    experience: [
      {
        company: "Booking.com",
        position: "Software Engineer",
        period: "2023.09-Present",
        location: "Amsterdam, Netherlands",
        description: "Important missions supporting travelers' adventures"
      },
      {
        company: "APTA Technologies",
        position: "FullStack Software Engineer", 
        period: "2022.11-2023.04",
        location: "Delft, Netherlands",
        description: "Comprehensive missions using diverse technologies"
      },
      {
        company: "Delft University of Technology",
        position: "Teaching Assistant",
        period: "2021.09-2021.10", 
        location: "Delft, Netherlands",
        description: "Technical guidance missions for junior ninjas"
      },
      {
        company: "Philips",
        position: "Research Intern",
        period: "2021.07-2021.09",
        location: "Best, Netherlands", 
        description: "Secret investigation missions in healthcare technology"
      }
    ],
    publications: [
      {
        title: "Trajectory Hiding and Sharing for Supply Chains with Differential Privacy",
        venue: "28th European Symposium on Research in Computer Security",
        description: "Secret techniques for privacy protection"
      },
      {
        title: "Verifiable Credentials with Privacy-Preserving Tamper-Evident Revocation Mechanism", 
        venue: "5th International Conference on Blockchain Computing and Applications (BCCA 2023)",
        description: "Innovative techniques for authentication"
      }
    ]
  },
  zh: {
    education: [
      {
        school: "代尔夫特理工大学",
        degree: "计算机科学硕士",
        period: "2020.09-2022.06", 
        description: "高级忍术修得"
      },
      {
        school: "北京邮电大学",
        degree: "计算机科学与技术学士",
        period: "2016.09-2020.07",
        description: "基础忍术修得"
      }
    ],
    experience: [
      {
        company: "Booking.com",
        position: "软件工程师",
        period: "2023.09-至今",
        location: "荷兰阿姆斯特丹",
        description: "支持旅行者冒险的重要任务"
      },
      {
        company: "APTA Technologies", 
        position: "全栈软件工程师",
        period: "2022.11-2023.04",
        location: "荷兰代尔夫特",
        description: "运用多种技术的综合任务"
      },
      {
        company: "代尔夫特理工大学",
        position: "助教",
        period: "2021.09-2021.10",
        location: "荷兰代尔夫特",
        description: "对初级忍者的技术指导任务"
      },
      {
        company: "飞利浦",
        position: "研究实习生", 
        period: "2021.07-2021.09",
        location: "荷兰贝斯特",
        description: "医疗技术领域的秘密调查任务"
      }
    ],
    publications: [
      {
        title: "供应链轨迹隐藏与共享的差分隐私方法",
        venue: "第28届欧洲计算机安全研究论坛",
        description: "隐私保护的秘密技法"
      },
      {
        title: "具有隐私保护防篡改撤销机制的可验证凭证",
        venue: "第5届国际区块链计算与应用会议 (BCCA 2023)", 
        description: "认证的创新技法"
      }
    ]
  }
};

export default function ResumeContent() {
  const { language, t } = useLanguage();
  const data = resumeData[language];

  return (
    <main className="bg-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* 忍者等级显示 */}
        <div className="text-center mb-6 panel-border p-6 scroll-fade-in">
          <h1 className="manga-title text-4xl mb-3">
            <span className="manga-float">⚡</span> {t('ninjaRank')} <span className="manga-float">⚡</span>
          </h1>
          <p className="manga-text text-xl">{t('chuuninLevel')}</p>
          <div className="flex justify-center mt-3">
            <span className="manga-sfx text-3xl">⭐⭐⭐</span>
          </div>
        </div>

        {/* 教育背景 */}
        <div className="manga-card p-6 mb-6 scroll-fade-in">
          <div className="text-center flex items-center justify-center mb-4">
            <MdSchool className="mr-3 text-black manga-float" size={28} />
            <h1 className="manga-title text-2xl">🎓 {t('education')}</h1>
          </div>
          
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="panel-border p-4 border-l-8 border-black ninja-seal">
                <h2 className="manga-title text-xl mb-2">
                  {edu.school} -- {edu.degree}
                </h2>
                <p className="manga-text text-base mb-1">
                  📅 {edu.period}
                </p>
                <p className="kishimoto-text text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 工作经验 */}
        <div className="manga-card p-6 mb-6 scroll-fade-in">
          <div className="text-center flex items-center justify-center mb-4">
            <MdWork className="mr-3 text-black manga-float" size={28} />
            <h1 className="manga-title text-2xl">⚔️ {t('experience')}</h1>
          </div>
          
          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index} className="panel-border p-4 border-l-8 border-black">
                <h2 className="manga-title text-xl mb-2">
                  {exp.company} -- {exp.position}
                </h2>
                <p className="manga-text text-base mb-1">
                  📅 {exp.period} 🌍 {exp.location}
                </p>
                <p className="manga-text text-sm text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 技能 */}
        <div className="manga-card p-6 mb-6 scroll-fade-in">
          <div className="text-center flex items-center justify-center mb-4">
            <AiFillTool className="mr-3 text-black manga-float" size={28} />
            <h1 className="manga-title text-2xl">🥷 {t('skills')}</h1>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FaPython, name: "Python", level: 5 },
              { icon: SiCplusplus, name: "C++", level: 4 },
              { icon: SiJavascript, name: "JavaScript", level: 5 },
              { icon: SiTypescript, name: "TypeScript", level: 5 },
              { icon: FaRust, name: "Rust", level: 3 },
              { icon: FaJava, name: "Java", level: 4 },
              { icon: SiReact, name: "React", level: 5 },
              { icon: SiNodedotjs, name: "Node.js", level: 4 }
            ].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="manga-card p-4 text-center hover:bg-gray-50 transition-colors ninja-seal">
                  <Icon className="mx-auto mb-2 text-black" size={32} />
                  <h1 className="manga-title text-sm mb-2">{skill.name}</h1>
                  <div className="skill-bar w-full">
                    <div 
                      className="skill-fill" 
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="kishimoto-text text-xs mt-1 font-bold">LV.{skill.level}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 论文发表 */}
        <div className="manga-card p-6 mb-6 scroll-fade-in">
          <div className="text-center flex items-center justify-center mb-4">
            <FaBook className="mr-3 text-black manga-float" size={28} />
            <h1 className="manga-title text-2xl">📖 {t('publications')}</h1>
          </div>
          
          <div className="space-y-4">
            {data.publications.map((pub, index) => (
              <div key={index} className="panel-border p-4 border-l-8 border-black">
                <h2 className="manga-title text-lg mb-2">{pub.title}</h2>
                <p className="manga-text text-base mb-1">🏛️ {pub.venue}</p>
                <p className="kishimoto-text text-sm">{pub.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 语言能力 */}
        <div className="manga-card p-6 mb-6 scroll-fade-in">
          <div className="text-center flex items-center justify-center mb-4">
            <MdLanguage className="mr-3 text-black manga-float" size={28} />
            <h1 className="manga-title text-2xl">🌍 {t('languages')}</h1>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { flag: CN, lang: language === 'en' ? 'Chinese' : '中文', level: language === 'en' ? 'Native' : '母语' },
              { flag: US, lang: language === 'en' ? 'English' : '英语', level: language === 'en' ? 'Fluent' : '流利' },
              { flag: JP, lang: language === 'en' ? 'Japanese' : '日语', level: language === 'en' ? 'Basic' : '基础' },
              { flag: NL, lang: language === 'en' ? 'Dutch' : '荷兰语', level: language === 'en' ? 'Basic' : '基础' }
            ].map((lang, index) => {
              const Flag = lang.flag;
              return (
                <div key={index} className="manga-card p-4 text-center hover:bg-gray-50 transition-colors ninja-seal">
                  <Flag className="mx-auto mb-2 w-8 h-6 border border-black" />
                  <h1 className="manga-title text-sm mb-1">{lang.lang}</h1>
                  <p className="kishimoto-text text-xs">{lang.level}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 忍者誓言 */}
        <div className="text-center panel-border p-6 scroll-fade-in">
          <h1 className="manga-title text-2xl mb-4">
            <span className="manga-sfx">⚡</span> {t('ninjaOath')} <span className="manga-sfx">⚡</span>
          </h1>
          <p className="kishimoto-text text-lg leading-relaxed">
            {language === 'en' 
              ? '"Code with honor, debug with patience, deploy with courage. This is my ninja way!"' 
              : '"以荣誉编码，以耐心调试，以勇气部署。这就是我的忍道！"'
            }
          </p>
          <div className="mt-4">
            <span className="manga-sfx text-2xl">🥷</span>
          </div>
        </div>
      </div>
    </main>
  );
} 