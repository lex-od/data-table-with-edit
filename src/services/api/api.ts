import mockUsers from "json/mockUsers.json";
import { IApi } from "./types";

export const api: IApi = {
  getUsers: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUsers);
      }, 2000);
    });
  },
};
