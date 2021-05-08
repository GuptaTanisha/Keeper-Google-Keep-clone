import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { createNote } from '../actions/notes.js';
function CreateArea() {
  const dispatch = useDispatch();
  const [note, setNote] = useState({ title: "",content: "" });
  const [isExpanded,setIsExpanded]=useState(false);
  function submitNote(event) {
    dispatch(createNote(note));
    clear();
    event.preventDefault();
  }

  const clear = () => {
    setNote({title: '', content: '' });
}

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        {isExpanded && <input
          name="title"
          onChange={(e) => setNote({...note,title:e.target.value})}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onClick={() => setIsExpanded(true)}
          onChange={(e) => setNote({...note,content:e.target.value})}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?3:1}
        />
        <Zoom in={isExpanded}>
        <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
