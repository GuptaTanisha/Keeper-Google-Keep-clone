import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteNote} from '../actions/notes.js';
import {useDispatch} from 'react-redux';
function Note(props) {
  const dispatch = useDispatch();
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() =>
       dispatch(deleteNote(props.id))}>
       <DeleteIcon /></button>
    </div>
  );
}

export default Note;
