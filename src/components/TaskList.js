import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="flex justify-center items-center  flex-col">
      <p className="text-center text-3xl font-semibold ">Task List</p>
      <div className="border-2 border-black w-96 h-auto mt-10 p-2">
        {tasks.length == 0 ? (
          <h1 className="text-lg font-extrathin">List Is Empty</h1>
        ) : (
          <List>
            {tasks.map((task, index1) => (
              <div className="border-b-2 border-slate-300">
                <ListItem key={index1}>
                  <ListItemText>
                    Name :{" "}
                    <Typography className="font-semibold text-2xl text-red-500">
                      {task.name}
                    </Typography>
                    Description :{" "}
                    <Typography className="font-thin text-md">
                      {task.description}
                    </Typography>
                  </ListItemText>
                  <IconButton onClick={() => deleteTask(index1)}>
                    {/* {console.log(index)} */}
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              </div>
            ))}
          </List>
        )}
      </div>
    </div>
  );
};

export default TaskList;
