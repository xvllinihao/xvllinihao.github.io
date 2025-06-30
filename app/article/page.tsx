// 移除未使用的Link导入
import matter from "gray-matter";
import fs from "fs";
import { Metadata } from 'next'
import ArticleList from "../component/ArticleList";
 
export const metadata: Metadata = {
  title: 'Articles - Li no Shinobi',
} 

async function getPosts() {
  try {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
    return posts;
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
}

export default async function Articles() {
  const posts = await getPosts();
  return <ArticleList posts={posts} />;
}
