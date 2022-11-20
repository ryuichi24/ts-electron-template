import { ipcMain, IpcMainInvokeEvent } from "electron";
import { IpcChannel } from "../../../types/Ipc.js";
/**
 * Wrapper function for Electron.IpcMain.handle to add types to listener's payload and its return type
 * @param channel Channel name for ipc
 * @param listener Callback function to be executed when the channel gets triggered
 */
export function ipcHandle<TPayload, TResult>(
  channel: IpcChannel,
  listener: (
    event: IpcMainInvokeEvent,
    payload: TPayload
  ) => TResult | Promise<TResult> | undefined
) {
  ipcMain.handle(channel, listener);
}
