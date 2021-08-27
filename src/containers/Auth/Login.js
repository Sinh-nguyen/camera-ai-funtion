import { push } from "connected-react-router";
import React, { Component, useState } from "react";
import { connect, useDispatch } from "react-redux";
// import { handleLoginApi } from "../../services/userService";
import * as actions from "../../store/actions";
import "./Login.scss";
import { handleLoginApi } from "../../service/userService";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const dispatch = useDispatch();

  // const history = useHistory();
  // const goLogin = () => history.push("home");

  const handleLogin = async () => {
    try {
      let data = await handleLoginApi(username, password);
      if (data && data.errCode !== 0) {
        setErrMessage(data.message);
      }
      if (data && data.errCode === 0) {
        dispatch(actions.userLoginSuccess(data.user));
        // goLogin()
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          setErrMessage(error.response.data.message);
        }
      }
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content row">
          <div className="col-12 text-center"></div>
          <div className="col-12 form-group login-input">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="col-12 form-group login-input">
            <label>Password</label>
            <div className="custom-input-password">
              <input
                type={isShowPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={() => setIsShowPassword(!isShowPassword)}>
                <i className="far fa-eye"></i>
              </span>
            </div>
          </div>
          <div className="col-12" style={{ color: "red" }}>
            {errMessage}
          </div>
          <div className="col-12">
            <button className="btn-login" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="col-12">
            <span>Forgot your password</span>
          </div>
          <div className="col-12 text-center mt-3">
            <span className="text-other-login">Or Login with:</span>
          </div>
          <div className="col-12 social-lgi">
            <i className="fab fa-google-plus-g google"></i>
            <i className="fab fa-facebook-f facebook"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
