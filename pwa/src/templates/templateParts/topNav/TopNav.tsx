import * as React from "react";
import * as styles from "./TopNav.module.css";
import { UnorderedList, UnorderedListItem } from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "gatsby";
import { useGitHub } from "../../../hooks/resources/gitHub";
import { GitHubLogo } from "../../../assets/svgs/Github";
import { SlackLogo } from "../../../assets/svgs/Slack";
import { TGitHubDirectory, useGitHubDirectories } from "../../../hooks/useGitHubDirectories";

export const TopNav: React.FC = () => {
  const { directories, getSlugFromName } = useGitHubDirectories();

  return (
    <div className={styles.container}>
      <UnorderedList className={styles.list}>
        <section>
          <UnorderedListItem>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                onClick={() => navigate("/")}
                src={process.env.GATSBY_NAVBAR_LOGO_URL}
                alt={"Navbar-logo"}
              />
            </div>
          </UnorderedListItem>

          <UnorderedListItem onClick={() => navigate("/")}>Home</UnorderedListItem>

          {directories?.map((directory, idx) => (
            <UnorderedListItem key={idx} onClick={() => navigate(`/pages/${getSlugFromName(directory.name)}`)}>
              {directory.name}

              <DetailPagesDropDown {...{ directory }} />
            </UnorderedListItem>
          ))}
        </section>

        <section>
          {process.env.GATSBY_READ_THE_DOCS_URL !== "false" && (
            <UnorderedListItem onClick={() => open(process.env.GATSBY_READ_THE_DOCS_URL)}>
              <FontAwesomeIcon icon={faExternalLinkSquare} /> Documentation
            </UnorderedListItem>
          )}

          {process.env.GATSBY_SLACK_URL !== "false" && (
            <UnorderedListItem onClick={() => open(process.env.GATSBY_SLACK_URL)}>
              <SlackLogo /> Slack
            </UnorderedListItem>
          )}

          <UnorderedListItem onClick={() => open(process.env.GATSBY_GITHUB_REPOSITORY_URL)}>
            <GitHubLogo /> GitHub
          </UnorderedListItem>
        </section>
      </UnorderedList>
    </div>
  );
};

interface DetailPagesDropDownProps {
  directory: TGitHubDirectory;
}

const DetailPagesDropDown: React.FC<DetailPagesDropDownProps> = ({ directory }) => {
  const { getSlugFromName } = useGitHubDirectories();
  const [detailPages, setDetailPages] = React.useState<any[]>([]);
  const getDetailPages = useGitHub().getDirectoryItems(directory.location);

  React.useEffect(() => {
    if (!getDetailPages.data) return;

    setDetailPages(getDetailPages.data.filter((detailPage) => detailPage.name !== "README"));
  }, [getDetailPages.data]);

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, target: string) => {
    e.stopPropagation();

    navigate(`/pages/${getSlugFromName(directory.name)}/${target}`);
  };

  if (!detailPages.length) return <></>;

  return (
    <UnorderedList className={styles.dropDownList}>
      {detailPages.map((detailPage, idx) => (
        <UnorderedListItem key={idx} onClick={(e) => handleClick(e, detailPage.href)}>
          {detailPage.name}
        </UnorderedListItem>
      ))}
    </UnorderedList>
  );
};
