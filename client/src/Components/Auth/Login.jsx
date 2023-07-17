import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import classnames from "classnames";
import axios from "axios";

const Login = ({ isAuth, changeAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const check = await axios.post("/login", data);
    if (check.data.success) {
      setEmail("");
      setPassword("");
      history.push("/home");
    } else {
      setError(true);
    }
    console.log("data here: ", check.data.success);
  };
  return (
    <div>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your account</p>
              {error ? (
                <div className="invalid-feedback">
                  Invalid email or password
                </div>
              ) : null}
              <form onSubmit={onSubmit}>
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Enter email here
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="inputPassword4" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
              <Link to="/register">Don't have an account</Link>
              <div className="docs-btn">
                <Link to="/docs" target="_blank">
                  Go to our Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
