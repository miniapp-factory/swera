import type { Metadata } from "next";

export const title = "Animal Quiz - Find Your Inner Animal";
export const description = "Take the quiz to discover which animal you are most similar to. Share your result with friends!";

export const url = "https://your-app-domain.com";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `${url}/logo.png`,
          width: 512,
          height: 512,
          alt: "Animal Quiz Logo",
        },
      ],
    },
  };
}
