import Head from "next/head";
import Link from "next/link";

import fs from "fs";
import matter from "gray-matter";
import moment from "moment";
import { motion } from "framer-motion";
import path from "path";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Clemens Heithecker</title>
        <meta
          name="description"
          content="I write about my projects, computers, and everything else I find interesting."
        />
        <meta property="og:title" content="Blog - Clemens Heithecker" />
        <meta
          property="og:description"
          content="I write about my projects, computers, and everything else I find interesting."
        />
        <meta property="og:url" content="https://clemensheithecker.com/blog" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="mx-auto w-full max-w-screen-lg px-5 py-5 sm:py-8 sm:px-11">
        <h1 className="mb-4 font-serif text-4xl font-bold">Blog</h1>
        <p className="mb-8">
          This blog is a space for sharing my thoughts and things I find
          interesting. I am planning on writing about tech, data, and
          programming.
        </p>
        <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
        <ul className="space-y-8">
          {posts.map((post, index) => (
            <motion.li
              key={index}
              className="hover:cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={"/blog/" + post.slug} passHref>
                <a>
                  <div className="mb-2 flex flex-col sm:flex-row">
                    <h2 className="mb-2 w-full text-xl font-semibold sm:mb-0">
                      {post.frontMatter.title}
                    </h2>
                    <p className="w-32 text-gray-600 dark:text-gray-400 sm:text-right">
                      {post.frontMatter.updated == null
                        ? moment(post.frontMatter.date).format("LL")
                        : moment(post.frontMatter.updated).format("LL")}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.frontMatter.description}
                  </p>
                </a>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
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
