import Head from "next/head";
import Image from "next/image";

import profilePicture from "../public/images/profile.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clemens Heithecker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className="fixed top-0 left-0 z-10 flex items-center justify-center w-full text-lg font-semibold bg-white backdrop-filter bg-opacity-80 firefox:bg-opacity-100 backdrop-blur-xl sm:text-xl">
          <div className="w-full max-w-screen-xl px-4 sm:px-8">
            <div className="my-3">
              <span>Clemens S. Heithecker</span>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex items-center justify-center w-full max-w-screen-xl mx-auto sm:min-h-screen">
        <div className="grid-rows-2 mx-8 mt-24 sm:mx-16 sm:my-16 sm:items-center sm:grid sm:gap-10 sm:grid-rows-none sm:grid-cols-12 md:mx-28">
          <div className="md:col-span-7 sm:col-span-6">
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
              <span className="text-transparent decoration-clone bg-gradient-to-r bg-clip-text from-blue-700 to-purple-700">
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
          <div className="mt-12 mb-4 -mx-4 sm:mb-0 sm:mx-0 sm:mt-0 md:col-span-5 sm:col-span-6">
            <Image
              src={profilePicture}
              alt="Picture of Clemens Heithecker"
              layout="responsive"
              placeholder="blur"
            />
            {/* <Image
              src={profilePicture}
              alt="Picture of Clemens Heithecker"
              layout="responsive"
              placeholder="blur"
              className="rounded-xl"
            /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
