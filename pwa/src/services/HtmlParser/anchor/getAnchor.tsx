import { Link } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";

export const getAnchor = (props: any, children: any, getOptions: any) => {
  const _id = props.id?.replace("user-content-", "");

  const attributes = {
    ...props,
    id: _id,
  };

  return <Link {...attributes}>{domToReact(children, getOptions)}</Link>;
};
