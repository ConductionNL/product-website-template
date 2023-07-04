import * as React from "react";
import { PageProps } from "gatsby";
import { DetailPageTemplate } from "../../../../templates/detailPageTemplate/DetailPageTemplate";

const FeatureDetailPage: React.FC<PageProps> = (props: PageProps) => {
  const detailPageName = props.params.detailPageName;
  const pageName = props.params.pageName;

  return <DetailPageTemplate {...{ pageName, detailPageName }} />;
};

export default FeatureDetailPage;
