import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-5 py-8 sm:px-11">
      <h1 className="font-serif text-4xl font-bold">Blog</h1>
      <p className="mt-4 text-xl">A collection of thoughts.</p>
      <div className="mt-8">
        {posts.map((post, index) => (
          <Link href={"/blog/" + post.slug} passHref key={index}>
            <a>
              <div className="flex">
                <h4 className="w-full text-xl font-semibold sm:text-2xl">
                  {post.frontMatter.title}
                </h4>
                <p className="w-32 text-right text-lg text-gray-600">
                  {post.frontMatter.date}
                </p>
              </div>
              <p className="text-xl">{post.frontMatter.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
