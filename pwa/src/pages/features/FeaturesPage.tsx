import * as React from "react";
import { navigate } from "gatsby";

const FeaturesPage: React.FC = () => {
  React.useEffect(() => {
    navigate("/");
  });

  return <></>;
};

export default FeaturesPage;
