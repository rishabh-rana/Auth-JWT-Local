import React from "react";

const field = (props) => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input className="form-control" {...props}/>
    </div>
  );
};

export default field;
