import { attributesToProps } from "html-react-parser";
import { getHeader } from "./header/getHeader";
import { getAnchor } from "./anchor/getAnchor";
import { getListItem } from "./listItem/getListItem";
import { getImage } from "./image/getImage";
import { getList } from "./list/getList";
import { getParagraph } from "./paragraph/getParagraph";
import { getBlockquote } from "./getBlockquote/getBlockquote";
import { getTable } from "./table/getTable";
import { getTableRow } from "./tableRow/getTableRow";
import { getTableHeader } from "./tableHeader/getTableHeader";
import { getTableHeaderCell } from "./tableHeaderCell/getTableHeaderCell";
import { getTableBody } from "./tableBody/getTableBody";
import { getTableCell } from "./tableCell/getTableCell";
import { getCode } from "./code/getCode";

export const getOptions = {
  replace: ({ attribs, parent, children, name }: any) => {
    if (!attribs) {
      return;
    }

    const props = attributesToProps(attribs);

    if (attribs && (name === "h1" || name === "h2" || name === "h3" || name === "h4")) {
      return getHeader(name, props, children, getOptions);
    }

    if (attribs && name === "p") {
      return getParagraph(props, children, getOptions);
    }

    if (attribs && name === "a") {
      return getAnchor(props, children, getOptions);
    }

    if (attribs && (name === "ol" || name === "ul")) {
      return getList(name, props, children, getOptions);
    }

    if (attribs && name === "li") {
      return getListItem(props, parent, children, getOptions);
    }

    if (attribs && name === "img") {
      return getImage(props);
    }

    if (attribs && name === "blockquote") {
      return getBlockquote(children, getOptions);
    }

    if (attribs && name === "table") {
      return getTable(props, children, getOptions);
    }

    if (attribs && name === "tr") {
      return getTableRow(props, children, getOptions);
    }

    if (attribs && name === "thead") {
      return getTableHeader(props, children, getOptions);
    }

    if (attribs && name === "th") {
      return getTableHeaderCell(props, children, getOptions);
    }

    if (attribs && name === "tbody") {
      return getTableBody(props, children, getOptions);
    }

    if (attribs && name === "td") {
      return getTableCell(props, children, getOptions);
    }

    if (attribs && name === "code") {
      return getCode(props, children, getOptions);
    }
  },
};
