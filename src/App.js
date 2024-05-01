import React from 'react'
import ReactDOM from "react-dom/client";
import TaskTrackerApp from "./components/TaskTrackerApp";
import "../index.css";

const App = () => {
  return (
    <div>
        <TaskTrackerApp />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);