import * as React from "react";
import { PageProps } from "gatsby";
import { PageTemplate } from "../../../templates/pageTemplate/PageTemplate";

const FeatureDetailPage: React.FC<PageProps> = (props: PageProps) => {
  const pageSlug = props.params.pageSlug;

  return <PageTemplate {...{ pageSlug }} />;
};

export default FeatureDetailPage;
