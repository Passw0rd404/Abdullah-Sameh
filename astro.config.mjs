// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://abdullahsameh.qzz.io',
  base: "/Abdullah-Sameh",
  vite: {
    plugins: [tailwindcss()],
  },
});
