import * as React from "react";
import * as styles from "./FooterTemplate.module.css";
import parse from "html-react-parser";
import clsx from "clsx";
import {
  PageFooter,
  Link,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Icon,
} from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Logo as LogoComponent } from "@conduction/components";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { useFooterContent } from "../../../hooks/footerContent";

type TDynamicContentItem = {
  title: string;
  items: {
    value: string;
    ariaLabel: string;
    link?: string;
    internalMarkdown?: {
      directoryName: string;
      fileName: string;
    };
    label?: string;
    icon?: {
      icon: IconName;
      prefix: IconPrefix;
      placement: "left" | "right";
    };
    customIcon?: {
      icon: string;
      placement: "left" | "right";
    };
  }[];
};

export const FooterTemplate: React.FC = () => {
  const [footerContent, setFooterContent] = React.useState<TDynamicContentItem[]>([]);

  const _useFooterContent = useFooterContent();
  const getFooterContent = _useFooterContent.getContent();

  // For production
  React.useEffect(() => {
    setFooterContent(getFooterContent.data);
  }, [getFooterContent]);

  // For development
  // React.useEffect(() => {
  //   const data = require("../../../data/DevFooterContent.json");
  //   setFooterContent(data);
  // }, []);

  return (
    <PageFooter className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {footerContent?.map((content, idx) => <DynamicSection key={idx} {...{ content }} />)}
        </div>

        <div className={styles.logoAndConduction}>
          <Logo />
          <WithLoveByConduction />
        </div>
      </div>
    </PageFooter>
  );
};

const DynamicSection: React.FC<{ content: TDynamicContentItem }> = ({ content }) => {
  const { t } = useTranslation();

  return (
    <section>
      <DynamicSectionHeading heading={process.env.GATSBY_FOOTER_CONTENT_HEADER ?? ""} {...{ content }} />

      {content.items.map((item, idx) => (
        <div key={idx} className={styles.dynamicSectionContent}>
          {item.label && <strong>{t(item.label)}</strong>}
          {/* External Link */}
          {item.link && item.link.includes("http") && <ExternalLink {...{ item }} />}

          {/* Internal Link */}
          {item.link && !item.link.includes("http") && <InternalLink {...{ item }} />}

          {/* Internal Link Github/Markdown link */}
          {item.internalMarkdown && <InternalMarkdownLink {...{ item }} />}

          {/* No Link */}
          {!item.link && !item.internalMarkdown && <NoLink {...{ item }} />}
        </div>
      ))}
    </section>
  );
};

const DynamicSectionHeading: React.FC<{ content: TDynamicContentItem; heading?: string }> = ({ content, heading }) => {
  const { t } = useTranslation();

  switch (heading) {
    case "heading-1":
      return <Heading1 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading1>;
    case "heading-2":
      return <Heading2 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading2>;
    case "heading-3":
      return <Heading3 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading3>;
    case "heading-4":
      return <Heading4 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading4>;
    case "heading-5":
      return <Heading5 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading5>;
    default:
      return <Heading3 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading3>;
  }
};

const Logo: React.FC = () => {
  if (process.env.GATSBY_FOOTER_SHOW_LOGO === "false") return <></>;

  const { t } = useTranslation();

  return (
    <div className={styles.imageContainer}>
      <LogoComponent
        onClick={() =>
          process.env.envkey_GATSBY_FOOTER_LOGO_HREF
            ? open(process.env.envkey_GATSBY_FOOTER_LOGO_HREF ?? "/")
            : navigate("/")
        }
        aria-label={`${t("Footer-logo")}, ${t("Can open a new window")}`}
        variant="footer"
      />
    </div>
  );
};

