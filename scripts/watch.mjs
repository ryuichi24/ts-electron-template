#!/usr/bin/env node

import { build, createServer } from "vite";

const mode = "development";

/** @type {import('vite').LogLevel} */
const logLevel = "warn";

const rendererWatchServer = await createServer({
  mode,
  logLevel,
  configFile: "vite.config.mts",
}).then((s) => s.listen());

build({
  mode,
  logLevel,
  configFile: "src/preload/vite.config.mts",
  build: {
    watch: {},
  },
  plugins: [electronPreloadHotReload()],
});

function electronPreloadHotReload() {
  return {
    name: "rollup-plugin-electron-preload-reload",
    writeBundle() {
      rendererWatchServer.ws.send({
        type: "full-reload",
      });
    },
  };
}
