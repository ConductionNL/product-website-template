import * as styles from "./getTable.module.css";
import { Table } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";
import { HorizontalOverflowWrapper } from "@conduction/components";
import { TAriaLabels } from "../useHtmlParser";

export const getTable = (props: any, children: any, options: any, ariaLabels: TAriaLabels) => {
  return (
    <HorizontalOverflowWrapper {...{ ariaLabels }}>
      <Table className={styles.table} {...props}>
        {domToReact(children, options)}
      </Table>
    </HorizontalOverflowWrapper>
  );
};
