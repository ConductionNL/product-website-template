import * as React from "react";
import * as styles from "./JumbotronTemplate.module.css";
import { Image } from "@utrecht/component-library-react/dist/css-module";
import { Heading1, Paragraph, Page, PageContent } from "@utrecht/component-library-react/dist/css-module";

export const JumbotronTemplate: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Page>
        <PageContent>
          <div className={styles.container}>
            <div className={styles.content}>
              <Heading1 className={styles.header}>{process.env.GATSBY_JUMBOTRON_TITLE}</Heading1>

              <span className={styles.subtitle}>{process.env.GATSBY_JUMBOTRON_SUBTITLE}</span>

              <Paragraph>{process.env.GATSBY_JUMBOTRON_DESCRIPTION}</Paragraph>
            </div>

            <Image
              src={process.env.GATSBY_JUMBOTRON_SVG}
              alt={`${process.env.GATSBY_JUMBOTRON_TITLE}-image`}
              className={styles.image}
            />
          </div>
        </PageContent>
      </Page>
    </div>
  );
};
