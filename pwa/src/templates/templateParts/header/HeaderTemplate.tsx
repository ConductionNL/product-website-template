import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { TopNav } from "../topNav/TopNav";
import clsx from "clsx";
import { PageHeader } from "@utrecht/component-library-react/dist/css-module";

interface HeaderTemplateProps {
  layoutClassName?: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  return (
    <PageHeader className={clsx(styles.container, [layoutClassName && layoutClassName])}>
      <TopNav />
    </PageHeader>
  );
};
