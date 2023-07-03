import * as React from "react";
import * as styles from "./LandingTemplate.module.css";
import { Container } from "@conduction/components";
import { useGitHub } from "../../hooks/gitHub";
import { ParsedHTML } from "../../components/ParsedHTML/ParsedHTML";
import { JumbotronTemplate } from "../jumbotronTemplate/JumbotronTemplate";

export const LandingTemplate: React.FC = () => {
  const getContent = useGitHub().getContent("/README.md");

  return (
    <div className={styles.container}>
      <JumbotronTemplate />

      <Container>
        <ParsedHTML contentQuery={getContent} />
      </Container>
    </div>
  );
};
