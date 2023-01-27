import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://johnnydecimal.com",
  // integrations: [mdx(), tailwind()]
  integrations: [mdx(), prefetch()],
});
