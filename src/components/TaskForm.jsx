import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createTask, updateTask } from "../api";

function TaskForm() {
  const history = useHistory();
  const [id] = useParams();
  const isEditMode = !!id;

  const [task, setTask] = useState({
    name: "",
    isCompleted: false,
    deadLine: "",
    assignedTo: "",
    additionalInfo: "",
  });

  useEffect(() => {
    if (isEditMode) {
    }
  }, [id, isEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      updateTask(id, task).then(() => {
        history.pushState("/");
      });
    } else {
      createTask(task).then(() => {
        history.pushState("/");
      });
    }
  };

  return (
    <div>
      <h2>{isEditMode ? "Edit task" : "Add task"}</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">{isEditMode ? "update" : "Create"}</button>
      </form>
    </div>
  );
}
export default TaskForm;
