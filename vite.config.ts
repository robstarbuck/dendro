import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";

export default defineConfig({
  plugins: [deno()],
  // Optional: Set the base path if your GitHub Pages URL will be username.github.io/repo-name/
  base: '/dendro/',
  build: {},
});
