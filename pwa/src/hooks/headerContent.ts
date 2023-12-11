import * as React from "react";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";
import headerDefaults from "../templates/templateParts/header/Defaults.json";
import { useQuery } from "react-query";
import { getFileNameFromUrl } from "../services/FileNameFromUrl";

export const useHeaderContent = () => {
  const API: APIService | null = React.useContext(APIContext);

  const fileName = getFileNameFromUrl(
    process.env.GATSBY_HEADER_CONTENT !== undefined && process.env.GATSBY_HEADER_CONTENT.length !== 0
      ? process.env.GATSBY_HEADER_CONTENT
      : headerDefaults.HEADER_CONTENT_URL,
  );

  const getContent = () =>
    useQuery<any, Error>(["contents", fileName], () => API?.HeaderContent.getContent(fileName), {
      onError: (error) => {
        console.warn(error.message);
      },
    });

  return { getContent };
};
