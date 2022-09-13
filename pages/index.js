import { useEffect, useState } from "react";
import NewTaskInput from "../components/NewTaskInput";
import Task from "../components/Task";

// Firebase imports
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const getData = async () => {
  const tasksCol = collection(db, "tasks");
  try {
    const tasksSnapshot = await getDocs(tasksCol);
    tasksSnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (error) {
    console.error("An error occured: ", error);
  }
};

const Home = () => {
  useEffect(() => {
    getData();
  }, []);
  
  const [tasks, setTasks] = useState([
    {
      title: "Bath at 5pm",
      completed: true,
    },
    {
      title: "Eat maggie masala noodles",
      completed: false,
    },
    {
      title: "Study after 7pm",
      completed: false,
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([{ title: newTask, completed: false }, ...tasks]);
    console.log(tasks);
  };

  return (
    <>
      <main>
        <div className="mainBanner">
          <h1 className="header">Tasks</h1>
          {/* <form onSubmit={handleSubmit}> */}
          <NewTaskInput newTask={newTask} setNewTask={setNewTask} />
          {/* </form> */}
        </div>
        <div className="tasksListWrapper">
          <ul>
            {tasks.length >= 1 ? (
              tasks.map((task, idx) => (
                <li key={idx}>
                  <Task
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                    idx={idx}
                  />
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
