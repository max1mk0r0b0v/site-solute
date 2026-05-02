import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
}: MetadataOptions): Metadata {
  const url = new URL(path, siteConfig.url);

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url.pathname,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "he_IL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
