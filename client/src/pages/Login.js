import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../redux/actions/authAction";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const [typePass, setTypePass] = useState(false);

  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
    if (auth.token) navigate("/");
  };

  return (
    <div className="auth_page">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">VieRail</h3>

        <div className="mb-3 form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={handleChangeInput}
            name="email"
            placeholder="Email Address"
          />
        </div>

        <div className="mb-3 form-group">
          <div className="pass">
            <input
              type={typePass ? "text" : "password"}
              className="form-control"
              id="password"
              onChange={handleChangeInput}
              name="password"
              placeholder="Password"
            />
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? "Hide" : "Show"}
            </small>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={email && password ? false : true}
        >
          Login
        </button>

        <p className="my-2">
          You don't have an account?{" "}
          <a href="/Register" className="btn btn-success">
            Create New Account
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
