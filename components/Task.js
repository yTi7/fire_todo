import { useState } from "react";
import { TiDelete } from "react-icons/ti";

const Task = ({ task, tasks, setTasks, idx }) => {
  const [status, setStatus] = useState(task.completed);
  const toggleStatus = (e) => {
    e.preventDefault();
    setStatus(!status);
  };
  const handleDelete = (idx) => {
    console.log(tasks)
    const updatedTasks = tasks.filter(todo)
  };
  return (
    <>
      <div className="taskWrapper">
        <h4
          className={`taskTitle ${status ? "completed" : ""}`}
          onClick={toggleStatus}
        >
          {task.title}
        </h4>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDelete(idx);
          }}
        >
          <TiDelete />
        </button>
      </div>
    </>
  );
};

export default Task;
