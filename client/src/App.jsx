import React, { useState,useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import {useDispatch} from 'react-redux';
import  {useSelector} from 'react-redux';
import CreateArea from "./components/CreateArea";
import { getNotes } from './actions/notes.js';
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotes());
 },[dispatch])

 const notes = useSelector((state) => state.notes);
 //console.log(notes);
  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
             content={noteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
