import { TableHeader } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";

export const getTableHeader = (props: any, children: any, options: any) => {
  return <TableHeader {...props}>{domToReact(children, options)}</TableHeader>;
};
