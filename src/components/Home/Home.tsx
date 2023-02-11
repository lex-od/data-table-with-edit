import { useEffect, useState, useCallback } from "react";
import { nanoid } from "nanoid";

import css from "./Home.module.scss";
import { api } from "services";
import { IGetUsersItem, TGetUsersResponse } from "services/api/types";
import { Modal } from "components/Modal/Modal";
import { TOnUserDelete, UserTable } from "./UserTable/UserTable";
import { TOnUserEditSubmit } from "./UserTable/UserTableItem/UserTableItemEdit/UserTableItemEdit";
import { AddUserForm, TOnAddUserSubmit } from "./AddUserForm/AddUserForm";

export const Home = () => {
  const [users, setUsers] = useState<TGetUsersResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAddModal, setIsAddModal] = useState(false);

  useEffect(() => {
    api
      .getUsers()
      .then((data) => {
        setUsers(data);
      })
      // В случае рабочего api - здесь будет блок catch()
      // с уведомлением об ошибке и setUsers(null)
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

  const toggleAddModal = useCallback(() => {
    setIsAddModal((prevIsAddModal) => !prevIsAddModal);
  }, []);

  const handleAddUserSubmit: TOnAddUserSubmit = (values) => {
    const newUser: IGetUsersItem = {
      id: nanoid(),
      ...values,
    };
    setUsers((prevUsers) => {
      if (!prevUsers) {
        return null;
      }
      return [newUser, ...prevUsers];
    });
    toggleAddModal();
  };

  return (
    <div className={css.home}>
      <h1 className={css.title}>User management</h1>

      <UserTable
        users={users}
        loading={loading}
        onUserDelete={handleUserDelete}
        onUserEditSubmit={handleUserEditSubmit}
      />

      <div className={css.actionsGroup}>
        <button
          type="button"
          onClick={toggleAddModal}
          disabled={loading || !users}
          className={css.addUserBtn}
        >
          Add new user
        </button>
      </div>

      <Modal isOpen={isAddModal} onClose={toggleAddModal}>
        <AddUserForm onSubmit={handleAddUserSubmit} onCancel={toggleAddModal} />
      </Modal>
    </div>
  );
};
