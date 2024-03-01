import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [task, setTask] = useState({
    description: "",
    done: false
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = axios.post("http://localhost:3000/tasks", task);
    console.log(response.data);
    alert("Ok");
    navigate("/");
  };

  return (
    <>
      <h1>Add</h1>
      <form onSubmit={handleSubmit}>
        <label>
          What do you need to do?
          <input
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">ADD</button>
      </form>
    </>
  );
}

export default Add;
