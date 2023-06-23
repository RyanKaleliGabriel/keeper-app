import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';



function Note(props){
    return(
    <div className="note">
        <h1 className="">{props.title}</h1>
        <p className="">{props.content}</p>
        <button onClick={()=>{
            props.onChecked(props.id)
        }}><DeleteIcon /></button>
    </div>);
}

export default Note;