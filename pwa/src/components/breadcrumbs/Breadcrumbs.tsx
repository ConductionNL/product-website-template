import * as React from "react";
import * as styles from "./Breadcrumbs.module.css";
import _ from "lodash";
import { Container } from "@conduction/components";
import { BreadcrumbNav, BreadcrumbNavLink, BreadcrumbNavSeparator, Icon } from "@utrecht/component-library-react";
import { useGatsbyContext } from "../../context/gatsby";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { isHomepage } from "../../services/isHomepage";

export const Breadcrumbs: React.FC = () => {
  const { t } = useTranslation();

  const { gatsbyContext } = useGatsbyContext();

  const pageSlugLabel = () => {
    const splitNumber = process.env.GATSBY_USE_GITHUB_REPOSITORY_NAME_AS_PATH_PREFIX === "true" ? 3 : 2;

    const stringLabel = location.pathname.split("/")[splitNumber];
    return stringLabel?.replaceAll("_", " ");
  };

  const detailPageSlugLabel = () => {
    const splitNumber = process.env.GATSBY_USE_GITHUB_REPOSITORY_NAME_AS_PATH_PREFIX === "true" ? 4 : 3;

    const stringLabel = location.pathname.split("/")[splitNumber];
    return stringLabel?.replaceAll("_", " ");
  };

  const translatedCrumbs = gatsbyContext.pageContext.breadcrumb.crumbs.map((crumb: any) => {
    if (crumb.pathname === "/pages/[pageSlug]") {
      return { ...crumb, crumbLabel: t(pageSlugLabel()), pathname: `/pages/${t(pageSlugLabel())}` };
    }
    if (crumb.pathname === "/pages/[pageSlug]/[detailPageSlug]") {
      return {
        ...crumb,
        crumbLabel: t(detailPageSlugLabel()),
        pathname: `/pages/${t(pageSlugLabel())}/${t(detailPageSlugLabel())}`,
      };
    } else return { ...crumb, crumbLabel: t(_.upperFirst(crumb.crumbLabel)) };
  });

  const handleBreadcrumbClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, pathname: string) => {
    e.preventDefault();

    navigate(pathname);
  };

  if (!isHomepage(gatsbyContext.location.pathname))
    return (
      <Container layoutClassName={styles.breadcrumbsContainer}>
        <BreadcrumbNav className={styles.breadcrumbs} label={t("Breadcrumbs")}>
          {translatedCrumbs.map((crumb: any, idx: number) => {
            if (gatsbyContext.pageContext.breadcrumb.crumbs.length !== idx + 1) {
              return (
                <React.Fragment key={idx}>
                  <BreadcrumbNavLink
                    className={styles.breadcrumbNavLink}
                    onClick={(e: any) => handleBreadcrumbClick(e, crumb.pathname)}
                    href=""
                  >
                    {crumb.crumbLabel}
                  </BreadcrumbNavLink>

                  <BreadcrumbNavSeparator>
                    <Icon>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </Icon>
                  </BreadcrumbNavSeparator>
                </React.Fragment>
              );
            }
            return (
              <BreadcrumbNavLink key={idx} className={styles.breadcrumbDisabled} current disabled href="">
                {crumb.crumbLabel}
              </BreadcrumbNavLink>
            );
          })}
        </BreadcrumbNav>
      </Container>
    );

  return <></>;
};
