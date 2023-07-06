import { TableRow } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";

export const getTableRow = (props: any, children: any, options: any) => {
  return <TableRow {...props}>{domToReact(children, options)}</TableRow>;
};
