import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  root: path.resolve(__dirname, "src"),
  plugins: [react()],
  server: {
    port: 3333,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
  },
});
