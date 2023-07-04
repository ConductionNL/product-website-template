import { Link } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";

export const getAnchor = (props: any, children: any, getOptions: any) => {
  const _id = props.id?.replace("user-content-", "");

  const handleClick = (e: any) => {
    e.preventDefault();

    if (props.className === "anchor") {
      handleAnchorClick(); // handles on-page scroll anchors

      return;
    }
  };

  const handleAnchorClick = () => {
    const target = document.getElementById(_id);
    const headerHeight = document.getElementById("header")?.clientHeight ?? 100;

    if (target) {
      window.scrollTo({ top: target.offsetTop - (headerHeight + 24), behavior: "smooth" }); // +24 simply adds some padding
    }
  };

  const attributes = {
    ...props,
    id: _id,
    onClick: handleClick,
  };
  return <Link {...attributes}>{domToReact(children, getOptions)}</Link>;
};
