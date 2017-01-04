import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const cuestionBaseSchema = new Schema({
    image: String,
    youtube: String,
    link: String,
    description: String,
    comment: [{
      ok: String,
      fail: String,
      Join: String
    }]

});

export const CuestionBase = mongoose.model('CuestionBase', cuestionBaseSchema);
