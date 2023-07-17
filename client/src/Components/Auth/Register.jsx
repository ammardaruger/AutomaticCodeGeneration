import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import classnames from "classnames";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPAssword2] = useState("");
  const [isError, setError] = useState(false);
  const [errors, setErrors] = useState({ passwordMatch: "" });

  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError(true);
      errors.passwordMatch = "Password must be match";
    } else {
      const newUser = {
        email,
        password,
      };
      console.log("data here: ", newUser);
      setEmail("");
      setPassword("");
      setPAssword2("");
      setError(false);
      errors.passwordMatch = "";

      const check = await axios.post("/register", newUser);
      console.log("haha check here: ", check);
      if (check.data.success) {
        setEmail("");
        setPassword("");
        history.push("/login");
      } else {
        setError(true);
      }
    }
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your account here</p>
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
                <label for="formGroupExampleInput" class="form-label">
                  Enter password here
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": isError,
                  })}
                  id="formGroupExampleInput"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password2"
                  value={password2}
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": isError,
                  })}
                  id="formGroupExampleInput"
                  placeholder="Confirm password"
                  onChange={(e) => setPAssword2(e.target.value)}
                />
                {errors.passwordMatch && (
                  <div className="invalid-feedback">{errors.passwordMatch}</div>
                )}
              </div>

              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
