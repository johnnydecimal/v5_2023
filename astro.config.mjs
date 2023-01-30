import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
// import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// comment

// https://astro.build/config
export default defineConfig({
  site: "https://johnnydecimal.com",
  // integrations: [mdx(), tailwind()]
  integrations: [
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
