import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import CompletedTask from "./CompletedTask";
import Footer from "./Footer";
import { Grid } from "@mui/material";

const TaskTrackerApp = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  //console.log(tasks);

  const deleteTask = (index) => {
    const compTask = tasks.filter((task, i) => i === index);
    //console.log(compTask);
    setCompletedTask([...completedTask, ...compTask]);

    const updateTasks = tasks.filter((task, i) => i !== index);
    setTasks(updateTasks);
  };

  return (
    <div className="p-2 bg-slate-300">
      <Header />
      <div className="mt-[-70px]">
        <Grid container spacing={2} justifyContent="space-evenly">
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              mt: { xs: 10, lg: 0 },
              mb: { xs: -8, lg: 0 },
              alignContent: "center",
            }}
          >
            <TaskForm addTask={addTask} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              mb: { xs: -20, lg: 0 },
              mt: { xs: 10, lg: 0 },
              alignContent: "center",
            }}
          >
            <TaskList tasks={tasks} deleteTask={deleteTask} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              mt: { xs: 20, lg: 0 },
              alignContent: "center",
            }}
          >
            <CompletedTask tasks={completedTask} />
          </Grid>
        </Grid>
      </div>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{
          alignContent: "center",
        }}
      >
        <Footer />
        <ToastContainer />
      </Grid>
    </div>
  );
};

export default TaskTrackerApp;
