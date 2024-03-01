import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function List() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  const deletee = (id) => {
    axios.delete(`http://localhost:3000/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
      alert("Ok");
    });
  };

  const MarkAsDone = (id) => {
    axios
      .patch(`http://localhost:3000/tasks/${id}`, { done: true })
      .then(() => {
        const tarefasUpdated = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, done: true };
          }
          return task;
        });
        setTasks(tarefasUpdated);
      });
  };

  return (
    <>
      <h1>List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => MarkAsDone(task.id)}
              />
              <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                {task.description}
              </span>
            <button onClick={() => deletee(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to={"/add-task"}>Add a task</Link>
    </>
  );
}

export default List;
