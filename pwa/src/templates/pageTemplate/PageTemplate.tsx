import * as React from "react";
import { Container } from "@conduction/components";

interface PageTemplateProps {
  pageName: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ pageName }) => {
  return (
    <Container>
      <h1>Page: {pageName}</h1>
    </Container>
  );
};
