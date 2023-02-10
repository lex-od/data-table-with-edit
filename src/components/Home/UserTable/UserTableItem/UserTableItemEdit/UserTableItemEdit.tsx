import { FC, useState } from "react";

import css from "./UserTableItemEdit.module.scss";
import { IGetUsersItem } from "services/api/types";
import { validateString } from "utils/validations";

export type TOnUserEditSubmit = (newUser: IGetUsersItem) => void;

interface IUserTableItemEdit {
  user: IGetUsersItem;
  onSubmit: TOnUserEditSubmit;
  onCancel: () => void;
}

export const UserTableItemEdit: FC<IUserTableItemEdit> = ({
  user,
  onSubmit,
  onCancel,
}) => {
  const [values, setValues] = useState(user);
  const [submitTouched, setSubmitTouched] = useState(false);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form className={css.userTableItemEdit} onSubmit={handleSubmit}>
      <input name="name" value={values.name} onChange={handleChangeValue} />
      <input
        name="surname"
        value={values.surname}
        onChange={handleChangeValue}
      />
      <input name="email" value={values.email} onChange={handleChangeValue} />

      <div className={css.tdRight}>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
