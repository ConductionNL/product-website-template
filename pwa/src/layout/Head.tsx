import * as React from "react";
import _ from "lodash";
import "../styling/index.css";
import { Helmet } from "react-helmet";
import { GatsbyContext } from "../context/gatsby";
import { getPageTitle } from "../services/getPageTitle";

export const Head: React.FC = () => {
  const {
    location,
    pageContext: {
      breadcrumb: { crumbs },
    },
  } = React.useContext(GatsbyContext);

  return (
    <Helmet>
      <title>{`Common Gateway | ${getPageTitle(crumbs, location) ?? "Error"}`}</title>
      <script src="/env.js"></script>
    </Helmet>
  );
};
