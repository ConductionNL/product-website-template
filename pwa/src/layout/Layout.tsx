import * as React from "react";
import * as styles from "./Layout.module.css";
import "../translations/i18n";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import { defaultGlobalContext, GlobalProvider, IGlobalContext } from "../context/global";
import { Head } from "./Head";
import { Content } from "../Content";
import { Document, Surface } from "@utrecht/component-library-react/dist/css-module";
import { Toaster } from "react-hot-toast";
import { IconDefinition, IconPack, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { TScreenSize } from "../context/gatsby";
import { getScreenSize } from "../services/getScreenSize";
import { faReadTheDocs } from "../assets/customIcons";
import { ToolTip } from "@conduction/components";

export const TOOLTIP_ID = "cb8f47c3-7151-4a46-954d-784a531b01e6";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const [API, setAPI] = React.useState<APIService>(React.useContext(APIContext));
  const [globalContext, setGlobalContext] = React.useState<IGlobalContext>(defaultGlobalContext);
  const [screenSize, setScreenSize] = React.useState<TScreenSize>("mobile");

  library.add(fas, fab as IconPack, far as IconPack, faReadTheDocs as IconDefinition);

  React.useEffect(() => {
    // initiate API Service
    setAPI(new APIService());

    // initiate screen size watcher
    const handleWindowResize = () => {
      setScreenSize(getScreenSize(window.innerWidth));
    };
    window.addEventListener("resize", handleWindowResize);

    () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  React.useEffect(() => {
    setGlobalContext((context) => ({
      ...context,
      initiated: true,
      gatsby: {
        ...{ pageContext, location, previousPath: location.pathname, screenSize: getScreenSize(window.innerWidth) },
      },
    }));
  }, [pageContext, location, screenSize]);

  if (!globalContext.initiated) return <></>;

  return (
    <>
      <GlobalProvider value={[globalContext, setGlobalContext]}>
        <Head />
        <APIProvider value={API}>
          <Surface>
            <Document>
              <ToolTip id={TOOLTIP_ID} />

              <Toaster position="bottom-right" />

              <div className={styles.container}>
                <Content {...{ children }} />
              </div>
            </Document>
          </Surface>
        </APIProvider>
      </GlobalProvider>
    </>
  );
};

export default Layout;
