import * as React from "react";
import { Container } from "@conduction/components";
import { useGitHub } from "../../hooks/gitHub";
import { ParsedHTML } from "../../components/ParsedHTML/ParsedHTML";

export const FeaturesTemplate: React.FC = () => {
  const getContent = useGitHub().getContent(`/docs/features/README.md`);

  return (
    <Container>
      <ParsedHTML contentQuery={getContent} />
    </Container>
  );
};
