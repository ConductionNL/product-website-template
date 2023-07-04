import * as React from "react";
import * as styles from "./JumbotronTemplate.module.css";
import { Heading, Paragraph, Image } from "@utrecht/component-library-react/dist/css-module";
import { Container } from "@conduction/components";

export const JumbotronTemplate: React.FC = () => {
  const jumbotronTitle = window.sessionStorage.getItem("JUMBOTRON_TITLE");
  const jumbotronSubtitle = window.sessionStorage.getItem("JUMBOTRON_SUBTITLE");
  const jumbotronDescription = window.sessionStorage.getItem("JUMBOTRON_DESCRIPTION");
  const jumbotronSVG = window.sessionStorage.getItem("JUMBOTRON_SVG");

  return (
    <div className={styles.wrapper}>
      <Container layoutClassName={styles.container}>
        <div className={styles.content}>
          <Heading level={1}>{jumbotronTitle}</Heading>

          <span className={styles.subtitle}>{jumbotronSubtitle}</span>

          <Paragraph>{jumbotronDescription} </Paragraph>
        </div>

        <div className={styles.imageContainer}>
          <Image src={jumbotronSVG ?? ""} alt={`${jumbotronTitle}-image`} className={styles.image} />
        </div>
      </Container>
    </div>
  );
};
