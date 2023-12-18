import * as React from "react";
import _ from "lodash";
import "../styling/index.css";
import { Helmet } from "react-helmet";
import { getPageTitle } from "../services/getPageTitle";
import { useGatsbyContext } from "../context/gatsby";

export const Head: React.FC = () => {
  const { gatsbyContext } = useGatsbyContext();
  const theme = "zutphen-theme" ?? "conduction-theme";

  return (
    <Helmet
      bodyAttributes={{
        class: theme,
      }}
    >
      <title>{`${process.env.GATSBY_PAGE_TITLE ? `${process.env.GATSBY_PAGE_TITLE}` : "Product Page"} | ${
        getPageTitle(gatsbyContext.pageContext?.breadcrumb.crumbs, gatsbyContext.location) ?? "Error"
      }`}</title>
      <link rel="icon" type="svg" href={process.env.GATSBY_FAVICON_URL} />
    </Helmet>
  );
};
