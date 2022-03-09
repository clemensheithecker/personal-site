import Head from "next/head";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import matter from "gray-matter";
import moment from "moment";
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
      <article className="prose prose-bw mx-auto w-full max-w-screen-lg py-5 px-5 prose-h1:font-serif prose-h2:font-serif prose-a:break-words prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-2 hover:prose-a:underline-offset-2 prose-code:rounded-md prose-code:bg-gray-100 prose-code:py-1 prose-code:px-2 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-none prose-ul:list-[square] dark:prose-invert dark:prose-code:bg-gray-900 sm:py-8 sm:px-11">
        <p className="text-gray-600 dark:text-gray-400">
          {updated == null
            ? `Published on ${moment(date).format("LL")}`
            : `Last updated on ${moment(updated).format("LL")}`}
        </p>
        <MDXRemote {...mdxSource} />
      </article>
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
