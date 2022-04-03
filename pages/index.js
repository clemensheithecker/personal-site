import Head from "next/head";
import Image from "next/image";

import ProjectCard from "../components/ProjectCard";

import { projectsData } from "../data/projects";
import profilePicture from "../public/images/profile.jpg";

export const getStaticProps = async () => {
  return {
    props: {
      projects: projectsData,
    },
  };
};

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Clemens Heithecker</title>
        <meta
          name="description"
          content="I am a data and programming enthusiast trying to learn something new everyday."
        />
        <meta property="og:title" content="Clemens Heithecker" />
        <meta
          property="og:description"
          content="I am a data and programming enthusiast trying to learn something new everyday."
        />
        <meta property="og:url" content="https://clemensheithecker.com" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="mx-auto max-w-screen-lg">
        <div className="flex items-center justify-center px-5 py-5 sm:min-h-[calc(75vh-68px)] sm:py-8 sm:px-11">
          <div className="sm:grid sm:grid-cols-12 sm:grid-rows-1 sm:gap-6">
            <div className="flex items-center justify-center sm:col-span-6 md:col-span-7">
              <div>
                <h2 className="mb-4 font-serif text-2xl font-bold">Hello,</h2>
                <p className="mb-2">
                  I am Clemens&mdash;a data and programming enthusiast ready to
                  put my data wrangling, visualization, and modeling skills to
                  work. My fascination with <em>data exploration</em>,{" "}
                  <em>regression analyis</em>, and <em>machine learning</em>{" "}
                  inspire me to learn something new every day.
                </p>
                <p className="mb-2">
                  Currently, I am finalizing my bachelor of science degree in
                  economics as an international student at{" "}
                  <a
                    href="https://www.tilburguniversity.edu/education/bachelors-programs/economics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline hover:decoration-blue-600 hover:decoration-2 hover:underline-offset-2 dark:text-blue-500 dark:hover:decoration-blue-500"
                  >
                    Tilburg University
                  </a>
                  .
                </p>
                <p className="mb-10 sm:mb-0">
                  Follow me on{" "}
                  <a
                    href="https://github.com/clemensheithecker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline hover:decoration-blue-600 hover:decoration-2 hover:underline-offset-2 dark:text-blue-500 dark:hover:decoration-blue-500"
                  >
                    GitHub
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/clemensheithecker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline hover:decoration-blue-600 hover:decoration-2 hover:underline-offset-2 dark:text-blue-500 dark:hover:decoration-blue-500"
                  >
                    LinkedIn
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://twitter.com/cheithecker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline hover:decoration-blue-600 hover:decoration-2 hover:underline-offset-2 dark:text-blue-500 dark:hover:decoration-blue-500"
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
        </div>
        <div className="mt-4 px-5 py-5 sm:py-8 sm:px-11">
          <h2 className="mb-4 font-serif text-2xl font-bold">Projects</h2>
          <p className="mb-8">
            Here is a selection of my recent projects in which I applied my data
            science skills:
          </p>
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                gradient={project.gradient}
              />
            ))}
          </div>
          <p>
            Find all my projects on my{" "}
            <a
              href="https://github.com/clemensheithecker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline hover:decoration-blue-600 hover:decoration-2 hover:underline-offset-2 dark:text-blue-500 dark:hover:decoration-blue-500"
            >
              GitHub page
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
