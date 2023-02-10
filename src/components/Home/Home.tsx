import { useEffect, useState } from "react";

import css from "./Home.module.scss";
import { api } from "services";
import { TGetUsersResponse } from "services/api/types";
import { UserTable } from "./UserTable/UserTable";

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

  return (
    <div className={css.home}>
      <UserTable users={users} loading={loading} />
    </div>
  );
};
