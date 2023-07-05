import * as React from "react";
import { Container } from "@conduction/components";
import { useGitHub } from "../../hooks/resources/gitHub";
import { ParsedHTML } from "../../components/ParsedHTML/ParsedHTML";
import { useGitHubDirectories } from "../../hooks/useGitHubDirectories";

interface DetailPageTemplateProps {
  pageSlug: string;
  detailPageSlug: string;
}

export const DetailPageTemplate: React.FC<DetailPageTemplateProps> = ({ pageSlug, detailPageSlug }) => {
  const { getDetailMdLocation } = useGitHubDirectories();

  const getContent = useGitHub().getContent(getDetailMdLocation(pageSlug, detailPageSlug));

  return (
    <Container>
      <ParsedHTML contentQuery={getContent} />
    </Container>
  );
};
