import * as React from "react";
import * as styles from "./FooterTemplate.module.css";
import { Container, ToolTip } from "@conduction/components";
import { UnorderedList, UnorderedListItem } from "@utrecht/component-library-react/dist/css-module";
import { UtrechtPageFooter } from "@utrecht/web-component-library-react";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import { SlackLogo } from "../../../assets/svgs/Slack";
import { GitHubLogo } from "../../../assets/svgs/Github";
import { useGitHubDirectories } from "../../../hooks/useGitHubDirectories";

export const FooterTemplate: React.FC = () => {
  const [logoUrl, setLogoUrl] = React.useState<string>("");
  const [logoHref, setLogoHref] = React.useState<string>("");

  const { directories, getSlugFromName } = useGitHubDirectories();

  React.useEffect(() => {
    setLogoUrl(window.sessionStorage.getItem("FOOTER_LOGO_URL") ?? "");
    setLogoHref(window.sessionStorage.getItem("FOOTER_LOGO_HREF") ?? "");
  });

  return (
    <UtrechtPageFooter className={styles.footer}>
      <Container>
        <UnorderedList className={styles.list}>
          <section className={styles.linksContainer}>
            <UnorderedListItem onClick={() => navigate("/")}>Home</UnorderedListItem>

            {directories?.map((directory, idx) => (
              <UnorderedListItem key={idx} onClick={() => navigate(`/pages/${getSlugFromName(directory.name)}`)}>
                {directory.name}
              </UnorderedListItem>
            ))}

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
            <img onClick={() => open(logoHref)} src={logoUrl} alt={"Footer-logo"} />
          </section>
        </UnorderedList>
      </Container>
    </UtrechtPageFooter>
  );
};
