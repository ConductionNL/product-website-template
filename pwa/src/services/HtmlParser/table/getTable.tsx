import { Table } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";

export const getTable = (props: any, children: any, getOptions: any) => {
  return <Table {...props}>{domToReact(children, getOptions)}</Table>;
};
