export default function Navitem({ title, description, tags, link, gradient }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`transform bg-gradient-to-r ${gradient} p-1 transition-all hover:scale-[1.01]`}
    >
      <div className="h-full bg-white p-4 dark:bg-black">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4">{description}</p>
        <ul className="flex space-x-3">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="rounded-lg bg-gray-100 px-2 py-1 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
