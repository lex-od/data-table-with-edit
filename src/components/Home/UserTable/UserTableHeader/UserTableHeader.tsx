import css from "./UserTableHeader.module.scss";

export const UserTableHeader = () => {
  return (
    <div className={css.userTableHeader}>
      <p>Name</p>
      <p>Surname</p>
      <p>Email</p>
      <p className={css.thRight}>Actions</p>
    </div>
  );
};
