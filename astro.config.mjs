// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://Passw0rd404.github.io",
  base: "/Abdullah-Sameh",
  vite: {
    plugins: [tailwindcss()],
  },
});
