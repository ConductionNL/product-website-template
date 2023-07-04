import * as React from "react";
import { PageProps } from "gatsby";
import { PageTemplate } from "../../../templates/pageTemplate/PageTemplate";

const FeatureDetailPage: React.FC<PageProps> = (props: PageProps) => {
  const pageName = props.params.pageName;

  return <PageTemplate {...{ pageName }} />;
};

export default FeatureDetailPage;
