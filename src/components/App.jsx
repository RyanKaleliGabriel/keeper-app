import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";





function App(){
    return  (
    <div>
    <Header />
    {notes.map(notedetail=>
        <Note
        key = {notedetail.id}
        title={notedetail.title}
        content={notedetail.content}
         />
    )}
    <Footer />
    </div>
    );
}

export default App;