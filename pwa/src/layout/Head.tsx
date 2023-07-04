import * as React from "react";
import _ from "lodash";
import "../styling/index.css";
import { Helmet } from "react-helmet";
import { registerEnvironment } from "../../static/env";
import { getPageTitle } from "../services/getPageTitle";

export const Head: React.FC = () => {
  const {
    location,
    pageContext: {
      breadcrumb: { crumbs },
    },
  } = React.useContext(GatsbyContext);

export const Head: React.FC<HeadProps> = ({ crumbs }) => {
  const title = crumbs && _.capitalize(_.last(crumbs).crumbLabel);

  React.useEffect(() => {
    registerEnvironment();
  }, []);

  return (
    <Helmet>
      <title>{`Common Gateway | ${getPageTitle(crumbs, location) ?? "Error"}`}</title>
    </Helmet>
  );
};
