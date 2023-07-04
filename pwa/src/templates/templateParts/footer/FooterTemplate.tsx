import * as React from "react";
import * as styles from "./FooterTemplate.module.css";
import { Container, ToolTip } from "@conduction/components";
import { UnorderedList, UnorderedListItem } from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import { SlackLogo } from "../../../assets/svgs/Slack";
import { GitHubLogo } from "../../../assets/svgs/Github";

export const FooterTemplate: React.FC = () => {
  const [logoUrl, setLogoUrl] = React.useState<string>("");

  React.useEffect(() => {
    setLogoUrl(window.sessionStorage.getItem("LOGO_URL") ?? "");
  });

  return (
    <footer className={styles.footer}>
      <Container>
        <UnorderedList className={styles.list}>
          <section className={styles.linksContainer}>
            <UnorderedListItem onClick={() => navigate("/")}>Home</UnorderedListItem>

            <UnorderedListItem onClick={() => navigate("/features")}>Features</UnorderedListItem>

            <UnorderedListItem onClick={() => open(window.sessionStorage.getItem("READ_THE_DOCS_URL") ?? "#")}>
              <FontAwesomeIcon icon={faExternalLinkSquare} /> Documentation
            </UnorderedListItem>

            <section className={styles.iconsContainer}>
              <UnorderedListItem onClick={() => open(window.sessionStorage.getItem("SLACK_URL") ?? "#")}>
                <ToolTip tooltip="Slack">
                  <SlackLogo />
                </ToolTip>
              </UnorderedListItem>

              <UnorderedListItem onClick={() => open(window.sessionStorage.getItem("GITHUB_REPOSITORY_URL") ?? "#")}>
                <ToolTip tooltip="Github">
                  <GitHubLogo />
                </ToolTip>
              </UnorderedListItem>
            </section>
          </section>

          <section>
            <img onClick={() => open("https://conduction.nl")} src={logoUrl} />
          </section>
        </UnorderedList>
      </Container>
    </footer>
  );
};
