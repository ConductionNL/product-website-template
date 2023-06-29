import { domToReact } from "html-react-parser";

export const getBlockquote = (children: any, getOptions: any) => {
  return (
    <blockquote className="utrecht-blockquote">
      <div className="utrecht-blockquote__content">{domToReact(children, getOptions)}</div>
    </blockquote>
  );
};
