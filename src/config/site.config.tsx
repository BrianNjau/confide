import { Metadata } from "next";
import { LAYOUT_OPTIONS } from "@/config/enums";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import logoImg from "/public/confidelogo.jpeg";
enum MODE {
  DARK = "dark",
  LIGHT = "light",
}

export const siteConfig = {
  title: "Confide - Whistleblowing Application",
  description: `Confide is a robust whistleblowing management system to fortify compliance.
  .`,
  logo: logoImg,
  icon: logoImg,
  mode: MODE.LIGHT,
  layout: LAYOUT_OPTIONS.HYDROGEN,
  // TODO: favicon
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - Speakouthotline` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Speakouthotline` : title,
      description,
      url: "https://isomorphic-furyroad.vercel.app",
      siteName: "Speakouthotline", // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: "https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/itemdep/isobanner.png",
        width: 1200,
        height: 630,
      },
      locale: "en_US",
      type: "website",
    },
  };
};
