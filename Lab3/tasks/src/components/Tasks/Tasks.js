import { useState } from "react";

import Task from "./Task/Task";

export default function Tasks({tasks,setTasks}) {
  
  const handleRemovetask = (taskID) => {
    console.log(taskID);
    const updatedTask = tasks.filter((task) => task.id !== taskID);
    setTasks(updatedTask);
  };
 
  const handleCleartask = () => {
    setTasks([]);
  };
  

  return (
    <main>
      <h1>These are the tasks</h1>

      <hr></hr>

      {tasks.map((task, index) => {
        return (
          console.log(task),
          (
            
            /*Aqui é aonde vai passar as propriedades e os tasks pro task*/
            <Task
              key={index}
              {...task}
              onRemoveTask={handleRemovetask}
              onClearTask={handleCleartask}
            />
          )
        );
      })}

      <div>
        <button onClick={handleCleartask}>Clear Tasks</button>
      </div>
    </main>
  );
}
