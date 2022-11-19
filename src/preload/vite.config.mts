import path from "path";
import { defineConfig } from "vite";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const rootDir = path.resolve(path.dirname(path.dirname(__dirname)));

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    outDir: path.resolve(rootDir, "dist", "preload"),
    lib: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      formats: ["cjs"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "[name].cjs",
      },
    },
  },
});
