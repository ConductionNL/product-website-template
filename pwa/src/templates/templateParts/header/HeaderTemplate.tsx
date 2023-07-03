import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { Container } from "@conduction/components";
import { TopNav } from "../topNav/TopNav";
import { JumbotronTemplate } from "../../jumbotronTemplate/JumbotronTemplate";
import { useGatsbyContext } from "../../../context/gatsby";

export const HeaderTemplate: React.FC = () => {
  const { gatsbyContext } = useGatsbyContext();
  const [pathname, setPathname] = React.useState<string>("");
  const [windowExist, setWindowExist] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (!gatsbyContext) return;

    setPathname(gatsbyContext.location?.pathname);
  }, [gatsbyContext]);

  React.useEffect(() => {
    // setWindowExist(false);
    if (!window) return;

    setWindowExist(true);
  }, [windowExist]);

  return (
    <>
      <div className={styles.container}>
        <Container>
          <TopNav layoutClassName={styles.topNav} />
        </Container>
      </div>
      {windowExist && pathname === "/" && (
        <div className={styles.jumbotronContainer}>
          <Container>
            <JumbotronTemplate />
          </Container>
        </div>
      )}
    </>
  );
};
