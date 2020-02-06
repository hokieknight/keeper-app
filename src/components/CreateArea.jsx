import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [noteData, setNoteData] = useState({title : "", content: ""});

  function updateNote(event) {
    const {name, value} = event.target;
    setNoteData({...noteData, [name] : value});
  }

  function submitNote(event) {
    props.onAdd(noteData);
    setNoteData({title : "", content: ""});
    setExpanded(false);
    event.preventDefault();
  }

  function handleClick(event) {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input onChange={updateNote} name="title" placeholder="Title" value={noteData.title} />)}
        <textarea onClick={handleClick} onChange={updateNote} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={noteData.content} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;