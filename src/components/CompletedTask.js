import React from "react";
import {
    List,
    ListItem,
    ListItemText,
    Typography,
  } from "@mui/material";

const CompletedTask = ({tasks}) => { //props destructuring on the fly
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <p className="text-center text-3xl font-semibold ">Completed List</p>
      <div className="border-2 border-black w-96 h-auto mt-10 p-2">
        {tasks.length == 0 ? (
          <h1 className="text-lg font-extrathin">List Is Empty</h1>
        ) : (
          <List>
            {tasks.map((task, index2) => (
              <div className="border-b-2 border-slate-300">
                <ListItem key={index2}>
                  
                  <ListItemText>
                    Name :{" "}
                    <Typography className="font-semibold text-2xl text-green-500">
                      {task.name}
                    </Typography>
                    Description :{" "}
                    <Typography className="font-thin text-md">
                      {task.description}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </div>
            ))}
          </List>
        )}
      </div>
    </div>
  );
};

export default CompletedTask;
