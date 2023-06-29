import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { Container, PrimaryTopNav, SecondaryTopNav } from "@conduction/components";
import { navigate } from "gatsby";
import { Heading1 } from "@utrecht/component-library-react/dist/css-module";

export const HeaderTemplate: React.FC = () => {
  const primaryTopNavItems = [{ label: "Home", handleClick: () => navigate("/") }];
  const secondaryTopNavItems = [{ label: "Common ground", handleClick: () => window.open("https://commonground.nl/") }];

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Container layoutClassName={styles.secondaryNavContainer}>
          <SecondaryTopNav items={secondaryTopNavItems} />
        </Container>
      </div>

      <Container layoutClassName={styles.headingContainer}>
        <Heading1>Title +1</Heading1>
        <span className={styles.subTitle}>Sub title</span>
      </Container>

      <Container>
        <PrimaryTopNav items={primaryTopNavItems} />
      </Container>
    </header>
  );
};
