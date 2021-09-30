import React, { useEffect, useState } from "react";
import {
  createNewUserService,
  deleteUserService,
  editUserService,
  getAllUsers,
} from "../../../service/userService";
import { emitter } from "../../../utils/emitter";
import ModalEditUser from "./ModalEditUser";
import ModalUser from "./ModalUser";
import "./UserPage.scss";

function UserPage() {
  const [arrUsers, setArrUsers] = useState([]);
  const [isOpenModalUser, setIsOpenModalUser] = useState(false);
  const [userEdit, setUserEdit] = useState({});
  const [isOpenModalEditUser, setIsOpenModalEditUser] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [originalArrUser, setOriginalArrUser] = useState([]);

  useEffect(() => {
    getAllUsersFromReact();
    // (async () => {
    //   await getAllUsersFromReact();
    //   console.log(arrUsers);
    // })();
  }, []);

  const getAllUsersFromReact = async () => {
    let response = await getAllUsers("ALL");
    console.log(response);
    if (response && response.errCode === 0) {
      setArrUsers(response.users);
      setOriginalArrUser(JSON.parse(JSON.stringify(response.users)));
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

  const handleDeleteUser = async (user) => {
    try {
      let res = await deleteUserService(user.id);
      if (res && res.errCode === 0) {
        await getAllUsersFromReact();
      } else {
        alert(res.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = (e) => {
    let key = keyword;
    if (e.type !== "click") {
      // search change
      key = e.target.value;
      setKeyword(key);
    }

    const arrSearch = JSON.parse(JSON.stringify(originalArrUser));

    if (key) {
      const newArrUsers = arrSearch.filter((user) => {
        return Object.values(user)
          .join("")
          .toLowerCase()
          .includes(key.toLowerCase());
      });
      setArrUsers(newArrUsers);
    } else {
      setArrUsers(originalArrUser);
    }

    // if (key) {
    //   arrSearch.filter((user) => {
    //     return Object.values(user)
    //       .join("")
    //       .toLowerCase()
    //       .includes(key.toLowerCase());
    //   });
    // }
    // setArrUsers(arrSearch);
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
            onChange={handleSearch}
            value={keyword}
          />
          <button
            className="btn btn-light btnSearch"
            type="button"
            onClick={handleSearch}
          >
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
                      <button
                        className="btn-delete-user"
                        onClick={() => handleDeleteUser(item)}
                      >
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
