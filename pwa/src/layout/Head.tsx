import * as React from "react";
import "../styling/index.css";
import { Helmet } from "react-helmet";

export const Head: React.FC = () => {
  return (
    <Helmet>
      <title>Product Website Template</title>
      <script src="/env.js"></script>
    </Helmet>
  );
};
