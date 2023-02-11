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
    <div className={css.tr}>
      <div className={css.td}>
        <p>{user.name}</p>
      </div>

      <div className={css.td}>
        <p>{user.surname}</p>
      </div>

      <div className={css.td}>
        <p>{user.email}</p>
      </div>

      <div className={css.tdRight}>
        <button onClick={onEdit} className={css.submitBtn}>
          Edit
        </button>
        <button onClick={onDelete} className={css.cancelBtn}>
          Delete
        </button>
      </div>
    </div>
  );
};
