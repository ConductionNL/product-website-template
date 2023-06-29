import * as React from "react";
import { Container } from "@conduction/components";
import { useGitHub } from "../../hooks/gitHub";
import { ParsedHTML } from "../../components/ParsedHTML/ParsedHTML";

export const LandingTemplate: React.FC = () => {
  const getContent = useGitHub().getContent("/README.md");

  return (
    <Container>
      <ParsedHTML contentQuery={getContent} />
    </Container>
  );
};
