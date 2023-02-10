import { FC, useState } from "react";
import { IGetUsersItem } from "services/api/types";
import { UserTableItemView } from "./UserTableItemView/UserTableItemView";

interface IUserTableItem {
  user: IGetUsersItem;
  onDelete: () => void;
}

export const UserTableItem: FC<IUserTableItem> = ({ user, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit);
  };

  return isEdit ? (
    <div>UserTableItemEdit</div>
  ) : (
    <UserTableItemView user={user} onEdit={toggleEdit} onDelete={onDelete} />
  );
};
