import React, { Component } from "react";

class NavStyle2 extends Component {
  render() {
    const { arr, head, fontColor, backgroundClr } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={{background: backgroundClr}}>
        <a className="navbar-brand" href="#" style={{color: fontColor}}>
          {head}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {arr.length > 0
              ? arr.map(item => (
                  <li className="nav-item active" key={item + Math.random()}>
                    <a className="nav-link" href="#">
                      {item}
                    </a>
                  </li>
              ))
              : null}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavStyle2;
