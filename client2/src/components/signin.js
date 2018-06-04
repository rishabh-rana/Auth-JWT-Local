import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import * as actions from "../actions";
import { compose } from "redux";
import { connect } from "react-redux";

class Signin extends Component {
  componentWillMount() {
    if (this.props.message) {
      this.props.updateerror("");
    }
  }

  onSubmit = formvalues => {
    this.props.signin(formvalues, this.props.history);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>SignIn</h1>
        <h5 style={{ textAlign: "center", color: "salmon" }}>
          {" "}
          {this.props.message}{" "}
        </h5>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label>Email Address</label>
            <Field
              component="input"
              type="text"
              placeholder="Enter email"
              label="Email Address"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <Field
              component="input"
              type="password"
              placeholder="Enter password"
              label="Password"
              name="password"
              className="form-control"
            />
          </div>
          <button
            className="btn btn-md btn-primary"
            style={{ textAlign: "center" }}
          >
            SignIn
          </button>
        </form>
      </div>
    );
  }
}

const mapstate = state => {
  return {
    message: state.auth.error
  };
};
export default compose(
  connect(mapstate, actions),
  reduxForm({ form: "signin" })
)(Signin);
