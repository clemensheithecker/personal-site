export default function ProjectInfo({ tags, link }) {
  return (
    <div className="not-prose flex flex-col justify-between sm:flex-row">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2 block w-fit break-words rounded-lg bg-blue-50 px-2 py-1 text-blue-600 no-underline hover:underline hover:decoration-2 hover:underline-offset-2 dark:bg-gray-900 dark:text-blue-500 sm:mb-4 sm:mb-4"
      >
        GitHub repository
      </a>
      <ul className="mb-4 flex space-x-2 sm:space-x-4">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="h-fit rounded-lg bg-gray-100 px-2 py-1 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
