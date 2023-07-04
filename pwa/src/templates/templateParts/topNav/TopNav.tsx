import * as React from "react";
import * as styles from "./TopNav.module.css";
import { UnorderedList, UnorderedListItem } from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "gatsby";
import { useGitHub } from "../../../hooks/gitHub";
import Skeleton from "react-loading-skeleton";
import { GitHubLogo } from "../../../assets/svgs/Github";
import { SlackLogo } from "../../../assets/svgs/Slack";
import { ToolTip } from "@conduction/components";
import clsx from "clsx";

interface TopNavProps {
  layoutClassName?: string;
}

export const TopNav: React.FC<TopNavProps> = ({ layoutClassName }) => {
  return (
    <nav className={clsx(styles.container, layoutClassName && layoutClassName)}>
      <UnorderedList className={styles.list}>
        <section>
          <UnorderedListItem onClick={() => navigate("/")}>Home</UnorderedListItem>

          <UnorderedListItem onClick={() => navigate("/features")}>
            Features
            <FeaturesDropDown />
          </UnorderedListItem>
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

const FeaturesDropDown: React.FC = () => {
  const getFeatures = useGitHub().getDirectoryItems("/docs/features");

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, target: string) => {
    e.stopPropagation();

    navigate(`/features/${target}`);
  };

  return (
    <UnorderedList className={styles.dropDownList}>
      {getFeatures.isLoading && [1, 2, 3].map((item) => <Skeleton key={item} />)}

      {getFeatures.data &&
        getFeatures.data.map((feature, idx) => (
          <UnorderedListItem key={idx} onClick={(e) => handleClick(e, feature.href)}>
            {feature.name}
          </UnorderedListItem>
        ))}

      {/* This code is for dev purposes only, it ensures that the develop does not go above the Github api limit */}
      {/* {features.map((feature, idx) => (
        <UnorderedListItem key={idx} onClick={(e) => handleClick(e, feature.href)}>
          {feature.name}
        </UnorderedListItem>
      ))} */}
    </UnorderedList>
  );
};
