import Link from "next/link";
import { useEffect, useState } from "react";

import Navitem from "./Navitem";

export default function Navbar() {
  // Calculate client window height and store it as a state
  const [clientWindowHeight, setClientWindowHeight] = useState();

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  /*
  useEffect(() => {
    console.log(`Client window height = ${clientWindowHeight}`);
  }, [clientWindowHeight]);
  */

  return (
    // Change navbar style based on client window height
    <nav
      className={`fixed top-0 left-0 z-10 w-full bg-white bg-opacity-80 backdrop-blur-xl backdrop-filter firefox:bg-opacity-100 dark:bg-black dark:bg-opacity-80 dark:firefox:bg-opacity-100 ${
        clientWindowHeight > 0
          ? `shadow-sm ring-1 ring-gray-900 ring-opacity-5 dark:ring-gray-100 dark:ring-opacity-10`
          : ``
      }`}
    >
      <div className="mx-auto max-w-screen-lg px-2 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {/* Home */}
            <div className="">
              <Link href="/">
                <a className="flex items-center rounded-lg bg-black bg-clip-text px-3 py-1 text-base font-semibold text-transparent transition hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 dark:bg-white dark:hover:from-blue-500 dark:hover:to-purple-500 sm:text-lg">
                  Clemens S. Heithecker
                </a>
              </Link>
            </div>

            {/* Primary navigation */}
            <div className="flex space-x-2">
              <Navitem href={"/blog"} name="Blog" />
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="hidden space-x-4 sm:flex">
            {/* Secondary navigation items */}
          </div>
        </div>
      </div>
    </nav>
  );
}
