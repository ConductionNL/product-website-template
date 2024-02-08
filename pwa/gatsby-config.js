require("dotenv").config({
  path: `static/.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix:
    process.env.GATSBY_USE_GITHUB_REPOSITORY_NAME_AS_PATH_PREFIX === "true"
      ? `/${process.env.GATSBY_GITHUB_REPOSITORY_NAME}`
      : "", // we do NOT want to set the prefix if we're using an DNS
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/Layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
        excludeOptions: {
          separator: ".",
        },
        autoGenHomeLabel: "Home",
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "nl-NL",
      },
    },
    {
      resolve: "gatsby-plugin-security-txt",
      options: {
        intro: `${
          process.env.GATSBY_SECURITY_TXT_INTRO ??
          "Information related to reporting security vulnerabilities of this site."
        }`,
        contact: `${
          process.env.GATSBY_SECURITY_TXT_CONTACT ?? "mailto:info@conduction.nl"
        }`,
        expires: `${
          process.env.GATSBY_SECURITY_TXT_EXPIRES ?? "2024-12-31T23:00:00.000Z"
        }`,
        encryption: `${process.env.GATSBY_SECURITY_TXT_ENCRYPTION ?? ""}`,
        acknowledgements: `${
          process.env.GATSBY_SECURITY_TXT_ACKNOWLEDGEMENTS ?? ""
        }`,
        languages: `${process.env.GATSBY_SECURITY_TXT_LANGUAGES ?? "nl, en"}`,
        canonical: `${process.env.GATSBY_SECURITY_TXT_CANONICAL ?? ""}`,
        policy: `${process.env.GATSBY_SECURITY_TXT_POLICY ?? ""}`,
        hiring: `${process.env.GATSBY_SECURITY_TXT_HIRING ?? ""}`,
      },
    },
  ],
};
