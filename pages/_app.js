import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="holi">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
