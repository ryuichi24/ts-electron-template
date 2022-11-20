import { contextBridge } from "electron";
import {
  SayGoodByePayload,
  SayGoodByeResult,
  SayHelloPayload,
  SayHelloResult,
} from "../../types/Ipc.js";
import { ipcInvoke } from "./utils/ipcInvoke.js";

export const API = {
  sayHello: (payload: SayHelloPayload) =>
    ipcInvoke<SayHelloPayload, SayHelloResult>("SAY_HELLO", payload),
  sayGoodBye: (payload: SayGoodByePayload) =>
    ipcInvoke<SayGoodByePayload, SayGoodByeResult>("SAY_GOOD_BYE", payload),
};

contextBridge.exposeInMainWorld("API", API);
