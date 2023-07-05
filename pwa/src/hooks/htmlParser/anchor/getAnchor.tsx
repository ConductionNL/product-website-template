import _ from "lodash";
import { Link } from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby";
import { domToReact } from "html-react-parser";
import { TGitHubDirectory } from "../../useGitHubDirectories";

export const getAnchor = (
  props: any,
  children: any,
  options: any,
  directories: TGitHubDirectory[],
  location: string,
) => {
  const handleClick = (e: any) => {
    e.preventDefault();

    const targetFile = _.upperFirst(props.href.substring(props.href.lastIndexOf("/") + 1).replace(".md", ""));
    /**
     * Internal links
     */
    if (!props.href.includes("://")) {
      /**
       * Internal Links: same directory
       */
      if (!props.href.includes("/")) {
        const targetDirectory = _.upperFirst(location.split("/").reverse()[1]);
        navigate(`/pages/${targetDirectory}/${targetFile}`);

        return; // ensure no other flow is triggered
      }

      /**
       * Internal Links: homepage
       */
      if (props.href.includes("/") && location === "/") {
        const directoryFound = directories.some((directory) => directory.location === props.href);

        if (directoryFound) navigate(`/pages/${targetFile}`);

        return;
      }

      /**
       * Internal Links: different directory
       */
      if (props.href.includes("/")) {
        const targetDirectory = props.href.split("/").reverse()[1];
        const directoryFound = directories.some(
          (directory) => directory.location.substring(directory.location.lastIndexOf("/") + 1) === targetDirectory,
        );

        // Internal Link exists: redirect to page
        if (directoryFound) {
          navigate(`/pages/${targetDirectory}/${targetFile}`);
        }

        // Internal Link does not exist: redirect to online GitHub environment (TODO)
        if (!directoryFound) {
          open("https://github.com");
        }

        return; // ensure no other flow is triggered
      }
    }
  };

  const attributes = {
    ...props,
    onClick: handleClick,
  };

  return <Link {...attributes}>{domToReact(children, options)}</Link>;
};
