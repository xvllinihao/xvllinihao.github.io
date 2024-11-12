import md from "markdown-it";
import matter from "gray-matter";
import fs from "fs";
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const files = fs.readdirSync("posts");
  const slugs = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    return {
      slug,
    };
  });
  console.log(slugs);

  return slugs;
  // return [{slug:"setup-markdown-blog"}];
}


export default async function Page( { params }: Props) {
  const slug = (await params).slug;
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  return (
    <main>
      <div className="prose mx-auto">
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </main>
  );
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  return {
    title: (await params).slug,
  }
}