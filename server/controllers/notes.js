import mongoose from 'mongoose';
import Note from '../models/note.js';
export const getNotes = async (req,res) => {
   try {
       const notes = await Note.find();
       console.log(notes);
       res.status(200).json(notes);
   } catch (error) {
       res.status(404).json({message: error.message});
   }
}

export const createNote = async (req, res) => {    
    const { title,content } = req.body;
    console.log(title);
    const newNote = new Note({ title, content })
    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const deleteNote= async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Note with that Id');

    await Note.findByIdAndRemove(id);
    res.json({message: 'Note deleted successfully'});
}

