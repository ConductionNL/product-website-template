import * as React from "react";
import * as styles from "./JumbotronTemplate.module.css";
import { Heading, Paragraph, Image } from "@utrecht/component-library-react/dist/css-module";
import clsx from "clsx";
import { Container } from "@conduction/components";

export const JumbotronTemplate: React.FC = () => {
  const JumbotronTitle = window.sessionStorage.getItem("JUMBOTRON_TITLE");
  const JumbotronSubtitle = window.sessionStorage.getItem("JUMBOTRON_SUBTITLE");
  const JumbotronDescription = window.sessionStorage.getItem("JUMBOTRON_DESCRIPTION");
  const JumbotronSVG = window.sessionStorage.getItem("JUMBOTRON_SVG");

  return (
    <div className={styles.wrapper}>
      <Container layoutClassName={styles.container}>
        <div className={styles.content}>
          <Heading level={1}>{JumbotronTitle}</Heading>

          <span>{JumbotronSubtitle}</span>

          <Paragraph>{JumbotronDescription} </Paragraph>
        </div>

        <Image src={JumbotronSVG ?? ""} alt={`${JumbotronTitle}-image`} className={styles.image} />
      </Container>
    </div>
  );
};
