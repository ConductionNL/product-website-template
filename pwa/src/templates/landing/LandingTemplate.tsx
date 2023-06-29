import * as React from "react";
import Parser from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import { Container } from "@conduction/components";
import { useGitHub } from "../../hooks/gitHub";
import { getOptions } from "../../services/HtmlParser/getOptions";

export const LandingTemplate: React.FC = () => {
  const getContent = useGitHub().getContent("/README.md");

  return (
    <Container>
      {getContent.isLoading && <Skeleton height={"200px"} />}
      {getContent.isSuccess && <div>{Parser(getContent.data, getOptions)}</div>}
    </Container>
  );
};
