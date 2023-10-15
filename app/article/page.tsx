import Link from "next/link";
import matter from "gray-matter";
import fs from "fs";

export async function getPosts() {
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
    <main className="min-h-screen">
      <head>
        <title>Il Li Rampante</title>
      </head>
      <div className="bg-amber-100 min-h-screen flex flex-col">
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className="m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <Link href={`/articles/${slug}`}>
              <h1 className="p-4">{frontmatter.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
