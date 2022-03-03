import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <div className="mx-auto w-full max-w-screen-lg px-5 py-2 sm:py-8 sm:px-11">
      <h1 className="mb-4 font-serif text-4xl font-bold">Blog</h1>
      <p className="mb-8">
        This blog is a space for sharing my thoughts and things I find
        interesting. I am planning on writing about tech, data, and programming.
      </p>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <div>
            <Link href={"/blog/" + post.slug} passHref key={index}>
              <a>
                <div className="mb-2 flex flex-col sm:flex-row">
                  <h4 className="mb-2 w-full text-xl font-semibold sm:mb-0">
                    {post.frontMatter.title}
                  </h4>
                  <p className="w-32 text-gray-600 sm:text-right">
                    {post.frontMatter.date}
                  </p>
                </div>
                <p>{post.frontMatter.description}</p>
              </a>
            </Link>
          </div>
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
