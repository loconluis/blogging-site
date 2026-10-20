const title = "Blog by Luis Locon";
const description =
  "Hi I'm Luis Locon and I really like to teach everything I learn so I created this Blog to write about tech, code and other things.";
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
      content: "desarrollo web, programación, React, Next.js, JavaScript",
    },
  ],
};

export default SEO;
