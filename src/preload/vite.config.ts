import path from "path";
import { defineConfig } from "vite";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
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
