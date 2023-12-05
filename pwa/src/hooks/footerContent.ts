import * as React from "react";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";
import footerDefaults from "../templates/templateParts/footer/Defaults.json";
import { useQuery } from "react-query";
import { getFileNameFromUrl } from "../services/FileNameFromUrl";

export const useFooterContent = () => {
  const API: APIService | null = React.useContext(APIContext);

  const fileName = getFileNameFromUrl(process.env.GATSBY_FOOTER_CONTENT ?? footerDefaults.FOOTER_CONTENT_URL);

  const getContent = () =>
    useQuery<any, Error>(["footer-content", fileName], () => API?.FooterContent.getContent(fileName), {
      onError: (error) => {
        console.warn(error.message);
      },
    });

  return { getContent };
};
