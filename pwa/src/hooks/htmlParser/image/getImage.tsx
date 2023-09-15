import { Image } from "@utrecht/component-library-react/dist/css-module";

export const getImage = (props: any) => {
  let src = props.src;

  const gitHubDirectoryPathsString: string | undefined = process.env.GATSBY_GITHUB_DOCS_DIRECTORY_PATHS;
  const directories = gitHubDirectoryPathsString && JSON.parse(gitHubDirectoryPathsString);

  const getPath = () => {
    const pathname = window.location.pathname.replace("/pages/", "").split("/")[0];
    return pathname;
  };

  if (!props.src.includes("https://" || "http://")) {
    const sessionUrl = process.env.GATSBY_GITHUB_REPOSITORY_URL;
    const url = sessionUrl?.replace("https://github.com/", "");
    const directory = directories.find((directory: any) => directory.name === getPath());
    src = `https://raw.githubusercontent.com/${url}/master${directory.imagePath ?? ""}/${props.src}`;
  }

  let alt = props.alt;
  if (!props.alt) {
    alt = props.title;
  }
  if (!props.alt && !props.title) {
    alt = props.src;
  }

  const attributes = {
    ...props,
    src,
    alt,
    href: "",
    onClick: (e: MouseEvent) => {
      e.stopPropagation();
      open(src);
    },
  };
  return <Image {...attributes} />;
};
