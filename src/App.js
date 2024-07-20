import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetail from "./components/TaskDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={<TaskList />} />
      <Route path="/add" component={<TaskForm />} />
      <Route path="/edit/:id" component={<TaskForm />} />
      <Route path="/detail/:id" component={<TaskDetail />} />
    </Router>
  );
}

export default App;
