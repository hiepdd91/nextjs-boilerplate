import { atom } from "recoil";

const ROOT_STATE = "rootState";

export const rootState = atom({
  key: ROOT_STATE,
  default: {
    titlePage: "Recoil",
  },
});
