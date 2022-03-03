import Link from "next/link";
import Navitem from "./navitem";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-white bg-opacity-80 backdrop-blur-xl backdrop-filter firefox:bg-opacity-100">
      <div className="mx-auto max-w-screen-xl px-2 py-2 sm:px-8">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {/* Home */}
            <div className="font-semibold">
              <Navitem href={"/"} name="Clemens S. Heithecker" />
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
