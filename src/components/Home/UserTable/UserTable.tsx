import { FC } from "react";

import css from "./UserTable.module.scss";
import { UserTableHeader } from "./UserTableHeader/UserTableHeader";
import { IGetUsersItem } from "services/api/types";
import { UserTableItem } from "./UserTableItem/UserTableItem";

export type TOnDeleteItem = (delId: number) => void;

interface IUserTable {
  users: IGetUsersItem[] | null;
  loading: boolean;
  onDeleteItem: TOnDeleteItem;
}

export const UserTable: FC<IUserTable> = ({ users, loading, onDeleteItem }) => {
  return (
    <div>
      <UserTableHeader />

      {loading && <p className={css.loader}>Loading...</p>}

      {!loading && (
        <>
          {!users?.length && <p className={css.noItems}>No users found</p>}

          {users?.map((user) => (
            <UserTableItem
              key={user.id}
              user={user}
              onDelete={() => onDeleteItem(user.id)}
            />
          ))}
        </>
      )}
    </div>
  );
};
