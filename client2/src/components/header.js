import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    console.log(this.props.token);
    let content = null;
    if (this.props.token) {
      content = (
        <ul className="navbar-nav">
          <li className="nav-item" style={{ display: "inline-block" }}>
            <Link className="nav-link" to="/protected">
              Resources
            </Link>
          </li>
          <li className="nav-item" style={{ display: "inline-block" }}>
            <a
              onClick={() => this.props.logout(this.props.history)}
              className="nav-link"
            >
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      content = (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              SignUp
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              SignIn
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          AuthApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" />
          {content}
        </div>
      </nav>
    );
  }
}

const mapstate = state => {
  return {
    token: state.auth.auth
  };
};
export default connect(mapstate, actions)(withRouter(Header));
