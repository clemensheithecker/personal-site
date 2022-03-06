export default function Custom404() {
  return (
    <main className="mx-auto max-w-screen-lg px-5 py-5 sm:flex sm:items-center sm:justify-center sm:py-8 sm:px-11">
      <div className="sm:max-w-xl">
        <h1 className="mb-4 font-serif text-4xl font-bold">
          The page you're looking for can't be found.
        </h1>
        <p className="mb-8">
          The page you were after has been deleted, moved, or does not exist. Or
          there was a typo in the URL you followed.
        </p>
        <button
          type="button"
          className="w w-64 rounded-md bg-gray-200 p-4 text-center font-bold text-white dark:bg-gray-800 dark:text-white"
        >
          Return Home
        </button>
      </div>
    </main>
  );
}
