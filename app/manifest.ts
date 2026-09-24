import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TARGAR",
    short_name: "TARGAR",
    description: "Payment infrastructure for Nigeria's markets.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#e91859",
    icons: [
      { src: "/logo/icon-pink.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
