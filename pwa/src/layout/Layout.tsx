import * as React from "react";
import * as styles from "./Layout.module.css";
import "../translations/i18n";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import { defaultGlobalContext, GlobalProvider, IGlobalContext } from "../context/global";
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
  const [API, setAPI] = React.useState<APIService>(React.useContext(APIContext));
  const [globalContext, setGlobalContext] = React.useState<IGlobalContext>(defaultGlobalContext);

  React.useEffect(() => {
    if (!window.sessionStorage.getItem("GITHUB_API_BASE_URL")) return;

    setAPI(new APIService());
  }, [pageContext]);

  React.useEffect(() => {
    setGlobalContext((context) => ({
      ...context,
      gatsby: {
        ...{ pageContext, location, previousPath: location.pathname },
      },
    }));
  }, [pageContext, location]);

  return (
    <>
      <Head crumbs={pageContext.breadcrumb?.crumbs} />

      <GlobalProvider value={[globalContext, setGlobalContext]}>
        <APIProvider value={API}>
          <Document className="utrecht-theme">
            <Toaster position="bottom-right" />

            <div className={styles.container}>
              <Content {...{ children }} />
            </div>
          </Document>
        </APIProvider>
      </GlobalProvider>
    </>
  );
};

export default Layout;
