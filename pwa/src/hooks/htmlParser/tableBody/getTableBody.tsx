import { TableBody } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";

export const getTableBody = (props: any, children: any, options: any) => {
  return <TableBody {...props}>{domToReact(children, options)}</TableBody>;
};
