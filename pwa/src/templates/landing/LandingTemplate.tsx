import * as React from "react";
import { Container } from "@conduction/components";
import { useGitHub } from "../../hooks/resources/gitHub";
import { ParsedHTML } from "../../components/ParsedHTML/ParsedHTML";
import { JumbotronTemplate } from "../jumbotronTemplate/JumbotronTemplate";

export const LandingTemplate: React.FC = () => {
  const getContent = useGitHub().getContent("/README.md");

  return (
    <div>
      <JumbotronTemplate />

      <Container>
        <ParsedHTML contentQuery={getContent} />
      </Container>
    </div>
  );
};
