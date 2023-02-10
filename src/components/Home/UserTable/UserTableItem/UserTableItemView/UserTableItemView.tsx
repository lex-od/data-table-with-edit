import { FC } from "react";

import css from "./UserTableItemView.module.scss";
import { IGetUsersItem } from "services/api/types";

interface IUserTableItemView {
  user: IGetUsersItem;
  onEdit: () => void;
  onDelete: () => void;
}

export const UserTableItemView: FC<IUserTableItemView> = ({
  user,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={css.userTableItemView}>
      <p>{user.name}</p>
      <p>{user.surname}</p>
      <p>{user.email}</p>

      <div className={css.tdRight}>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};
