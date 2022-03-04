import Link from "next/link";

export default function Navitem({ href, name }) {
  return (
    <Link href={href}>
      <a className="flex items-center rounded-lg px-3 py-1 text-base transition-all hover:bg-gray-200 firefox:hover:bg-gray-100 dark:hover:bg-gray-800 sm:text-lg">
        {name}
      </a>
    </Link>
  );
}
