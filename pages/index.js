import Head from "next/head";
import Image from "next/image";

import profilePicture from "../public/images/profile.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clemens Heithecker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex w-full max-w-screen-xl items-center justify-center">
        <div className="mx-8 mt-24 grid-rows-2 sm:mx-16 sm:my-16 sm:grid sm:grid-cols-12 sm:grid-rows-none sm:items-center sm:gap-10 md:mx-28">
          <div className="sm:col-span-6 md:col-span-7">
            <h2 className="font-serif text-4xl font-bold">Hello,</h2>
            <p className="pt-4 text-xl font-medium">
              I am an international <em>Bachelor of Science in economics</em>{" "}
              student at Tilburg University in the Netherlands. I am passionate
              about <em>computers</em>, <em>programming</em> and{" "}
              <em>data science</em>.
            </p>
            {/* className="text-blue-700" */}
            <p className="pt-4 text-xl font-medium">
              Follow me on{" "}
              <span className="bg-gradient-to-r from-blue-700 to-purple-700 decoration-clone bg-clip-text text-transparent">
                <a
                  href="https://github.com/clemensheithecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-blue-700 hover:border-b-2"
                >
                  GitHub
                </a>
                <span className="text-black">,</span>{" "}
                <a
                  href="https://www.linkedin.com/in/clemensheithecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-blue-700 hover:border-b-2"
                >
                  LinkedIn
                </a>{" "}
                <span className="text-black">and</span>{" "}
                <a
                  href="https://twitter.com/cheithecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-blue-700 hover:border-b-2"
                >
                  Twitter
                </a>
              </span>
              .
            </p>
          </div>
          <div className="-mx-4 mt-12 mb-4 sm:col-span-6 sm:mx-0 sm:mb-0 sm:mt-0 md:col-span-5">
            <Image
              src={profilePicture}
              alt="Picture of Clemens Heithecker"
              layout="responsive"
              placeholder="blur"
            />
          </div>
        </div>
      </main>
    </>
  );
}
