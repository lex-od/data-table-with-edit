import css from "./UserTableHeader.module.scss";

export const UserTableHeader = () => {
  return (
    <div className={css.tr}>
      <div className={css.th}>
        <p>Name</p>
      </div>

      <div className={css.th}>
        <p>Surname</p>
      </div>

      <div className={css.th}>
        <p>Email</p>
      </div>

      <div className={css.thRight}>
        <p>Actions</p>
      </div>
    </div>
  );
};
