"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

interface Post {
  slug: string;
  frontmatter: {
    title?: string;
    date?: string;
    description?: string;
    [key: string]: unknown;
  };
}

export default function ArticleList({ posts }: { posts: Post[] }) {
  const { t } = useLanguage();

  return (
    <main className="bg-white p-4">
      {/* 页面标题 */}
      <div className="text-center mb-8 panel-border p-6 scroll-fade-in speed-lines">
        <h1 className="manga-title text-4xl mb-3">
          <span className="manga-float">📚</span> {t('articles')} <span className="manga-float">📚</span>
        </h1>
        <p className="manga-text text-xl">
          {t('language') === 'en' ? 'KNOWLEDGE AND EXPERIENCE RECORDS' : '知识与经验记录'}
        </p>
        <div className="mt-4">
          <span className="manga-sfx text-2xl">🥷</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map(({ slug, frontmatter }) => (
              <div
                key={slug}
                className="manga-card p-6 hover:bg-gray-50 transition-all duration-200 scroll-fade-in ninja-seal"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl manga-float">📜</div>
                  <div className="flex-1">
                    <p className="manga-text text-base mb-2">
                       📅 {frontmatter.date || 'No date'}
                    </p>
                    <Link href={`/article/${slug}`}>
                      <h1 className="manga-title text-xl hover:text-gray-600 transition-colors duration-200 cursor-pointer mb-3">
                         {frontmatter.title || 'Untitled'}
                      </h1>
                    </Link>
                    {frontmatter.description && (
                      <p className="kishimoto-text text-base mt-2">{frontmatter.description}</p>
                    )}
                    <div className="mt-4 flex items-center">
                      <span className="mr-2 manga-sfx text-lg">⚡</span>
                      <span className="manga-text">{t('readMore')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="manga-card p-8 text-center scroll-fade-in">
            <div className="text-6xl mb-4 manga-float">🥷</div>
            <h2 className="manga-title text-2xl mb-3">
              {t('language') === 'en' ? 'THE JOURNEY HAS JUST BEGUN' : '修行才刚刚开始'}
            </h2>
            <p className="kishimoto-text text-lg">
              {t('language') === 'en' ? 'New ninja techniques (articles) are being prepared...' : '新的忍术（文章）正在准备中...'}
            </p>
          </div>
        )}
      </div>

      {/* 底部装饰 */}
      <div className="text-center mt-8 panel-border p-4">
        <p className="manga-sfx text-xl">
          <span className="manga-float">⚡</span> {t('ninjaWay')} <span className="manga-float">⚡</span>
        </p>
      </div>
    </main>
  );
} 