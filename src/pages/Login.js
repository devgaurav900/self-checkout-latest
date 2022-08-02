import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { _userSignIn } from "../redux/actions";
import { useDispatch } from "react-redux";
import {
  BflGroupLogo,
  Merge,
  Vector1,
  Vector2,
  Vector6,
} from "../assets/images";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [users, setUsers] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLogin = await _userSignIn(dispatch, users);
    if (isLogin) navigate('/register');
  };

  const addUserName = (users) => {
    setUsers(users);
    localStorage.setItem("userName", JSON.stringify(users.username));
  };

  return (
    <Fragment>
      <section className="login">
        <div className="container-fluid">
          <div className="row login-section-main">
            <div className="col1 position-relative">
              <div className="bfl-main text-center pb-4">
                <img src={BflGroupLogo} alt="bfl" />
              </div>
              <div className="login-sm text-center">
                <img src={Merge} alt="login-sm" />
                <div className="welcome-mobile">
                  <h2>Welcome Back</h2>
                </div>
              </div>
            </div>
            <div className="position-relative login-color col2">
              <div className="welcome">
                <h2>Welcome Back</h2>
              </div>

              <form type="form">
                <div className="login-main">
                  <div className="login-box pb-3 userId">
                    <div className="login-icon">
                      <img src={Vector2} alt="profile" className="img-fluid" />
                    </div>
                    <input
                      type="text"
                      name="username"
                      onChange={onChangeHandler}
                      placeholder="User ID"
                      required
                    />
                  </div>
                  <div className="login-box password">
                    <div className="login-icon">
                      <img src={Vector1} alt="password" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      onChange={onChangeHandler}
                      placeholder="********"
                      required
                    />
                  </div>

                  <div className="login-btn text-center submit">
                    <button type="submit" onClick={handleSubmit} >LOGIN</button>
                  </div>
                  <div className="login-image">
                    <img src={Vector6} alt="vector" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
