import md from "markdown-it";
import matter from "gray-matter";
import fs from "fs";
import { Metadata, ResolvingMetadata } from 'next'

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


async function getPost(slug:string) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  console.log("slug:", slug);
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

// Add this interface to define the params type
interface PageProps {
  params: {
    slug: string;
  };
}

// Update the Page component to use the interface
export default async function Page({ params }: PageProps) {
  const post = await getPost(params.slug);

  return (
    <main>
      <div className="prose ml-4 mr-4">
        <h1>{post.props.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(post.props.content) }} />
      </div>
    </main>
  );
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  return {
    title: params.slug,
  }
}