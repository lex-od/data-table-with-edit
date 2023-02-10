import { FC } from "react";

import css from "./UserTable.module.scss";
import { UserTableHeader } from "./UserTableHeader/UserTableHeader";
import { IGetUsersItem } from "services/api/types";
import { UserTableItem } from "./UserTableItem/UserTableItem";

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
            <UserTableItem key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
};
