export type IpcChannel = "SAY_HELLO" | "SAY_GOOD_BYE";

export type SayHelloPayload = {
  name: string;
};

export type SayHelloResult = {};

export type SayGoodByePayload = {
  name: string;
};

export type SayGoodByeResult = {};
