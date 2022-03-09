export default function ProjectInfo({ description, tags, link, gradient }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-4 block w-fit break-words rounded-lg bg-gray-100 px-3 py-2 text-blue-600 no-underline hover:underline hover:decoration-2 hover:underline-offset-2 dark:bg-gray-900 dark:text-blue-500"
    >
      {link.replace("https://", "")}
    </a>
  );
}
