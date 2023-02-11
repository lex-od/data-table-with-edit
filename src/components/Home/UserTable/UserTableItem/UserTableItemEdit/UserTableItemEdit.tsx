import { FC, useState } from "react";

import css from "./UserTableItemEdit.module.scss";
import { IGetUsersItem } from "services/api/types";
import { validateString } from "utils/validations";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";

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
  const [touched, setTouched] = useState(false);

  const errors = {
    name: validateString(values.name),
    surname: validateString(values.surname),
    email: validateString(values.email),
  };
  const isFormValid = Object.values(errors).every((value) => !value);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(true);

    if (isFormValid) {
      onSubmit(values);
    }
  };

  return (
    // Таблицу сделана несемантично (без <table>, <tr>, <td>), т. к.
    // эту форму (тег <form>) нельзя вкладывать в <tr>
    <form className={css.userTableItemEdit} onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          value={values.name}
          onChange={handleChangeValue}
          autoComplete="off"
        />
        <ErrorMessage touched={touched} error={errors.name} />
      </div>

      <div>
        <input
          name="surname"
          value={values.surname}
          onChange={handleChangeValue}
          autoComplete="off"
        />
        <ErrorMessage touched={touched} error={errors.surname} />
      </div>

      <div>
        <input
          name="email"
          value={values.email}
          onChange={handleChangeValue}
          autoComplete="off"
        />
        <ErrorMessage touched={touched} error={errors.email} />
      </div>

      <div className={css.tdRight}>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
