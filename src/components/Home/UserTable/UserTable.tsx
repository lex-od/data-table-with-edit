import { FC } from "react";

import css from "./UserTable.module.scss";
import { UserTableHeader } from "./UserTableHeader/UserTableHeader";
import { IGetUsersItem } from "services/api/types";
import { UserTableItem } from "./UserTableItem/UserTableItem";
import { TOnUserEditSubmit } from "./UserTableItem/UserTableItemEdit/UserTableItemEdit";

export type TOnUserDelete = (delId: number) => void;

interface IUserTable {
  users: IGetUsersItem[] | null;
  loading: boolean;
  onUserDelete: TOnUserDelete;
  onUserEditSubmit: TOnUserEditSubmit;
}

export const UserTable: FC<IUserTable> = ({
  users,
  loading,
  onUserDelete,
  onUserEditSubmit,
}) => {
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
              onDelete={() => onUserDelete(user.id)}
              onEditSubmit={onUserEditSubmit}
            />
          ))}
        </>
      )}
    </div>
  );
};
