import axios, { AxiosInstance, AxiosResponse } from "axios";
import { DEFAULT_FOOTER_CONTENT_URL } from "../templates/templateParts/footer/FooterTemplate";
import { removeFileNameFromUrl } from "../services/FileNameFromUrl";
import { DEFAULT_HEADER_CONTENT_URL } from "../templates/templateParts/header/HeaderTemplate";
import toast from "react-hot-toast";

// Resources
import GitHub from "./resources/gitHub";
import FooterContent from "./resources/footerContent";
import HeaderContent from "./resources/headerContent";

interface PromiseMessage {
  loading?: string;
  success?: string;
}

export type TSendFunction = (
  instance: AxiosInstance,
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  payload?: JSON,
  promiseMessage?: PromiseMessage,
) => Promise<AxiosResponse>;

export default class APIService {
  public get gitHubClient(): AxiosInstance {
    return axios.create({
      baseURL: process.env.GATSBY_GITHUB_API_BASE_URL,
      headers: {
        Accept: "application/vnd.github.html",
      },
    });
  }

  public get FooterContentClient(): AxiosInstance {
    return axios.create({
      baseURL: removeFileNameFromUrl(process.env.GATSBY_FOOTER_CONTENT ?? DEFAULT_FOOTER_CONTENT_URL),
    });
  }

  public get HeaderContentClient(): AxiosInstance {
    return axios.create({
      baseURL: removeFileNameFromUrl(process.env.GATSBY_HEADER_CONTENT ?? DEFAULT_HEADER_CONTENT_URL),
    });
  }

  public get GitHub(): GitHub {
    return new GitHub(this.gitHubClient, this.Send);
  }

  public get FooterContent(): FooterContent {
    return new FooterContent(this.FooterContentClient, this.Send);
  }

  public get HeaderContent(): HeaderContent {
    return new HeaderContent(this.HeaderContentClient, this.Send);
  }

  // Send method
  public Send: TSendFunction = (instance, method, endpoint, payload, promiseMessage) => {
    const _payload = JSON.stringify(payload);

    switch (method) {
      case "GET":
        const response = instance.get(endpoint);

        response.catch((err) => toast.error(err.message));

        return response;

      case "POST":
        return toast.promise(instance.post(endpoint, _payload), {
          loading: promiseMessage?.loading ?? "Creating item...",
          success: promiseMessage?.success ?? "Succesfully created item",
          error: (err: Error) => err.message,
        });

      case "PUT":
        return toast.promise(instance.put(endpoint, _payload), {
          loading: promiseMessage?.loading ?? "Updating item...",
          success: promiseMessage?.success ?? "Succesfully updated item",
          error: (err: Error) => err.message,
        });

      case "DELETE":
        return toast.promise(instance.delete(endpoint), {
          loading: promiseMessage?.loading ?? "Deleting item...",
          success: promiseMessage?.success ?? "Succesfully deleted item",
          error: (err: Error) => err.message,
        });
    }
  };
}
