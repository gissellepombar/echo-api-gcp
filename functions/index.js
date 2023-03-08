import functions from "firebase-functions";
import express from "express";
import cors from "cors";
// import 'dotenv/config'

import { getAllDoc, postDoc, deleteDeck, getOneDeck, updateRanking } from "./src/functions.js";

const app = express();
app.use(cors());
app.use(express.json())

// app.listen('5002', () => console.log('listening on port 5002')) 

app.get('/', (req, res) => { 
    res.json('You did it! 🥳'); 
  });

//GET: Get All
app.get("/getall", getAllDoc);

//GET ONE: Get One
app.get("/deck/:deckId", getOneDeck)

//POST: Post Doc 
app.post("/post", postDoc);

//DELETE: Delete 
app.delete("/delete/:deckId", deleteDeck)

//UPDATE: Patch
app.patch('/deck/:deckId/ranking/:cardIndex', updateRanking)

export const api = functions.https.onRequest(app);

//https://echo-api-gp.web.app