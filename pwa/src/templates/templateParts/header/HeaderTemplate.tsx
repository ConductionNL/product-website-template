import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Container, Logo, PrimaryTopNav } from "@conduction/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useGatsbyContext } from "../../../context/gatsby";
import { PageHeader } from "@utrecht/component-library-react";
import { ITopNavItem } from "@conduction/components/lib/components/topNav/primaryTopNav/PrimaryTopNav";
import { useHeaderContent } from "../../../hooks/headerContent";
import { THeaderTopNavItem, useHeaderTopNavItems } from "../../../hooks/useHeaderTopNavItems";
import { faGithub, faSlack } from "@fortawesome/free-brands-svg-icons";
import { faReadTheDocs } from "../../../assets/customIcons";
import { TOOLTIP_ID } from "../../../layout/Layout";

export const DEFAULT_HEADER_CONTENT_URL =
  "https://raw.githubusercontent.com/ConductionNL/product-website-template/f62359452725aa45c94a348b13d041af63646503/pwa/src/templates/templateParts/header/HeaderContent.json";

interface HeaderTemplateProps {
  layoutClassName?: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  const { t } = useTranslation();
  const [topNavItems, setTopNavItems] = React.useState<ITopNavItem[]>([]);
  const { gatsbyContext } = useGatsbyContext();

  const _useHeaderContent = useHeaderContent();
  const getHeaderContent = _useHeaderContent.getContent();

  const optionalNavItems: THeaderTopNavItem[] = [];

  process.env.GATSBY_READ_THE_DOCS_URL !== "false" &&
    optionalNavItems.push({
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
    optionalNavItems.push({
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

  process.env.GATSBY_GITHUB_REPOSITORY_URL &&
    optionalNavItems.push({
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

  const { headerTopNavItems } = useHeaderTopNavItems(
    getHeaderContent.isSuccess && getHeaderContent.data.concat(optionalNavItems),
  );

  React.useEffect(() => {
    setTopNavItems(headerTopNavItems);
  }, [gatsbyContext.location.pathname, gatsbyContext.pageContext?.breadcrumb.crumbs]);

  return (
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
            tooltipId={TOOLTIP_ID}
            layoutClassName={styles.test}
            items={topNavItems}
          />
        </Container>
      </div>
    </PageHeader>
  );
};
