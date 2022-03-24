// next.config.js
module.exports = {
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  redirects: async () => {
    return [
      // Social media
      {
        source: "/github",
        destination: "https://github.com/clemensheithecker/",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/clemensheithecker/",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/cheithecker",
        permanent: true,
      },
      // Projects
      {
        source: "/bachelor-thesis",
        destination: "https://github.com/clemensheithecker/bachelor-thesis",
        permanent: true,
      },
    ];
  },
};
