import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { Container } from "@conduction/components";
import { TopNav } from "../topNav/TopNav";
import clsx from "clsx";
import { PageHeader } from "@utrecht/component-library-react/dist/css-module";

interface HeaderTemplateProps {
  layoutClassName?: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  return (
    <PageHeader id="header" className={clsx(styles.container, [layoutClassName && layoutClassName])}>
      <Container>
        <TopNav />
      </Container>
    </PageHeader>
  );
};
