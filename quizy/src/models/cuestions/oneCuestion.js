import mongoose from 'mongoose';

/* TYPE ONE */
const Schema = mongoose.Schema;

export const oneCuestionSchema = new Schema({ cuestion: String, answer: String });
