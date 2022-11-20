import { BrowserWindow } from "electron";
import {
  SayGoodByePayload,
  SayGoodByeResult,
  SayHelloPayload,
  SayHelloResult,
} from "../../../types/Ipc.js";
import { ipcHandle } from "../utils/ipcHandle.js";

export const initGreetingEventListener = (_window: BrowserWindow) => {
  ipcHandle<SayHelloPayload, SayHelloResult>("SAY_HELLO", (event, payload) => {
    console.log(payload);
    return {};
  });

  ipcHandle<SayGoodByePayload, SayGoodByeResult>(
    "SAY_GOOD_BYE",
    (event, payload) => {
      console.log(payload);
      return {};
    }
  );
};
