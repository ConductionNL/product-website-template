import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import clsx from "clsx";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import { Container, Logo, PrimaryTopNav } from "@conduction/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { PageHeader } from "@utrecht/component-library-react";
import { THeaderTopNavItem, useHeaderTopNavItems } from "../../../hooks/useHeaderTopNavItems";
import { faGithub, faSlack } from "@fortawesome/free-brands-svg-icons";
import { faReadTheDocs } from "../../../assets/customIcons";
import { Breadcrumbs } from "../../../components/breadcrumbs/Breadcrumbs";

interface HeaderTemplateProps {
  layoutClassName?: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  const { t } = useTranslation();

  const [optionalNavItems, setOptionalNavItems] = React.useState<THeaderTopNavItem[]>([]);

  React.useEffect(() => {
    let optionalNavItemsArray: THeaderTopNavItem[] = [];

    process.env.GATSBY_READ_THE_DOCS_URL !== "false" &&
      optionalNavItemsArray.push({
        label: t("Documentation"),
        type: "external",
        current: {
          pathname: "/documentation",
        },
        handleClick: {
          link: process.env.GATSBY_READ_THE_DOCS_URL ?? "",
        },
        icon: <FontAwesomeIcon icon={faReadTheDocs as IconDefinition} />,
      });

    process.env.GATSBY_SLACK_URL !== "false" &&
      optionalNavItemsArray.push({
        label: t("Slack"),
        type: "external",
        current: {
          pathname: "/slack",
        },
        handleClick: {
          link: process.env.GATSBY_SLACK_URL ?? "",
        },
        icon: <FontAwesomeIcon icon={faSlack} />,
      });

    process.env.GATSBY_GITHUB_REPOSITORY_URL !== "false" &&
      optionalNavItemsArray.push({
        label: t("GitHub"),
        type: "external",
        current: {
          pathname: "/github",
        },
        handleClick: {
          link: process.env.GATSBY_GITHUB_REPOSITORY_URL ?? "",
        },
        icon: <FontAwesomeIcon icon={faGithub} />,
      });

    setOptionalNavItems(optionalNavItemsArray);
  }, []);

  const { topNavItems } = useHeaderTopNavItems(_.uniqBy(optionalNavItems, "label"));

  return (
    <>
      <PageHeader className={clsx(styles.headerContainer, layoutClassName && layoutClassName)}>
        <div className={styles.headerMiddleBar}>
          <Container layoutClassName={styles.primaryNavContainer}>
            <div className={clsx(styles.logoContainer, styles.logoDesktop)}>
              <Logo variant="navbar" />
            </div>
            <PrimaryTopNav
              mobileLogo={
                <div className={clsx(styles.logoContainer, styles.logoMobile)}>
                  <Logo variant="navbar" />
                </div>
              }
              items={topNavItems}
            />
          </Container>
        </div>
      </PageHeader>

      <Breadcrumbs />
    </>
  );
};
