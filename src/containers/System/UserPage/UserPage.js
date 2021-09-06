import React, { useEffect, useState } from "react";
import {
  createNewUserService,
  editUserService,
  getAllUsers,
} from "../../../service/userService";
import ModalUser from "./ModalUser";
import "./UserPage.scss";
import { emitter } from "../../../utils/emitter";
import ModalEditUser from "./ModalEditUser";

function UserPage() {
  const [arrUsers, setArrUsers] = useState([]);
  const [isOpenModalUser, setIsOpenModalUser] = useState(false);
  const [userEdit, setUserEdit] = useState({});
  const [isOpenModalEditUser, setIsOpenModalEditUser] = useState(false);

  useEffect(() => {
    (async () => {
      await getAllUsersFromReact();
    })();
  }, []);

  const getAllUsersFromReact = async () => {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      setArrUsers(response.users);
    }
  };

  const createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if (response && response.errCode !== 0) {
        alert(response.errMessage);
      } else {
        await getAllUsersFromReact();
        setIsOpenModalUser(false);
        emitter.emit("EVENT_CLEAR_MODAL_DATA");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditUser = (user) => {
    console.log(user);
    setIsOpenModalEditUser(true);
    setUserEdit(user);
  };

  const doEditUser = async (user) => {
    console.log("truyền đến doedituser: ",user)
    try {
      let res = await editUserService(user);
      if (res && res.errCode === 0) {
        setIsOpenModalEditUser(false);
        await getAllUsersFromReact();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="user-page">
      <ModalUser
        isOpen={isOpenModalUser}
        toggleFromParent={() => setIsOpenModalUser(!isOpenModalUser)}
        createNewUser={(data) => createNewUser(data)}
      />
      {isOpenModalEditUser && (
        <ModalEditUser
          isOpen={isOpenModalEditUser}
          toggleFromParent={() => setIsOpenModalEditUser(!isOpenModalEditUser)}
          currentUser={userEdit}
          editUser={(user) => doEditUser(user)}
        />
      )}
      <div className="page-title">
        <span className="text-title">User Management</span>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsOpenModalUser(true)}
        >
          <i className="fas fa-plus iconAdd"></i>Add New User
        </button>
        <form className="form-search">
          <input
            className="form-control me-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-light btnSearch" type="submit">
            <i className="fas fa-search iconSearch"></i>
          </button>
        </form>
      </div>
      <div className="tableUser table">
        <table id="customers">
          <tbody>
            <tr>
              <th>DisplayName</th>
              <th>UserName</th>
              <th>Role</th>
              <th>Quantity Camera</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
            {arrUsers &&
              arrUsers.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.email}</td>
                    <td>{item.roleId}</td>
                    <td>{item.roleId}</td>
                    <td>{item.roleId}</td>
                    <td>
                      <button
                        className="btn-edit-user"
                        onClick={() => handleEditUser(item)}
                      >
                        <i className="far fa-edit"></i>
                      </button>
                      <button className="btn-delete-user">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserPage;
