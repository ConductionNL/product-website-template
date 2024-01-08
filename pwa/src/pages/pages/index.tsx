import * as React from "react";
import { navigate } from "gatsby";

const IndexPage: React.FC = () => {
  React.useEffect(() => {
    navigate("/");
  });

  return <></>;
};

export default IndexPage;
