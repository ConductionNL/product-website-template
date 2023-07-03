import * as React from "react";
import { PageProps } from "gatsby";
import { FeatureDetailTemplate } from "../../../templates/featureDetailTemplate/FeatureDetailTemplate";

const FeatureDetailPage: React.FC<PageProps> = (props: PageProps) => {
  const featureName = props.params.featureName;
  return <FeatureDetailTemplate {...{ featureName }} />;
};

export default FeatureDetailPage;
