import Head from "next/head";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import matter from "gray-matter";
import moment from "moment";
import { motion } from "framer-motion";
import path from "path";

export default function PostPage({
  frontMatter: { title, date, updated, description },
  slug,
  mdxSource,
}) {
  return (
    <>
      <Head>
        <title>{title} - Clemens Heithecker</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - Clemens Heithecker`} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://clemensheithecker.com/blog/${slug}`}
        />
        <meta property="og:type" content="article" />
      </Head>
      <motion.article
        className="w-scren mx-auto w-full max-w-screen-lg py-5 px-5 sm:py-8 sm:px-11"
        initial={{ opacity: 0.75, y: 6 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
        }}
      >
        <p className="text-gray-600 dark:text-gray-400">
          {updated == null
            ? `Published on ${moment(date).format("LL")}`
            : `Last updated on ${moment(updated).format("LL")}`}
        </p>
        <div className="prose prose-bw max-w-screen-lg prose-h1:my-6 prose-h1:font-serif prose-h1:text-4xl prose-h1:font-bold prose-h2:mb-4 prose-h2:mt-12 prose-h2:font-serif prose-p:mb-6 prose-p:leading-normal last-of-type:prose-p:mb-0 prose-a:break-words prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-2 hover:prose-a:underline-offset-2 prose-code:rounded-md prose-code:bg-gray-100 prose-code:py-1 prose-code:px-2 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-none prose-ul:list-[square] prose-li:leading-normal prose-table:mx-auto dark:prose-invert dark:prose-code:bg-gray-900 sm:prose-table:w-5/6 md:prose-table:w-4/6">
          <MDXRemote {...mdxSource} />
        </div>
      </motion.article>
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
