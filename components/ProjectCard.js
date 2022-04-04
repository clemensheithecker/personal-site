import Link from "next/link";

import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  gradient,
}) {
  return (
    <Link href={link}>
      <motion.a
        className={`bg-gradient-to-r hover:bg-transparent ${gradient} p-1`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="h-full flex-col justify-between bg-white p-4 opacity-95 dark:bg-black dark:opacity-90 sm:flex">
          <div>
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="mb-8">{description}</p>
          </div>
          <ul className="flex space-x-3">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-lg bg-gray-100 px-2 py-1 text-sm text-gray-700 opacity-90 dark:bg-gray-800 dark:text-gray-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </motion.a>
    </Link>
  );
}
