import { FC } from "react";

import css from "./ErrorMessage.module.scss";

interface IErrorMessage {
  touched: boolean;
  error: string | null;
}

export const ErrorMessage: FC<IErrorMessage> = ({ touched, error }) => {
  return touched && error ? <p className={css.errorMessage}>{error}</p> : null;
};
