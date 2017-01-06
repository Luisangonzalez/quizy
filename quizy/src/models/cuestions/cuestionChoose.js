import mongoose from 'mongoose';

/* This schema is valid for CHOOSE & TRUEFALSE & check  */
const Schema = mongoose.Schema;

export const chooseCuestionSchema = new Schema({
    cuestion: String,
    answers: [
        {
            answer: String,
            isCorrect: Boolean
        }
    ]

});
