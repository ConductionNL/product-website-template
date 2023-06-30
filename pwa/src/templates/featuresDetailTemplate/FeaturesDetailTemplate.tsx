import * as React from "react";
import { Container } from "@conduction/components";
import { useGitHub } from "../../hooks/gitHub";
import { ParsedHTML } from "../../components/ParsedHTML/ParsedHTML";

interface FeaturesDetailTemplateProps {
  featureName: string;
}

export const FeaturesDetailTemplate: React.FC<FeaturesDetailTemplateProps> = ({ featureName }) => {
  const getContent = useGitHub().getContent(`/docs/features/${featureName}.md`);

  return (
    <Container>
      <ParsedHTML contentQuery={getContent} />
    </Container>
  );
};
