import { Heading } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";

export const getHeader = (name: string, props: any, children: any, options: any) => {
  switch (name) {
    case "h1":
      return (
        <Heading {...props} level={1}>
          {domToReact(children, options)}
        </Heading>
      );
    case "h2":
      return (
        <Heading {...props} level={2}>
          {domToReact(children, options)}
        </Heading>
      );
    case "h3":
      return (
        <Heading {...props} level={3}>
          {domToReact(children, options)}
        </Heading>
      );
    case "h4":
      return (
        <Heading {...props} level={4}>
          {domToReact(children, options)}
        </Heading>
      );
  }
};
