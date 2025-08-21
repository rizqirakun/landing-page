import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      Icons({
        jsx: "react",
        compiler: "jsx",
      }),
      Icons({
        compiler: 'astro',
      }),
    ],
  },
  server: { port: 4321 },
  experimental: { contentLayer: false },
});
