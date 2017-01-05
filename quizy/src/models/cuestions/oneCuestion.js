import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const oneCuestionSchema = new Schema({cuestion: String, answer: String});

export const OneCuestion = mongoose.model('OneCuestion', oneCuestionSchema);
