const reducer = (
  state = { auth: localStorage.getItem("token"), error: "" },
  action
) => {
  if (action.type === "signin") {
    return { ...state, auth: action.payload };
  }

  if (action.type === "logout") {
    return { ...state, auth: "" };
  }

  if (action.type === "error") {
    return { ...state, error: action.payload };
  }

  return state;
};

export default reducer;
