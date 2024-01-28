import { useState } from "react";
import uuid from "react-uuid";
import Task from "./Task/Task";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: "Clean the snow",
      done: true,
    },
    {
      id: uuid(),
      description: "Walk with the dog",
      done: false,
    },
    {
      id: uuid(),
      description: "Finish the Lab",
      done: false,
    },
  ]);

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
            
            /*Aqui é aonde vai passar as propriedades pro task*/
            <Task
              key={index}
              description={task.description}
              id={task.id}
              done={task.done}
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
