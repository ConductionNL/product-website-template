import * as React from "react";
import { PageProps } from "gatsby";
import { FeaturesDetailTemplate } from "../../../templates/featuresDetailTemplate/FeaturesDetailTemplate";

const FeaturesDetailPage: React.FC<PageProps> = (props: PageProps) => {
  const featureName = props.params.featureName;
  return <FeaturesDetailTemplate {...{ featureName }} />;
};

export default FeaturesDetailPage;
