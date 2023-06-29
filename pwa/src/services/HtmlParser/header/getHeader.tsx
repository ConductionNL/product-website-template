import { Heading } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";

export const getHeader = (name: string, props: any, children: any, getOptions: any) => {
  switch (name) {
    case "h1":
      return (
        <Heading {...props} level={1}>
          {domToReact(children, getOptions)}
        </Heading>
      );
    case "h2":
      return (
        <Heading {...props} level={2}>
          {domToReact(children, getOptions)}
        </Heading>
      );
    case "h3":
      return (
        <Heading {...props} level={3}>
          {domToReact(children, getOptions)}
        </Heading>
      );
    case "h4":
      return (
        <Heading {...props} level={4}>
          {domToReact(children, getOptions)}
        </Heading>
      );
  }
};
