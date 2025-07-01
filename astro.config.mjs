// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      USE_VIEW_TRANSITIONS: envField.boolean({ context: "server", access: "public" }),
    }
  }
});
