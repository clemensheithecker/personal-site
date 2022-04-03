import Head from "next/head";
import Image from "next/image";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypeImgSize from "rehype-img-size";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";

import ProjectInfo from "../../components/ProjectInfo";

const components = {
  img: (props) => (
    <div className="mx-auto sm:w-5/6 md:w-4/6">
      <Image {...props} layout="responsive" loading="lazy" />
    </div>
  ),
  ProjectInfo,
};

export default function ProjectPage({
  frontMatter: { title, description, tags, link, gradient },
  slug,
  mdxSource,
}) {
  const coverImage = require(`/public/images/projects/${slug}.png`);
  const coverImageURL = `https://clemensheithecker.com/images/projects/${slug}.png`;

  const data = {
    description: description,
    tags: tags,
    link: link,
    gradient: gradient,
  };

  return (
    <>
      <Head>
        <title>{title} - Clemens Heithecker</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - Clemens Heithecker`} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://clemensheithecker.com/projects/${slug}`}
        />
        <meta property="og:image" content={coverImageURL} />
        <meta property="og:type" content="article" />
      </Head>
      <article className="w-scren mx-auto w-full max-w-screen-lg py-5 px-5 sm:py-8 sm:px-11">
        <div className="mb-8 sm:mb-12 lg:-mx-8">
          <Image
            src={coverImage}
            alt="Do people rent bikes more often on weekends?"
            layout="responsive"
            placeholder="blur"
          />
        </div>
        <div className="prose prose-bw mx-auto max-w-screen-md prose-h1:mb-6 prose-h1:font-serif prose-h1:text-4xl prose-h1:font-bold prose-h2:mb-4 prose-h2:mt-12 prose-h2:font-serif prose-p:mb-6 prose-p:leading-normal last-of-type:prose-p:mb-0 prose-a:break-words prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-2 hover:prose-a:underline-offset-2 prose-code:rounded-md prose-code:bg-gray-100 prose-code:py-1 prose-code:px-2 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-none prose-ul:list-[square] prose-li:leading-normal prose-table:mx-auto dark:prose-invert dark:prose-code:bg-gray-900 sm:prose-table:w-5/6 md:prose-table:w-4/6">
          <MDXRemote {...mdxSource} components={components} scope={data} />
        </div>
      </article>
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("projects"));
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
    path.join("projects", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkUnwrapImages],
      rehypePlugins: [[rehypeImgSize, { dir: "public" }]],
    },
  });

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
