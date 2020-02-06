import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(noteData) {
      setNotes([...notes, noteData]);
    }

    function deleteNote(id) {
        setNotes(notes.filter((note, index) => {return index != id}));
    }
    // function deleteNote(id) {
    //     setNotes(prevNotes => {
    //       return prevNotes.filter((noteItem, index) => {
    //         return index !== id;
    //       });
    //     });
    //   }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteData, index) => (
        <Note 
            key={index} 
            id={index} 
            title={noteData.title} 
            content={noteData.content} 
            onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
