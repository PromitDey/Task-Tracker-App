import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, Button, Grid } from "@mui/material";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    addTask({ name: taskName, description: taskDescription });
    setTaskName("");
    setTaskDescription("");
  };

  const noti = () => {
    toast("Wow !! Task added");
  };

  return (
    <Grid justifyContent="center" alignContent="center">
      <Grid>
        <div>
          <h1 className="text-center text-3xl font-semibold mb-10">
            Task Form
          </h1>
          <form className="p-2 flex flex-col w-96" onSubmit={handleChange}>
            <TextField
              label="Task Name"
              value={taskName}
              className="mb-2"
              onChange={(e) => setTaskName(e.target.value)}
            />
            <TextField
              label="Task Description"
              value={taskDescription}
              className="mb-2"
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <Button type="submit" variant="contained" onClick={noti}>
              Add Task
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default TaskForm;
