import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    const [takeNote, setInputs] = useState(false);

    
    function handleChange(event){
      const {name, value} = event.target;
        const newValue = value;
        setNote(prevValue =>{
            return{
                ...prevValue,
                [name]:newValue
            };
        });
    }

    function handleClick(){
      setInputs(true)
    }

    function submitNote(event){
      props.onAdd(note)
      setNote(()=>{
        return {
          title:"",
          content:""
        }
      })
      event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">


        <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" 
        value={note.title}
        type={takeNote ? null : "hidden" } />


        <textarea 
        onClick={handleClick}
        onChange={handleChange} 
        name="content" 
        placeholder="Take a note..." 
        rows={takeNote ? "3" : "1"}
        value={note.content} />

      <Zoom in={takeNote ? true : false}>
       <Fab 
       onClick={submitNote}>
       {takeNote ? <AddIcon /> : false}
       </Fab>
       </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;