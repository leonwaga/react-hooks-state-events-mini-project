import React from "react";

function Task({category, text, itemDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>itemDelete(text)}></button>
    </div>
  );
}

export default Task;
