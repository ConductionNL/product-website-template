import { Link } from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby";
import { domToReact } from "html-react-parser";

export const getAnchor = (props: any, children: any, getOptions: any) => {
  const currentPath = window.location.pathname;
  const _id = props.id?.replace("user-content-", "");

  console.log({ props });

  const handleClick = (e: any) => {
    e.preventDefault();

    if (!props.href) {
      navigate("#");

      return;
    }

    if (props.className === "anchor" || Array.from(props.href)[0] === "#") {
      handleAnchorClick(); // handles on-page scroll anchors

      return;
    }

    if (props.href.includes("https" || "http")) {
      open(props.href); // external link

      return;
    }

    if (!props.href.includes("https" || "http")) {
      handleRelativeLink();

      return;
    }
  };

  const handleAnchorClick = () => {
    const target = document.getElementById(_id ?? props.href.replace("#", ""));
    const headerHeight = document.getElementById("header")?.clientHeight ?? 100;

    if (target) {
      window.scrollTo({ top: target.offsetTop - (headerHeight + 24), behavior: "smooth" }); // +24 simply adds some padding
    }
  };

  const handleRelativeLink = () => {
    // linking to a feature, from a feature
    if (!props.href.includes("/") && currentPath.includes("features")) {
      navigate(`/features/${props.href.replace(".md", "")}`);

      return;
    }

    open(`${window.sessionStorage.getItem("GITHUB_REPOSITORY_URL")}/tree/master${props.href}`);
  };

  const attributes = {
    ...props,
    id: _id,
    onClick: handleClick,
  };

  return <Link {...attributes}>{domToReact(children, getOptions)}</Link>;
};
