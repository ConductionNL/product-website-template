import * as React from "react";
import * as styles from "./ParsedHTML.module.css";
import Parser from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import { Alert } from "@utrecht/component-library-react/dist/css-module";
import { UseQueryResult } from "react-query";
import { getOptions } from "../../services/HtmlParser/getOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

interface ParsedHTMLProps {
  contentQuery: UseQueryResult<any, Error>;
  layoutClassName?: string;
}

export const ParsedHTML: React.FC<ParsedHTMLProps> = ({ contentQuery, layoutClassName }) => {
  if (contentQuery.isLoading)
    return (
      <div className={styles.container}>
        <Skeleton height="200px" />
      </div>
    );

  if (contentQuery.isError)
    return (
      <div className={styles.container}>
        <Alert icon={<FontAwesomeIcon icon={faWarning} />} type="error">
          Oops, something went wrong retrieving the .md file from GitHub.
        </Alert>
      </div>
    );

  return (
    <div className={clsx(styles.container, layoutClassName && layoutClassName)}>
      {Parser(contentQuery.data, getOptions)}
    </div>
  );
};
