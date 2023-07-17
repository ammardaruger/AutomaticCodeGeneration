import React, { Component, PureComponent } from "react";
import classnames from "classnames";
import { Link, withRouter } from "react-router-dom";

class Register extends PureComponent {
  constructor(props) {
    super(props);
    const { history } = this.props;
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      isError: false,
      errors: {
        passwordMatch: "",
      },
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value, // this is targeted through name parameter in input field
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.password2) {
      this.setState({
        isError: true,
        errors: {
          passwordMatch: "Password must be matched!",
        },
      });
    } else {
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
      };

      console.log("data here: ", newUser);
      this.setState({
        isError: false,
        errors: {
          passwordMatch: "",
        },
      });
    }
  };

  redirectToHome = () => {
    const { history } = this.props;
    if (history) history.push("/home");
  };

  render() {
    const { history } = this.props;
    const { name, email, password, password2 } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your account here</p>
              <form onSubmit={this.onSubmit}>
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
                    onChange={this.onChange}
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
                      "is-invalid": this.state.isError,
                    })}
                    id="formGroupExampleInput"
                    placeholder="Enter your password"
                    onChange={this.onChange}
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
                      "is-invalid": this.state.isError,
                    })}
                    id="formGroupExampleInput"
                    placeholder="Confirm password"
                    onChange={this.onChange}
                  />
                  {this.state.errors.passwordMatch && (
                    <div className="invalid-feedback">
                      {this.state.errors.passwordMatch}
                    </div>
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
  }
}

export default withRouter(Register);
