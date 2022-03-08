import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-screen-lg px-5 pt-5 pb-10 sm:px-11 sm:pt-8 sm:pb-16">
      <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
      <ul className=" -mx-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <li>
          <ul className="space-y-4">
            <li>
              <Link href={"/"}>
                <a className="rounded-lg px-3 py-2 text-base text-gray-500 transition-all hover:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-900">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/blog"}>
                <a className="rounded-lg px-3 py-2 text-base text-gray-500 transition-all hover:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-900">
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <ul className="space-y-4">
            <li>
              <a
                href="https://github.com/clemensheithecker/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-base text-gray-500 transition-all hover:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-900"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/cheithecker"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-base text-gray-500 transition-all hover:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-900"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/clemensheithecker/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-base text-gray-500 transition-all hover:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-900"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
