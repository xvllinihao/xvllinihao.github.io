import md from "markdown-it";
import matter from "gray-matter";
import fs from "fs";

// export function generateStaticParams() {
//   return [{"/article/setup-markdown-blog": "1"}]
// }

// export async function getPost({slug}:{slug:string}) {
//   const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
//   const { data: frontmatter, content } = matter(fileName);
//   return {
//     props: {
//       frontmatter,
//       content,
//     },
//   };
// }

export default async function Page({ params }: { params: { slug: string } }) {
  // const post = await getPost(params); // Pass the router.query as params

  // return (
  //   <div className="prose mx-auto">
  //     <h1>{post.props.frontmatter.title}</h1>
  //     <div dangerouslySetInnerHTML={{ __html: md().render(post.props.content) }} />
  //   </div>
  // );
}
