import { ipcRenderer } from "electron";
import { IpcChannel } from "../../../types/Ipc.js";

/**
 * Wrapper function for Electron.IpcRenderer.invoke to add types to its return type
 * @param channel Channel name for ipc
 * @param payload Payload to send to main process
 */
export function ipcInvoke<TPayload, TResult>(
  channel: IpcChannel,
  payload?: TPayload
): Promise<TResult> {
  return ipcRenderer.invoke(channel, payload) as Promise<TResult>;
}
