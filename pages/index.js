import { useEffect, useState } from "react";
import NewTaskInput from "../components/NewTaskInput";
import Task from "../components/Task";

// Firebase imports
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  console.log(tasks);
  useEffect(
    () =>
      onSnapshot(collection(db, "tasks"), (tasks) =>
        setTasks(tasks.docs.map((task) => ({ ...task.data(), id: task.id })))
      ),
    []
  );

  const [newTask, setNewTask] = useState("");

  return (
    <>
      <main>
        <div className="mainBanner">
          <h1 className="header">Tasks</h1>
          <NewTaskInput newTask={newTask} setNewTask={setNewTask} />
        </div>
        <div className="tasksListWrapper">
          <ul>
            {tasks.length >= 1 ? (
              tasks.map((task) => (
                <li key={task.id}>
                  <Task task={task} tasks={tasks} setTasks={setTasks} />
                </li>
              ))
            ) : (
              <h1>No tasks to display</h1>
            )}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
