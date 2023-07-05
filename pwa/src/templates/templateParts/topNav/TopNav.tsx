import * as React from "react";
import * as styles from "./TopNav.module.css";
import { UnorderedList, UnorderedListItem } from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "gatsby";
import { useGitHub } from "../../../hooks/resources/gitHub";
import { GitHubLogo } from "../../../assets/svgs/Github";
import { SlackLogo } from "../../../assets/svgs/Slack";
import { ToolTip } from "@conduction/components";
import clsx from "clsx";

interface TopNavProps {
  layoutClassName?: string;
}

export const TopNav: React.FC<TopNavProps> = ({ layoutClassName }) => {
  const [dynamicTopNavItems, setDynamicTopNavItems] = React.useState<{ name: string; location: string }[] | null>(null);

  React.useEffect(() => {
    const GITHUB_DOCS_DIRECTORY_PATHS = window.sessionStorage.getItem("GITHUB_DOCS_DIRECTORY_PATHS") ?? "";

    setDynamicTopNavItems(JSON.parse(GITHUB_DOCS_DIRECTORY_PATHS));
  }, []);

  return (
    <nav className={clsx(styles.container, layoutClassName && layoutClassName)}>
      <UnorderedList className={styles.list}>
        <section>
          <UnorderedListItem onClick={() => navigate("/")}>Home</UnorderedListItem>

          {dynamicTopNavItems?.map((directory, idx) => (
            <UnorderedListItem key={idx} onClick={() => navigate(`/pages/${directory.name.replace(" ", "-")}`)}>
              {directory.name}

              <FeaturesDropDown {...{ directory }} />
            </UnorderedListItem>
          ))}
        </section>

        <section>
          <UnorderedListItem onClick={() => open(window.sessionStorage.getItem("READ_THE_DOCS_URL") ?? "#")}>
            <FontAwesomeIcon icon={faExternalLinkSquare} /> Documentation
          </UnorderedListItem>

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
      </UnorderedList>
    </nav>
  );
};

interface FeaturesDropDownProps {
  directory: {
    name: string;
    location: string;
  };
}

const FeaturesDropDown: React.FC<FeaturesDropDownProps> = ({ directory }) => {
  const getDetailPages = useGitHub().getDirectoryItems(directory.location);

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, target: string) => {
    e.stopPropagation();

    navigate(`/pages/${directory.name.replace(" ", "-")}/${target}`);
  };

  return (
    <UnorderedList className={styles.dropDownList}>
      {getDetailPages.data
        ?.filter((detailPage) => detailPage.name !== "README")
        .map((detailPage, idx) => (
          <UnorderedListItem key={idx} onClick={(e) => handleClick(e, detailPage.href)}>
            {detailPage.name}
          </UnorderedListItem>
        ))}
    </UnorderedList>
  );
};
