import * as React from "react";
import * as styles from "./Layout.module.css";
import "../translations/i18n";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import { GatsbyProvider, IGatsbyContext } from "../context/gatsby";
import { Head } from "./Head";
import { Content } from "../Content";
import { Document } from "@utrecht/component-library-react/dist/css-module";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const [API, setAPI] = React.useState<APIService | null>(React.useContext(APIContext));
  const [gatsbyContext, setGatsbyContext] = React.useState<IGatsbyContext>({ ...{ pageContext, location } });

  React.useEffect(() => {
    setAPI(new APIService());
  }, []);

  React.useEffect(() => {
    setGatsbyContext({ ...{ pageContext, location } });
  }, [pageContext, location]);

  if (!API) return <></>; // env.js variables have not yet been initiated

  return (
    <>
      <Head crumbs={pageContext.breadcrumb?.crumbs} />

      <GatsbyProvider value={gatsbyContext}>
        <APIProvider value={API}>
          <Document className="utrecht-theme">
            <Toaster position="bottom-right" />

            <div className={styles.container}>
              <Content {...{ children }} />
            </div>
          </Document>
        </APIProvider>
      </GatsbyProvider>
    </>
  );
};

export default Layout;
