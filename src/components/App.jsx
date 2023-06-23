import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
      setNotes(prevNotes =>{
       return [...prevNotes, newNote];
      });
    }

    function deleteNote(id){
      setNotes((prevNotes) =>{
        return prevNotes.filter((oneNote, index)=>{
          return index !== id
        })
      })
    }



  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((oneNote, index)=> 
        <Note 
          key={index}
          id={index}
          onChecked={deleteNote}
          title={oneNote.title} 
          content={oneNote.content} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;