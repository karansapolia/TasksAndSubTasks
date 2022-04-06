import React, { useState } from "react";
import CreateTask from "../CreateTask";

import "./style.css";

const Task = ({ id, startDate, endDate, parentTask, title, subTasks }) => {
  const [toggleCreateTask, setToggleCreateTask] = useState(false);

  return (
    <div className="task">
      <div className="task-title">Title: {title}</div>
      {parentTask && (
        <div className="parent-task">Parent Task: {parentTask}</div>
      )}
      {startDate && <div className="start-date">Start date: {startDate}</div>}
      {endDate && <div className="start-date">End date: {endDate}</div>}
      {subTasks && subTasks.length > 0 && (
        <div className="sub-tasks">
          <h3>{title} Sub Tasks</h3>
          {subTasks.map((subTask) => (
            <Task
              key={subTask.id}
              title={subTask.title}
              startDate={subTask.startDate}
              endDate={subTask.endDate}
              parentTask={subTask.parentTask}
            />
          ))}
        </div>
      )}
      <button
        className="create-subtask-button"
        onClick={() => setToggleCreateTask(!toggleCreateTask)}
      >
        Create Sub-task
      </button>
      {toggleCreateTask && (
        <CreateTask
          parentTask={id}
          minStartDate={startDate}
          maxEndDate={endDate}
        />
      )}
    </div>
  );
};

export default Task;
