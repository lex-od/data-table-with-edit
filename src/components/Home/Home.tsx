import { useEffect, useState } from "react";

import css from "./Home.module.scss";
import { api } from "services";
import { TGetUsersResponse } from "services/api/types";
import { TOnDeleteItem, UserTable } from "./UserTable/UserTable";

export const Home = () => {
  const [users, setUsers] = useState<TGetUsersResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getUsers()
      .then((data) => {
        setUsers(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDeleteItem: TOnDeleteItem = (delId) => {
    setUsers((prevUsers) => {
      if (!prevUsers) {
        return null;
      }
      return prevUsers.filter(({ id }) => id !== delId);
    });
  };

  return (
    <div className={css.home}>
      <UserTable
        users={users}
        loading={loading}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
};
