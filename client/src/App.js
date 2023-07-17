import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Main from "./Components/Main";
import Chat from "./Components/Chat";
import Document from "./Components/Document";
import "./App.css";
import Recording from "./Components/recorder/Recording";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register-old";
import jj from "./assets/200x100.png";

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: [],
    };
  }
  add_code = (new_code, modifyLast) => {
    let updated_code = [];
    if (modifyLast) {
      updated_code = this.state.code.slice(0, -1);
    } else {
      updated_code = this.state.code;
    }
    updated_code.push(new_code);
    // let updated_code = [...this.state.code, new_code];
    this.setState({ code: updated_code });
  };

  onRemove = (index) => {
    let updatedCode = [...this.state.code];
    updatedCode.splice(index, 1);

    this.setState({
      code: updatedCode,
    });
  };
  render() {
    return (
      <div className="main-container" onClick={this.general_click}>
        {this.state.code.map((ele, index) => (
          <Main
            key={index}
            className="test-two"
            content={ele}
            onRemove={this.onRemove}
            index={index}
          />
        ))}
        <Chat
          add_code={(code, modifyLast) => this.add_code(code, modifyLast)}
        />
        <div className="recording">
          <Recording
            add_code={(code, modifyLast) => this.add_code(code, modifyLast)}
          />
        </div>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    isUserAuthenticated: false,
  };

  render() {
    const changeAuth = () => {
      this.setState({ isUserAuthenticated: true });
    };
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return this.state.isUserAuthenticated ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route exact path="/login">
            <Login
              isAuth={this.state.isUserAuthenticated}
              changeAuth={changeAuth}
            />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/home">
            <MainApp />
          </Route>
          <Route exact path="/docs">
            <Document />
          </Route>
        </Switch>
      </Router>
    );
  }
}
