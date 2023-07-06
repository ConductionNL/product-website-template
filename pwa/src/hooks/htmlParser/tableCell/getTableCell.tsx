import { TableCell } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";

export const getTableCell = (props: any, children: any, options: any) => {
  return <TableCell {...props}>{domToReact(children, options)}</TableCell>;
};
