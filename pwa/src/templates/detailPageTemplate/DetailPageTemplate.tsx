import * as React from "react";
import { useGitHub } from "../../hooks/resources/gitHub";
import { ParsedHTML } from "../../components/ParsedHTML/ParsedHTML";
import { useGitHubDirectories } from "../../hooks/useGitHubDirectories";
import { Page, PageContent } from "@utrecht/component-library-react/dist/css-module";

interface DetailPageTemplateProps {
  pageSlug: string;
  detailPageSlug: string;
}

export const DetailPageTemplate: React.FC<DetailPageTemplateProps> = ({ pageSlug, detailPageSlug }) => {
  const { getDetailMdLocation } = useGitHubDirectories();

  const location = getDetailMdLocation(pageSlug, detailPageSlug);

  const getContent = useGitHub().getContent(location);

  return (
    <Page>
      <PageContent>
        <ParsedHTML contentQuery={getContent} {...{ location }} />
      </PageContent>
    </Page>
  );
};
