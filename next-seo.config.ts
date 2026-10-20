const title = "Luis Locon — software engineer in Guatemala";
const description =
  "Luis Locon is a software engineer in Guatemala City. Notes on building for the web, and on building with AI, written since 2018.";
const URI = "https://luislocon.dev";

const SEO = {
  title,
  description,
  canonical: URI,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: URI,
    title,
    description,
    images: [
      {
        url: `${URI}/images/og.png`,
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: "@loconluis",
    site: "@loconluis",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "web development, React, Next.js, TypeScript, JavaScript",
    },
  ],
};

export default SEO;
