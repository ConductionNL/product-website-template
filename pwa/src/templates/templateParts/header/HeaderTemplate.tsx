import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { Container } from "@conduction/components";
import { TopNav } from "../topNav/TopNav";

export const HeaderTemplate: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <TopNav layoutClassName={styles.topNav} />
        </Container>
      </div>
    </>
  );
};
