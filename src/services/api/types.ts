export interface IApi {
  getUsers: () => Promise<TGetUsersResponse>;
}

// 📌 getUsers

export interface IGetUsersItem {
  id: string;
  name: string;
  surname: string;
  email: string;
}
export type TGetUsersResponse = IGetUsersItem[];
