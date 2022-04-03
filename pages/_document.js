import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white text-black dark:bg-black dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
