import * as React from "react";
import { Container } from "@conduction/components";

interface DetailPageTemplateProps {
  pageName: string;
}

export const DetailPageTemplate: React.FC<DetailPageTemplateProps> = ({ pageName }) => {
  return (
    <Container>
      <h1>Detail page: {pageName}</h1>
    </Container>
  );
};
