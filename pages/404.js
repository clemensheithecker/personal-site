import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Page Not Found - Clemens Heithecker</title>
        <meta
          name="description"
          content="The page you're looking for can't be found."
        />
        <meta
          property="og:title"
          content="Page Not Found - Clemens Heithecker"
        />
        <meta
          property="og:description"
          content="The page you're looking for can't be found."
        />
        <meta
          property="og:url"
          content={`https://clemensheithecker.com${router.asPath}`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <main className="mx-auto flex max-w-screen-lg items-center justify-center px-5 py-5 sm:min-h-[calc(100vh-68px)] sm:py-8 sm:px-11">
        <div className="sm:relative sm:max-w-xl">
          <div className="absolute -top-24 -left-24 h-96 w-96 animate-blob select-none overflow-hidden rounded-full bg-rose-400 opacity-20 mix-blend-multiply blur-2xl filter ease-in-out motion-reduce:scale-90 motion-reduce:animate-none dark:mix-blend-normal sm:block"></div>
          <div className="animation-delay-2000 absolute -top-24 -right-24 h-96 w-96 animate-blob select-none overflow-hidden rounded-full bg-purple-400 opacity-20 mix-blend-multiply blur-2xl filter ease-in-out motion-reduce:scale-110 motion-reduce:animate-none dark:mix-blend-normal sm:block"></div>
          <div className="animation-delay-4000 absolute top-0 left-24 h-96  w-96 animate-blob select-none overflow-hidden rounded-full bg-indigo-400 opacity-20 mix-blend-multiply blur-2xl filter ease-in-out motion-reduce:animate-none dark:mix-blend-normal sm:block"></div>
          <div className="-mx-5 -my-6 h-96 bg-white py-6 px-5 opacity-80 dark:bg-black sm:relative sm:-m-8 sm:h-auto sm:p-8">
            <h1 className="mb-4 font-serif text-4xl font-bold">
              The page you're looking for can't be found.
            </h1>
            <p className="mb-8">
              The page you were after has been deleted, moved, or does not
              exist. Or there was a typo in the URL you followed.
            </p>
            <Link href="/">
              <a className="block w-64 rounded-md bg-gray-200 p-4 text-center font-bold text-black dark:bg-gray-800 dark:text-white">
                Return Home
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
