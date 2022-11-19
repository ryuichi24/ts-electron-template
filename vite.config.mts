import path from "path";
import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import react from "@vitejs/plugin-react";

const electronEntryPath = path.resolve(
  __dirname,
  "src",
  "main",
  "src",
  "index.ts"
);
const rendererPath = path.resolve(__dirname, "src", "renderer");

export default defineConfig({
  root: rendererPath,
  build: {
    outDir: path.resolve(__dirname, "dist", "renderer"),
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(rendererPath, "src") }],
  },
  server: {
    port: 3333,
  },
  plugins: [
    react({}),
    electron({
      entry: electronEntryPath,
      vite: {
        build: {
          outDir: path.resolve(__dirname, "dist", "main"),
        },
      },
      onstart(this, { startup }) {
        startup(["dist/main/index.js", "--no-sandbox"]);
        return;
      },
    }),
  ],
});
