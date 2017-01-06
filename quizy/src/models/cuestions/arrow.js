import mongoose from 'mongoose';

/*  Type ARROW */
const Schema = mongoose.Schema;

export const arrowCuestionSchema = new Schema({
    cuestion: String,
    columnA: [
        {
            phrase: String,
            indexColumnB: [Number]
        }
    ],
    columnB: [String]
});
