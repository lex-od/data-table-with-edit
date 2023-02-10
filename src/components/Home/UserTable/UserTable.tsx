import { FC } from "react";

import css from "./UserTable.module.scss";
import { UserTableHeader } from "./UserTableHeader/UserTableHeader";
import { IGetUsersItem } from "services/api/types";

export interface IUserTable {
  users: IGetUsersItem[] | null;
  loading: boolean;
}

export const UserTable: FC<IUserTable> = ({ users, loading }) => {
  return (
    <div>
      <UserTableHeader />

      {loading && <div className={css.loader}>Loading...</div>}

      {!loading && (
        <>
          {!users?.length && <div className={css.noItems}>No users found</div>}

          {users?.map((user) => (
            <div key={user.id}>user</div>
          ))}
        </>
      )}
    </div>
  );
};
