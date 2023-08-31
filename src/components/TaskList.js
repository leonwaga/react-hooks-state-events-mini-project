import React from "react";
import Task from "./Task";

function TaskList({tasks, itemDelete}) {
  return (
    <div className="tasks">
      {tasks.map((task,index)=>(
        <Task itemDelete={itemDelete} key={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
