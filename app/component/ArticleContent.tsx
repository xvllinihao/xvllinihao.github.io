"use client";
import md from "markdown-it";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { useEffect, useState } from "react";

interface ArticleData {
  frontmatter: {
    title?: string;
    date?: string;
    description?: string;
    [key: string]: unknown;
  };
  content: string;
}

export default function ArticleContent({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const [articleData, setArticleData] = useState<ArticleData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await fetch(`/api/articles/${slug}`);
        if (!response.ok) {
          throw new Error('Article not found');
        }
        const data = await response.json();
        setArticleData(data);
      } catch {
        console.error("Error loading article");
        setError("Article not found");
      }
    };

    getArticle();
  }, [slug]);

  if (error) {
    return (
      <main className="bg-white min-h-screen p-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="manga-card p-8">
            <div className="text-6xl mb-4">❌</div>
            <h1 className="manga-title text-2xl mb-3">
              {t('language') === 'en' ? 'ARTICLE NOT FOUND' : '文章未找到'}
            </h1>
            <p className="kishimoto-text text-lg mb-4">
              {t('language') === 'en' ? 'The requested article could not be found.' : '请求的文章未找到。'}
            </p>
            <Link href="/article" className="manga-button px-6 py-3 inline-flex items-center">
              <span className="mr-2 manga-float">📚</span>
              <span className="manga-text">{t('backTo')} {t('articles')}</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!articleData) {
    return (
      <main className="bg-white min-h-screen p-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="manga-card p-8">
            <div className="text-6xl mb-4 manga-float">⚡</div>
            <h1 className="manga-title text-2xl mb-3">
              {t('language') === 'en' ? 'LOADING...' : '加载中...'}
            </h1>
          </div>
        </div>
      </main>
    );
  }

  const { frontmatter, content } = articleData;

  return (
    <main className="bg-white min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* 返回按钮 */}
        <div className="mb-6">
          <Link href="/article" className="manga-button px-4 py-2 inline-flex items-center">
            <span className="mr-2">⚡</span>
            <span className="manga-text">{t('backTo')} {t('articles')}</span>
          </Link>
        </div>

        {/* 文章头部 */}
        <div className="panel-border p-6 mb-6 scroll-fade-in speed-lines">
          <div className="text-center">
            <div className="text-4xl mb-4 manga-float">📜</div>
            <h1 className="manga-title text-3xl mb-3">{frontmatter.title || 'Untitled'}</h1>
            {frontmatter.date && (
              <p className="manga-text text-lg">
                📅 {frontmatter.date}
              </p>
            )}
            <div className="mt-4 flex justify-center">
              <span className="manga-sfx text-xl">🥷</span>
            </div>
          </div>
        </div>

        {/* 文章内容 */}
        <div className="manga-card p-8 scroll-fade-in">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:manga-title prose-headings:text-black 
              prose-p:manga-text prose-p:text-black prose-p:leading-relaxed
              prose-a:text-black prose-a:hover:text-gray-600 prose-a:font-bold prose-a:underline
              prose-strong:text-black prose-strong:manga-title
              prose-code:bg-gray-100 prose-code:text-black prose-code:px-2 prose-code:py-1 prose-code:border prose-code:border-black
              prose-pre:bg-black prose-pre:text-white prose-pre:border-4 prose-pre:border-black
              prose-blockquote:border-l-8 prose-blockquote:border-black prose-blockquote:bg-gray-50 prose-blockquote:manga-text
              prose-ul:manga-text prose-ol:manga-text prose-li:text-black
              "
            dangerouslySetInnerHTML={{ __html: md().render(content) }} 
          />
        </div>

        {/* 文章底部 */}
        <div className="mt-8 panel-border p-4 text-center scroll-fade-in">
          <p className="manga-sfx text-lg">
            <span className="manga-float">⚡</span> 
            {t('language') === 'en' ? '"HOPE THIS JOURNEY HELPS SOMEONE"' : '"希望这次修行能帮助到他人"'} 
            <span className="manga-float">⚡</span>
          </p>
          <p className="kishimoto-text text-sm mt-2">- Li no Shinobi</p>
        </div>

        {/* 导航到其他文章 */}
        <div className="mt-6 text-center">
          <Link href="/article" className="manga-button px-6 py-3 inline-flex items-center">
            <span className="mr-2 manga-float">📚</span>
            <span className="manga-text">
              {t('language') === 'en' ? 'VIEW OTHER ARTICLES' : '查看其他文章'}
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
} 