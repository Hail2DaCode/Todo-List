import './App.css';
import React, { useState } from 'react';
import TasksForm from './components/TasksForm'
import TasksDisplay from './components/TasksDisplay'

function App() {
  const [currentTask, setCurrentTask] = useState([])
  console.log(currentTask);
  const youvegottask = ( newTask ) => {
    setCurrentTask( [...currentTask, newTask] );
  }
  const youvegotcheck = (newCheck) => {
    let check = currentTask.map((item) => item.content == newCheck? {completed: true, content: item.content}: {completed: item.completed, content: item.content});
    setCurrentTask(check);
    console.log(check);
  }
  const youvegotdelete = (newDelete) => {
    console.log(newDelete);
    let deleteitem = currentTask.filter(item=>item.content != newDelete);
    console.log(deleteitem);
    setCurrentTask(deleteitem);
  }
  return (
    <div className="App">
      <TasksForm onNewTask = { youvegottask }/>
      <TasksDisplay task = { currentTask } onCheck = {youvegotcheck} onDelete={youvegotdelete} />
    </div>
  );
}

export default App;
