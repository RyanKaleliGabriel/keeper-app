import React from "react";




function Note(props){
    return(
    <div className="note">
        <h1 className="">{props.title}</h1>
        <p className="">{props.content}</p>
    </div>);
}

export default Note;