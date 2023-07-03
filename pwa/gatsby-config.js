require("dotenv").config({
  path: "static/.env",
});

module.exports = {
  pathPrefix: `/${process.env.GITHUB_REPOSITORY_NAME}`,
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

        crumbLabelUpdates: [
          {
            pathname: "/features/[featureName]",
            crumbLabel: "feature",
          },
        ],
      },
    },
  ],
};
