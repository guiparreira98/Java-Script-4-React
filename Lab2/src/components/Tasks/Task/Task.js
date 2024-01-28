import {useState} from 'react'

export default function Task({description, id,done, onRemoveTask}){
    const [status,setStatus] = useState(done)
    
    const handleStatus =()=>{
        setStatus(!status)
        
        
    }

    const removeTask =()=>{
        onRemoveTask(id)
    }

  

    return(
        <div>
            <div>
                <h2>{description}</h2>
                <p>ID: {id}</p>
                <p>Status: {status ? 'Completed' : 'Open'}</p>
                <button onClick={handleStatus}>Change Status</button>
                <button onClick={removeTask}>Remove Task</button>
                <hr></hr>
                
            </div>
            
            
        </div>

        
    )
}