
import Header from "./components/Header/Header";

import Tasks from "./components/Tasks/Tasks";

import Form from "./components/Form/Form";

import uuid from "react-uuid";

import {useState} from 'react'

function App() {


  const [tasks, setTasks] = useState([]);

  const addTask =(description,status) =>{
    const updatedTasks =[... tasks]

    updatedTasks.push({
      id:uuid(),
      description:description,
      done:status ==='Completed'
    })


    setTasks(updatedTasks)
    console.log("Updated Tasks1:", updatedTasks);
  }

  
  return (
    <div className="App">
     <Header/>
     <Tasks 
     tasks={tasks}
     setTasks={setTasks}

     />
     <Form onAddTask={addTask}/>
    </div>
  );
}

export default App;
