const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            pre: {
              code: {
                backgroundColor: "inherit",
                padding: theme("spacing.0"),
              },
            },
          },
        },
        bw: {
          css: {
            "--tw-prose-body": theme("colors.black"),
            "--tw-prose-headings": theme("colors.black"),
            "--tw-prose-lead": theme("colors.gray[600]"),
            "--tw-prose-links": theme("colors.blue[600]"),
            "--tw-prose-bold": theme("colors.black"),
            "--tw-prose-counters": theme("colors.gray[500]"),
            "--tw-prose-bullets": theme("colors.gray[300]"),
            "--tw-prose-hr": theme("colors.gray[200]"),
            "--tw-prose-quotes": theme("colors.gray[900]"),
            "--tw-prose-quote-borders": theme("colors.gray[200]"),
            "--tw-prose-captions": theme("colors.gray[500]"),
            "--tw-prose-code": theme("colors.black"),
            "--tw-prose-pre-code": theme("colors.black"),
            "--tw-prose-pre-bg": theme("colors.gray[100]"),
            "--tw-prose-th-borders": theme("colors.gray[300]"),
            "--tw-prose-td-borders": theme("colors.gray[200]"),
            "--tw-prose-invert-body": theme("colors.gray[50]"),
            "--tw-prose-invert-headings": theme("colors.gray[50]"),
            "--tw-prose-invert-lead": theme("colors.gray[400]"),
            "--tw-prose-invert-links": theme("colors.blue[500]"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.gray[400]"),
            "--tw-prose-invert-bullets": theme("colors.gray[600]"),
            "--tw-prose-invert-hr": theme("colors.gray[200]"),
            "--tw-prose-invert-quotes": theme("colors.gray[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.gray[700]"),
            "--tw-prose-invert-captions": theme("colors.gray[400]"),
            "--tw-prose-invert-code": theme("colors.gray[50]"),
            "--tw-prose-invert-pre-code": theme("colors.gray[300]"),
            "--tw-prose-invert-pre-bg": theme("colors.gray[900]"),
            "--tw-prose-invert-th-borders": theme("colors.gray[600]"),
            "--tw-prose-invert-td-borders": theme("colors.gray[700]"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
