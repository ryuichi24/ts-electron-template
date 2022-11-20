import { BrowserWindow, dialog } from "electron";
import {
  SayGoodByePayload,
  SayGoodByeResult,
  SayHelloPayload,
  SayHelloResult,
} from "../../../types/Ipc.js";
import { ipcHandle } from "../utils/ipcHandle.js";

export const initGreetingEventListener = (_window: BrowserWindow) => {
  ipcHandle<SayHelloPayload, SayHelloResult>(
    "SAY_HELLO",
    async (event, payload) => {
      const greet = `Hello, ${payload.name}`;
      await dialog.showMessageBox(_window, { message: greet });
      return {};
    }
  );

  ipcHandle<SayGoodByePayload, SayGoodByeResult>(
    "SAY_GOOD_BYE",
    async (event, payload) => {
      const greet = `Good Bye, ${payload.name}`;
      await dialog.showMessageBox(_window, { message: greet });
      return {};
    }
  );
};
