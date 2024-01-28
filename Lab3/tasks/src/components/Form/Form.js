import { useState } from "react";

export default function Form({onAddTask}) {
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const [status,setStatus] = useState('')

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const validate = [];

    if (description.length <5) {
      validate.push("The Description must be at least 5 characters");
    }

    if(status === ""){
      validate.push("Please select a Status")
    }

    setErrorMessage(validate)

    
    
    if(validate.length === 0){
      console.log(status)
      onAddTask(description,status)
      //Clean the field
      setDescription('')
    }

    
  };

  
  return (
    <form onSubmit={handleSubmitForm}>
      {/*Conditionally display the error message*/}
      {errorMessage.length > 0 && (
        <div>
          Invalid Data
          <ul>
            {errorMessage.map((error,index)=>(
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )
      }
      <h1>Add a new Task</h1>

      {/*description Field*/}
      <div>
        <label>
          Description:
          <input 
          type='text'
          value={description}
          onChange={(event)=>setDescription(event.target.value)}
          maxLength={50}
          ></input>
        </label>
        
      </div>
      {/*Status Field*/}

      <div>
        <label>
          Status
          <select
          value={status}
          onChange={(event)=>setStatus(event.target.value)}
          >
          <option></option>
          <option value='Open'>Open </option>
          <option value='Completed'>Completed </option>
        
          </select>
        </label>
      </div>

      <button>Send</button>
    </form>
  );
}
