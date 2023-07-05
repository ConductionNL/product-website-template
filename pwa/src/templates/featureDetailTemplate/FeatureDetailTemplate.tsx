import * as React from "react";
import { Container } from "@conduction/components";
import { useGitHub } from "../../hooks/resources/gitHub";
import { ParsedHTML } from "../../components/ParsedHTML/ParsedHTML";

interface FeatureDetailTemplateProps {
  featureName: string;
}

export const FeatureDetailTemplate: React.FC<FeatureDetailTemplateProps> = ({ featureName }) => {
  const getContent = useGitHub().getContent(`/docs/features/${featureName}.md`);

  return (
    <Container>
      <ParsedHTML contentQuery={getContent} />
    </Container>
  );
};
