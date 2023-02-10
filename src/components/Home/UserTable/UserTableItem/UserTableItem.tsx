import { FC, useState } from "react";
import { IGetUsersItem } from "services/api/types";
import {
  TOnUserEditSubmit,
  UserTableItemEdit,
} from "./UserTableItemEdit/UserTableItemEdit";
import { UserTableItemView } from "./UserTableItemView/UserTableItemView";

interface IUserTableItem {
  user: IGetUsersItem;
  onDelete: () => void;
  onEditSubmit: TOnUserEditSubmit;
}

export const UserTableItem: FC<IUserTableItem> = ({
  user,
  onDelete,
  onEditSubmit,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditSubmit: TOnUserEditSubmit = (newUser) => {
    setIsEdit(false);
    onEditSubmit(newUser);
  };

  const toggleEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit);
  };

  return isEdit ? (
    <UserTableItemEdit
      user={user}
      onSubmit={handleEditSubmit}
      onCancel={toggleEdit}
    />
  ) : (
    <UserTableItemView user={user} onEdit={toggleEdit} onDelete={onDelete} />
  );
};
