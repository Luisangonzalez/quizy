import mongoose from 'mongoose';
import {chooseCuestionSchema} from './cuestionChoose';
import {oneCuestionSchema} from './oneCuestion';

const Schema = mongoose.Schema;

export const cuestionBaseSchema = new Schema({
    image: String,
    youtube: String,
    link: String,
    description: String,
    comment: [
        {
            ok: String,
            fail: String,
            Join: String
        }
    ],
    type: String,
    choose: chooseCuestionSchema,
    truefalse: chooseCuestionSchema,
    check: chooseCuestionSchema,
    one: oneCuestionSchema

});

export const CuestionBase = mongoose.model('CuestionBase', cuestionBaseSchema);
