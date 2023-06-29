import { Code } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";

export const getCode = (props: any, children: any, getOptions: any) => {
  return <Code>{domToReact(children, getOptions)}</Code>;
};
