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

  const lastSlash = location.pathname.lastIndexOf("/");
  const locationTitle = location.pathname.substring(lastSlash + 1);
  const headTitle = locationTitle.replace("_", " ");

  const [API, setAPI] = React.useState<APIService>(React.useContext(APIContext));
  const [gatsbyContext, setGatsbyContext] = React.useState<IGatsbyContext>({ ...{ pageContext, location } });

  React.useEffect(() => {
    if (!window.sessionStorage.getItem("GITHUB_API_BASE_URL")) return;

    setAPI(new APIService());
  }, [pageContext]);

  React.useEffect(() => {
    setGatsbyContext({ ...{ pageContext, location } });
  }, [pageContext, location]);

  return (
    <>
      <Head crumbs={pageContext.breadcrumb?.crumbs} headTitle={headTitle} />

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
