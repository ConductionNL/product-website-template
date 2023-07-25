import * as React from "react";
import * as styles from "./JumbotronTemplate.module.css";
import { Image } from "@utrecht/component-library-react/dist/css-module";
import { Container } from "@conduction/components";
import { Heading1, Paragraph } from "@utrecht/component-library-react/dist/css-module";

export const JumbotronTemplate: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Container layoutClassName={styles.container}>
        <div className={styles.content}>
          <Heading1>{process.env.GATSBY_JUMBOTRON_TITLE}</Heading1>

          <span className={styles.subtitle}>{process.env.GATSBY_JUMBOTRON_SUBTITLE}</span>

          <Paragraph>{process.env.GATSBY_JUMBOTRON_DESCRIPTION}</Paragraph>
        </div>

        <Image
          src={process.env.GATSBY_JUMBOTRON_SVG}
          alt={`${process.env.GATSBY_JUMBOTRON_TITLE}-image`}
          className={styles.image}
        />
      </Container>
    </div>
  );
};
