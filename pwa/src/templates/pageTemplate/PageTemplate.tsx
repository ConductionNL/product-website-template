import * as React from "react";
import { useGitHub } from "../../hooks/resources/gitHub";
import { ParsedHTML } from "../../components/ParsedHTML/ParsedHTML";
import { useGitHubDirectories } from "../../hooks/useGitHubDirectories";
import { Page, PageContent } from "@utrecht/component-library-react/dist/css-module";

interface PageTemplateProps {
  pageSlug: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ pageSlug }) => {
  const { getDirectoryReadMeLocation } = useGitHubDirectories();

  const location = getDirectoryReadMeLocation(pageSlug);

  const getContent = useGitHub().getContent(location);

  return (
    <Page>
      <PageContent>
        <ParsedHTML contentQuery={getContent} {...{ location }} />
      </PageContent>
    </Page>
  );
};
