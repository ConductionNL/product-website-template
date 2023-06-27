import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { Container, PrimaryTopNav } from "@conduction/components";
import { navigate } from "gatsby";
import { useGitHub } from "../../../hooks/gitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const HeaderTemplate: React.FC = () => {
  const [navItems, setNavItems] = React.useState<any[]>([]);
  const getDirectoryItems = useGitHub().getDirectoryItems("/docs/features");

  React.useEffect(() => {
    if (!getDirectoryItems.data) return;

    console.log(getDirectoryItems.data);

    setNavItems([
      { label: "Home", handleClick: () => navigate("/") },
      {
        label: "Functionaliteiten",
        handleClick: () => navigate("/"),
        subItems: getDirectoryItems.data.map((item, idx) => ({
          label: item.name,
          icon: <FontAwesomeIcon icon={faArrowRight} />,
        })),
      },
      { label: "Documentatie", handleClick: () => navigate("/") },
      { label: "Slack", handleClick: () => navigate("/") },
      { label: "GitHub", handleClick: () => navigate("/") },
    ]);
  }, [getDirectoryItems.data]);

  return (
    <header className={styles.header}>
      <section className={styles.navigation}>
        <Container>
          <PrimaryTopNav items={navItems} />
        </Container>
      </section>
    </header>
  );
};
