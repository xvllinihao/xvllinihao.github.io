import { Metadata } from 'next';
import ArticleContent from "../../component/ArticleContent";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const fs = await import('fs');
    const files = fs.readdirSync('posts');
    return files
      .filter((filename) => filename.endsWith('.md'))
      .map((filename) => ({
        slug: filename.replace('.md', ''),
      }));
  } catch {
    return [];
  }
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  return <ArticleContent slug={slug} />;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  try {
    const fs = await import('fs');
    const matter = await import('gray-matter');
    const slug = (await params).slug;
    const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
    const { data: frontmatter } = matter.default(fileName);
    
    return {
      title: `${frontmatter.title} - Li no Shinobi`,
      description: frontmatter.description || frontmatter.title,
    }
  } catch {
  return {
      title: 'Article - Li no Shinobi',
      description: 'Ninja developer article'
    }
  }
}