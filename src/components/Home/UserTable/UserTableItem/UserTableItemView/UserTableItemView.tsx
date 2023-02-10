import { FC } from "react";

import css from "./UserTableItemView.module.scss";
import { IGetUsersItem } from "services/api/types";

interface IUserTableItemView {
  user: IGetUsersItem;
}

export const UserTableItemView: FC<IUserTableItemView> = ({ user }) => {
  return (
    <div className={css.userTableItemView}>
      <p>{user.name}</p>
      <p>{user.surname}</p>
      <p>{user.email}</p>

      <div className={css.tdRight}>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
