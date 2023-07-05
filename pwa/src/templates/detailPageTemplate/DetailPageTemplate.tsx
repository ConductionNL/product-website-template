import * as React from "react";
import { Container } from "@conduction/components";
import { useGitHub } from "../../hooks/resources/gitHub";
import { ParsedHTML } from "../../components/ParsedHTML/ParsedHTML";

interface DetailPageTemplateProps {
  pageName: string;
  detailPageName: string;
}

export const DetailPageTemplate: React.FC<DetailPageTemplateProps> = ({ pageName, detailPageName }) => {
  const [directoryLocation, setDirectoryLocation] = React.useState<string>("");

  const getContent = useGitHub().getContent(directoryLocation);

  React.useEffect(() => {
    const directoryName = pageName.replace("-", " ");

    const _directoryLocation = JSON.parse(window.sessionStorage.getItem("GITHUB_DOCS_DIRECTORY_PATHS") ?? "").find(
      (directory: any) => directory.name === directoryName,
    ).location;

    setDirectoryLocation(`${_directoryLocation}/${detailPageName}.md`);
  }, [pageName, detailPageName]);

  return (
    <Container>
      <ParsedHTML contentQuery={getContent} />
    </Container>
  );
};
