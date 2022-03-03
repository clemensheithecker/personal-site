import Link from "next/link";

export default function Navitem({ href, name }) {
  return (
    <Link href={href}>
      <a className="flex items-center rounded-lg px-3 py-1 text-lg transition-all hover:bg-gray-200 firefox:hover:bg-gray-100 sm:text-xl">
        {name}
      </a>
    </Link>
  );
}
