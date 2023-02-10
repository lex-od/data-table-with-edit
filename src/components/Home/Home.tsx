import { useEffect, useState } from "react";

import css from "./Home.module.scss";
import { api } from "services";
import { TGetUsersResponse } from "services/api/types";
import { TOnUserDelete, UserTable } from "./UserTable/UserTable";
import { TOnUserEditSubmit } from "./UserTable/UserTableItem/UserTableItemEdit/UserTableItemEdit";

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

  const handleUserDelete: TOnUserDelete = (delId) => {
    setUsers((prevUsers) => {
      if (!prevUsers) {
        return null;
      }
      return prevUsers.filter(({ id }) => id !== delId);
    });
  };

  const handleUserEditSubmit: TOnUserEditSubmit = (newUser) => {
    setUsers((prevUsers) => {
      if (!prevUsers) {
        return null;
      }
      return prevUsers.map((user) => {
        return user.id === newUser.id ? newUser : user;
      });
    });
  };

  return (
    <div className={css.home}>
      <UserTable
        users={users}
        loading={loading}
        onUserDelete={handleUserDelete}
        onUserEditSubmit={handleUserEditSubmit}
      />
    </div>
  );
};
