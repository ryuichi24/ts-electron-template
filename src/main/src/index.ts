import path from "path";
import { BrowserWindow, app } from "electron";

if (require("electron-squirrel-startup")) {
  app.quit();
}

const isDev = !app.isPackaged;
const isMac = process.platform === "darwin";
const rendererDevServerURL =
  process.env.VITE_DEV_SERVER_URL || "http://localhost:7777";
const rootDir = path.resolve(path.dirname(path.dirname(__dirname)));
const preloadScriptPath = path.resolve(rootDir, "dist", "preload", "index.cjs");
const rendererFilePath = path.resolve(
  rootDir,
  "dist",
  "renderer",
  "index.html"
);

let mainWindow: BrowserWindow | null;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: isDev ? 1000 : 500,
    height: 600,
    //   icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    resizable: isDev,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: preloadScriptPath,
    },
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(rendererDevServerURL);
  } else {
    mainWindow.loadFile(rendererFilePath);
  }
}

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });

  app.on("window-all-closed", () => {
    if (!isMac) {
      app.quit();
    }
  });

  mainWindow?.on("closed", () => (mainWindow = null));
});
