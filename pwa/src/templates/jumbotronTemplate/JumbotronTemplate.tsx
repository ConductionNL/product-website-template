import * as React from "react";
import * as styles from "./JumbotronTemplate.module.css";
import { Image } from "@utrecht/component-library-react/dist/css-module";
import { Container } from "@conduction/components";
import { UtrechtHeading1, UtrechtParagraph } from "@utrecht/web-component-library-react";

export const JumbotronTemplate: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [subtitle, setSubtitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [svg, setSvg] = React.useState<string>("");

  React.useEffect(() => {
    setTitle(window.sessionStorage.getItem("JUMBOTRON_TITLE") ?? "");
    setSubtitle(window.sessionStorage.getItem("JUMBOTRON_SUBTITLE") ?? "");
    setDescription(window.sessionStorage.getItem("JUMBOTRON_DESCRIPTION") ?? "");
    setSvg(window.sessionStorage.getItem("JUMBOTRON_SVG") ?? "");
  }, []);

  return (
    <div className={styles.wrapper}>
      <Container layoutClassName={styles.container}>
        <div className={styles.content}>
          <UtrechtHeading1>{${process.env.GATSBY_JUMBOTRON_TITLE}}</UtrechtHeading1>

          <span className={styles.subtitle}>{${process.env.GATSBY_JUMBOTRON_SUBTITLE}}</span>

          <UtrechtParagraph className={styles.introduction}>{${process.env.GATSBY_JUMBOTRON_DESCRIPTION}}</UtrechtParagraph>
        </div>

        <Image src={svg ?? ""} alt={`${title}-image`} className={styles.image} />
      </Container>
    </div>
  );
};
