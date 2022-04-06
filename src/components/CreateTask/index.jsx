import React, { useState, useContext } from "react";

import TasksContext from "../../contexts/TasksContext";

const CreateTask = ({ parentTask = null, minStartDate, maxEndDate }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(minStartDate || "");
  const [endDate, setEndDate] = useState("");

  const { tasks, setTasks } = useContext(TasksContext);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const changeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: `${title}-${startDate}-${endDate}`,
      title,
      startDate,
      endDate,
      parentTask,
    };
    setTasks([...tasks, task]);
  };

  return (
    <div className="create-task">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title"
          required
          value={title}
          onChange={changeTitle}
        />
        <input
          type="date"
          placeholder="Start date"
          required
          min={minStartDate}
          max={maxEndDate}
          value={startDate}
          onChange={changeStartDate}
        />
        <input
          type="date"
          placeholder="End date"
          required
          min={startDate}
          max={maxEndDate}
          value={endDate}
          onChange={changeEndDate}
        />
        <button type="submit">Create task</button>
      </form>
    </div>
  );
};

export default CreateTask;
