import css from "./UserTableHeader.module.scss";

export const UserTableHeader = () => {
  return (
    <div className={css.userTableHeader}>
      <div>Name</div>
      <div>Surname</div>
      <div>Email</div>
      <div className={css.thRight}>Actions</div>
    </div>
  );
};
