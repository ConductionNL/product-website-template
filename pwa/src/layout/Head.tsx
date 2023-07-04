import * as React from "react";
import _ from "lodash";
import "../styling/index.css";
import { Helmet } from "react-helmet";
import { registerEnvironment } from "../../static/env";
import { getPageTitle } from "../services/getPageTitle";
import { useGatsbyContext } from "../context/gatsby";

export const Head: React.FC = () => {
  const { gatsbyContext } = useGatsbyContext();

  React.useEffect(() => {
    registerEnvironment();
  }, []);

  return (
    <Helmet>
      <title>{`Common Gateway | ${
        getPageTitle(gatsbyContext.pageContext?.breadcrumb.crumbs, gatsbyContext.location) ?? "Error"
      }`}</title>
    </Helmet>
  );
};
