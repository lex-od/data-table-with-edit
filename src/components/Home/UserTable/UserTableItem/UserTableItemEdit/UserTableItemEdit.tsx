import { FC, useState } from "react";

import css from "./UserTableItemEdit.module.scss";
import { IGetUsersItem } from "services/api/types";

export type TOnUserEditSubmit = (newUser: IGetUsersItem) => void;

interface IUserTableItemEdit {
  user: IGetUsersItem;
  onEditSubmit: TOnUserEditSubmit;
  onCancel: () => void;
}

export const UserTableItemEdit: FC<IUserTableItemEdit> = ({
  user,
  onEditSubmit,
  onCancel,
}) => {
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={surname} onChange={(e) => setSurname(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <div>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </div>
    </form>
  );
};
