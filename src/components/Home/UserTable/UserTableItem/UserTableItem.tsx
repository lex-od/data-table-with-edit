import { FC, useState } from "react";
import { IGetUsersItem } from "services/api/types";
import { UserTableItemView } from "./UserTableItemView/UserTableItemView";

interface IUserTableItem {
  user: IGetUsersItem;
}

export const UserTableItem: FC<IUserTableItem> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);

  return isEdit ? (
    <div>UserTableItemEdit</div>
  ) : (
    <UserTableItemView user={user} />
  );
};