const WithLoveByConduction: React.FC = () => {
  if (process.env.GATSBY_FOOTER_SHOW_CREATOR === "false") return <></>;

  const { t } = useTranslation();

  return (
    <div>
      <Link
        className={styles.withLoveLink}
        href="https://github.com/ConductionNL/woo-website-template"
        target="_blank"
        aria-label={`${t("Link to github repository")}, ${t("Opens a new window")}`}
      >
        <Icon>
          <FontAwesomeIcon icon={faCode} />
        </Icon>
      </Link>{" "}
      with{" "}
      <Link
        className={styles.withLoveLink}
        href="https://github.com/ConductionNL/woo-website-template/graphs/contributors"
        target="_blank"
        aria-label={`${t("Link to github contributors page")}, ${t("Opens a new window")}`}
      >
        <Icon>
          <FontAwesomeIcon icon={faHeart} />
        </Icon>
      </Link>{" "}
      by{" "}
      <Link
        className={styles.withLoveLink}
        href="https://conduction.nl"
        target="_blank"
        aria-label={`${t("Link to conduction website")}, ${t("Opens a new window")}`}
      >
        <span className={styles.withLoveConductionLink}> Conduction.</span>
      </Link>
    </div>
  );
};

interface LinkComponentProps {
  item: any;
}

const ExternalLink: React.FC<LinkComponentProps> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <Link
      className={styles.link}
      href={item.link}
      target="_blank"
      tabIndex={0}
      aria-label={`${t(item.ariaLabel)}, ${t("Opens a new window")}`}
    >
      {item.customIcon && item.customIcon.placement === "left" && (
        <Icon className={clsx(styles.iconLeft, styles.customIcon)}>{parse(item.customIcon.icon)}</Icon>
      )}

      {item.icon && item.icon.placement === "left" && (
        <FontAwesomeIcon className={styles.iconLeft} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {t(item.value)}

      {item.icon && item.icon.placement === "right" && (
        <FontAwesomeIcon className={styles.iconRight} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "right" && (
        <Icon className={styles.iconRight}>{parse(item.customIcon.icon)}</Icon>
      )}
    </Link>
  );
};

const InternalLink: React.FC<LinkComponentProps> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <Link
      className={styles.link}
      onClick={(e: any) => {
        e.preventDefault(), navigate(item.link ?? "");
      }}
      tabIndex={0}
      aria-label={`${t(item.ariaLabel)}, ${t(item.value)}`}
      role="button"
      href={item.link}
    >
      {item.icon && item.icon.placement === "left" && (
        <FontAwesomeIcon className={styles.iconLeft} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "left" && (
        <Icon className={styles.iconLeft}>{parse(item.customIcon.icon)}</Icon>
      )}

      {t(item.value)}

      {item.icon && item.icon.placement === "right" && (
        <FontAwesomeIcon className={styles.iconRight} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "right" && (
        <Icon className={styles.iconRight}>{parse(item.customIcon.icon)}</Icon>
      )}
    </Link>
  );
};

const InternalMarkdownLink: React.FC<LinkComponentProps> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <Link
      className={styles.link}
      onClick={(e: any) => {
        e.preventDefault(), navigate(`/${item.internalMarkdown.directoryName}/${item.internalMarkdown.fileName}`);
      }}
      tabIndex={0}
      aria-label={`${t(item.ariaLabel)}, ${t(item.internalMarkdown)}`}
      role="button"
      href={`/${item.internalMarkdown.directoryName}/${item.internalMarkdown.fileName}`}
    >
      {item.icon && item.icon.placement === "left" && (
        <FontAwesomeIcon className={styles.iconLeft} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "left" && (
        <Icon className={clsx(styles.iconLeft, styles.customIcon)}>{parse(item.customIcon.icon)}</Icon>
      )}

      {t(item.value)}

      {item.icon && item.icon.placement === "right" && (
        <FontAwesomeIcon className={styles.iconRight} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "right" && (
        <Icon className={clsx(styles.iconRight, styles.customIcon)}>{parse(item.customIcon.icon)}</Icon>
      )}
    </Link>
  );
};

const NoLink: React.FC<LinkComponentProps> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <span>
      {item.customIcon && item.customIcon.placement === "left" && (
        <Icon className={styles.iconLeft}>{parse(item.customIcon.icon)}</Icon>
      )}

      {item.icon && item.icon.placement === "left" && (
        <FontAwesomeIcon className={styles.iconLeft} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {t(item.value)}

      {item.icon && item.icon.placement === "right" && (
        <FontAwesomeIcon className={styles.iconRight} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "right" && (
        <Icon className={styles.iconRight}>{parse(item.customIcon.icon)}</Icon>
      )}
    </span>
  );
};
