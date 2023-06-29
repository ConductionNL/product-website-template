import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { Container } from "@conduction/components";
import { TopNav } from "../topNav/TopNav";

export const HeaderTemplate: React.FC = () => {
  return (
    <header className={styles.container}>
      <Container>
        <TopNav />
      </Container>
    </header>
  );
};
