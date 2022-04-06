import React, { useState } from "react";

import CreateTask from "../components/CreateTask";
import Task from "../components/Task";
import TasksContext from "../contexts/TasksContext";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="tasks-page">
      <TasksContext.Provider value={{ tasks: tasks, setTasks }}>
        <CreateTask />
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            startDate={task.startDate}
            endDate={task.endDate}
            parentTask={task.parentTask}
          />
        ))}
      </TasksContext.Provider>
    </div>
  );
};

export default TasksPage;
