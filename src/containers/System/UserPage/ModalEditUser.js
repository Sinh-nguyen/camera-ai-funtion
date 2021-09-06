import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { emitter } from "../../../utils/emitter";
import _ from "lodash";

function ModalEditUser(props) {
  const [user, setUser] = useState({
    id: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
  });

  useEffect(() => {
    let user = props.currentUser;
    if (user && !_.isEmpty(user)) {
      setUser({
        id: user.id,
        email: user.email,
        password: "user.email",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
      });
    }
  }, [props.currentUser]);

  useEffect(() => {
    emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
      setUser({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
      });
    });
  }, []);

  const handleOnChangeInput = (event, id) => {
    let copyState = { ...user };
    copyState[id] = event.target.value;
    setUser({ ...copyState });
  };

  const checkValidateInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!user[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter:" + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  const handleSaveUser = () => {
    console.log("user change is:", user);
    let isValid = checkValidateInput();
    console.log("valid is:", isValid);
    if (isValid === true) {
      props.editUser(user);
    }
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        toggle={props.toggleFromParent}
        className={"modal-user-container"}
        size="lg"
      >
        <ModalHeader toggle={props.toggleFromParent}>Edit User</ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="modal-user-body">
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="text"
                    onChange={(event) => {
                      handleOnChangeInput(event, "email");
                    }}
                    value={user.email}
                    disabled
                  />
                </div>
                <div className="input-container">
                  <label>Password</label>
                  <input
                    type="text"
                    onChange={(event) => {
                      handleOnChangeInput(event, "password");
                    }}
                    value={user.password}
                    disabled
                  />
                </div>
                <div className="input-container">
                  <label>First Name</label>
                  <input
                    type="text"
                    onChange={(event) => {
                      handleOnChangeInput(event, "firstName");
                    }}
                    value={user.firstName}
                  />
                </div>
                <div className="input-container">
                  <label>Last Name</label>
                  <input
                    type="text"
                    onChange={(event) => {
                      handleOnChangeInput(event, "lastName");
                    }}
                    value={user.lastName}
                  />
                </div>
                <div className="input-container max-width-input">
                  <label>Address</label>
                  <input
                    type="text"
                    onChange={(event) => {
                      handleOnChangeInput(event, "address");
                    }}
                    value={user.address}
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              handleSaveUser();
            }}
          >
            Save Changes
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={props.toggleFromParent}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalEditUser;
