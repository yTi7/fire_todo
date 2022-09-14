import { AiOutlinePlusSquare } from "react-icons/ai";
import { useState } from "react";

// Firebase Imports
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const NewTaskInput = () => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tasksCol = collection(db, "tasks");
    try {
      const docRef = await addDoc(tasksCol, {
        title: newTask,
        completed: false,
      });
      console.log("Task successfully added with ID: ", docRef.id);
      setNewTask("");
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTaskInput">
          <AiOutlinePlusSquare />
        </label>
        <input
          type="text"
          name="task"
          id="newTaskInput"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </form>
    </>
  );
};

export default NewTaskInput;
