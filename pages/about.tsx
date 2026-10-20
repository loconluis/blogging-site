import { NextSeo } from "next-seo";
import AboutPage from "@/components/About";

const title = "About — Luis Locon";
const description =
  "Luis Locon builds interfaces, mostly for the web, from Guatemala City — TypeScript and React since 2018, and AI in the loop now. Work history and what he reads.";

export default function about() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <AboutPage />
    </>
  );
}
