import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import notesRoutes from './routes/notes.js';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
app.use('/notes',notesRoutes);
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => app.listen(PORT,() => console.log(`Server started at ${PORT}`)))
.catch((error) => console.log(error));
mongoose.set('useFindAndModify',false);