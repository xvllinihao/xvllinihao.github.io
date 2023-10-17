import Link from "next/link";
import matter from "gray-matter";
import fs from "fs";
import Head from "next/head";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Il Li Rampante',
} 

async function getPosts() {
  // Get all your posts
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

  return {
    posts,
  };
}

export default async function Articles() {
  const posts = (await getPosts()).posts;

  return (
    <main>
      <Head>
        <title>Il Li Rampante</title>
      </Head>
      <div className="bg-amber-100 flex flex-col">
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className="m-2 flex flex-col"
          >
            <p className="font-serif ml-2">{frontmatter.date}</p>
            <Link href={`/article/${slug}`}>
              <h1 className="ml-4 mt-2 font-serif underline">{frontmatter.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
