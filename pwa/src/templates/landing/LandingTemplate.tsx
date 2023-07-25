import * as React from "react";
import { useGitHub } from "../../hooks/resources/gitHub";
import { ParsedHTML } from "../../components/ParsedHTML/ParsedHTML";
import { JumbotronTemplate } from "../jumbotronTemplate/JumbotronTemplate";
import { Page, PageContent } from "@utrecht/component-library-react/dist/css-module";

export const LandingTemplate: React.FC = () => {
  const location = "/";
  const getContent = useGitHub().getContent(`${location}README.md`);

  return (
    <div>
      <JumbotronTemplate />

      <Page>
        <PageContent>
          <ParsedHTML contentQuery={getContent} {...{ location }} />
        </PageContent>
      </Page>
    </div>
  );
};
