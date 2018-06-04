import axios from "axios";

export const signin = (values, history) => {
  return async dispatch => {
    try {
      const res = await axios.post("/api/signin", values);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: "signin", payload: res.data.token });
      history.push("/");
    } catch (e) {
      dispatch({
        type: "error",
        payload: "Either email or the password is invalid"
      });
    }
  };
};

export const signup = (values, history) => {
  return async dispatch => {
    try {
      const res = await axios.post("/api/signup", values);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: "signin", payload: res.data.token });
      history.push("/");
    } catch (e) {
      dispatch({ type: "error", payload: "Email in use" });
    }
  };
};

export const logout = history => {
  return async dispatch => {
    localStorage.setItem("token", "");
    dispatch({ type: "logout" });
    history.push("/");
  };
};

export const updateerror = payload => {
  return async dispatch => {
    console.log("logging");
    dispatch({ type: "error", payload: payload });
  };
};
