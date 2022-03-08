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
        <div className="sm:max-w-xl">
          <h1 className="mb-4 font-serif text-4xl font-bold">
            The page you're looking for can't be found.
          </h1>
          <p className="mb-8">
            The page you were after has been deleted, moved, or does not exist.
            Or there was a typo in the URL you followed.
          </p>
          <Link href="/">
            <a className="block w-64 rounded-md bg-gray-200 p-4 text-center font-bold text-black dark:bg-gray-800 dark:text-white">
              Return Home
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
