import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { emitter } from "../../../utils/emitter";

function ModalUser(props) {
  const [user, setUser] = useState({
    id: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
  });

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
    // console.log(event.target.value)
    let copyState = { ...user };
    copyState[id] = event.target.value;
    // console.log(copyState)
    setUser({ ...copyState });
    // console.log(user)
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
  const handleAddNewUser = () => {
    let isValid = checkValidateInput();
    if (isValid === true) {
      props.createNewUser(user);
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
        <ModalHeader toggle={props.toggleFromParent}>
          Create a new user
        </ModalHeader>
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
              handleAddNewUser();
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

export default ModalUser;
