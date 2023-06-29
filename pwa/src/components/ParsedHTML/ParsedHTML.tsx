import * as React from "react";
import Parser from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import { Alert } from "@utrecht/component-library-react/dist/css-module";
import { UseQueryResult } from "react-query";
import { getOptions } from "../../services/HtmlParser/getOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

interface ParsedHTMLProps {
  contentQuery: UseQueryResult<any, Error>;
}

export const ParsedHTML: React.FC<ParsedHTMLProps> = ({ contentQuery }) => {
  if (contentQuery.isLoading) return <Skeleton height="200px" />;

  if (contentQuery.isError)
    return (
      <Alert icon={<FontAwesomeIcon icon={faWarning} />} type="error">
        Oops, something went wrong retrieving the .md file from GitHub.
      </Alert>
    );

  return <div>{Parser(contentQuery.data, getOptions)}</div>;
};
