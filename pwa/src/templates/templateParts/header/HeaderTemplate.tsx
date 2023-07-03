import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { Container } from "@conduction/components";
import { TopNav } from "../topNav/TopNav";
import clsx from "clsx";

interface HeaderTemplateProps {
  layoutClassName?: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  return (
    <header className={clsx(styles.container, [layoutClassName && layoutClassName])}>
      <Container>
        <TopNav />
      </Container>
    </header>
  );
};
