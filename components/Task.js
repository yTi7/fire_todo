import { TiDelete } from "react-icons/ti";

// Firebase Imports
import { db } from "../firebaseConfig";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

const Task = ({ task, id }) => {
  const status = task.completed;
  const toggleStatus = async (id) => {
    const docRef = doc(db, "tasks", id);
    await updateDoc(docRef, {
      completed: !status,
    });
  };
  const handleDelete = async (id) => {
    const docRef = doc(db, "tasks", id);
    await deleteDoc(docRef);
  };
  return (
    <>
      <div className="taskWrapper">
        <h4
          className={`taskTitle ${status ? "completed" : ""}`}
          onClick={() => toggleStatus(task.id)}
        >
          {task.title}
        </h4>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDelete(task.id);
          }}
        >
          <TiDelete />
        </button>
      </div>
    </>
  );
};

export default Task;
