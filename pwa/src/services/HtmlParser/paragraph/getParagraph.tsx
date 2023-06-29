import { Paragraph } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";

export const getParagraph = (props: any, children: any, getOptions: any) => {
  return <Paragraph {...props}>{domToReact(children, getOptions)}</Paragraph>;
};
