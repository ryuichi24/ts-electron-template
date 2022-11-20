import path from "path";
import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

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
    // https://github.com/electron-vite/vite-plugin-electron/issues/97
    electron([
      {
        entry: electronEntryPath,
        vite: {
          build: {
            outDir: path.resolve(__dirname, "dist", "main"),
          },
        },
        onstart(this, { startup }) {
          startup(["dist/main/index.js"]);
          return;
        },
      },
      {
        entry: path.join(__dirname, "src/preload/src/index.ts"),
        vite: {
          build: {
            sourcemap: "inline",
            outDir: path.resolve(__dirname, "dist", "preload")
          },
        },
      },
    ]),
  ],
});
