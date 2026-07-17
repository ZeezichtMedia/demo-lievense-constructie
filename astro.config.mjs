import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build
export default defineConfig({
  site: "https://demo-lievense-constructie.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
