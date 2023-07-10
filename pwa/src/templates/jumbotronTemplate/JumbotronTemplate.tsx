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
          <UtrechtHeading1>{title}</UtrechtHeading1>

          <span className={styles.subtitle}>{subtitle}</span>

          <UtrechtParagraph>{description}</UtrechtParagraph>
        </div>

        <div className={styles.imageContainer}>
          <Image src={svg ?? ""} alt={`${title}-image`} className={styles.image} />
        </div>
      </Container>
    </div>
  );
};
