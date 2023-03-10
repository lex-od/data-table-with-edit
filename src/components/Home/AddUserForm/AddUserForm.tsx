import { FC, useState } from "react";

import css from "./AddUserForm.module.scss";
import { validateString } from "utils/validations";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";

export interface IAddUserFormValues {
  name: string;
  surname: string;
  email: string;
}
export type TOnAddUserSubmit = (values: IAddUserFormValues) => void;

interface IAddUserForm {
  onSubmit: TOnAddUserSubmit;
  onCancel: () => void;
}

export const AddUserForm: FC<IAddUserForm> = ({ onSubmit, onCancel }) => {
  const [values, setValues] = useState<IAddUserFormValues>({
    name: "",
    surname: "",
    email: "",
  });
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
    <form className={css.addUserForm} onSubmit={handleSubmit}>
      <h2 className={css.title}>Add user</h2>

      <label className={css.label}>
        <span>Name</span>
        <input
          name="name"
          value={values.name}
          onChange={handleChangeValue}
          autoComplete="off"
        />
        <ErrorMessage touched={touched} error={errors.name} />
      </label>

      <label className={css.label}>
        <span>Surname</span>
        <input
          name="surname"
          value={values.surname}
          onChange={handleChangeValue}
          autoComplete="off"
        />
        <ErrorMessage touched={touched} error={errors.surname} />
      </label>

      <label className={css.label}>
        <span>Email</span>
        <input
          name="email"
          value={values.email}
          onChange={handleChangeValue}
          autoComplete="off"
        />
        <ErrorMessage touched={touched} error={errors.email} />
      </label>

      <div className={css.submitGroup}>
        <button type="submit" className={css.submitBtn}>
          Save
        </button>
        <button type="button" onClick={onCancel} className={css.cancelBtn}>
          Cancel
        </button>
      </div>
    </form>
  );
};
