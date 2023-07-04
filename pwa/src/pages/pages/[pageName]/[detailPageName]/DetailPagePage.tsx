import * as React from "react";
import { PageProps } from "gatsby";
import { DetailPageTemplate } from "../../../../templates/detailPageTemplate/DetailPageTemplate";

const FeatureDetailPage: React.FC<PageProps> = (props: PageProps) => {
  const pageName = props.params.detailPageName;

  return <DetailPageTemplate {...{ pageName }} />;
};

export default FeatureDetailPage;
