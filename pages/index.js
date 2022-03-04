import Head from "next/head";
import Image from "next/image";

import profilePicture from "../public/images/profile.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clemens S. Heithecker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex max-w-screen-lg items-center justify-center px-5 py-5 sm:py-8 sm:px-11">
        <div className="sm:grid sm:grid-cols-12 sm:grid-rows-1 sm:gap-6">
          <div className="flex items-center justify-center sm:col-span-6 md:col-span-7">
            <div>
              <h2 className="mb-4 font-serif text-2xl font-bold">Hello,</h2>
              <p className="mb-2">
                I am an international <em>Bachelor of Science in economics</em>{" "}
                student at Tilburg University in the Netherlands. I am
                passionate about <em>computers</em>, <em>programming</em> and{" "}
                <em>data science</em>.
              </p>
              <p className="mb-10">
                Follow me on{" "}
                <a
                  href="https://github.com/clemensheithecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-b-2"
                >
                  GitHub
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/in/clemensheithecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-b-2"
                >
                  LinkedIn
                </a>{" "}
                and{" "}
                <a
                  href="https://twitter.com/cheithecker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-b-2"
                >
                  Twitter
                </a>
                .
              </p>
            </div>
          </div>
          <div className="sm:col-span-6 md:col-span-5">
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
