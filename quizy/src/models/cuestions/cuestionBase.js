import mongoose from 'mongoose';
import { chooseCuestionSchema } from './cuestionChoose';
import { oneCuestionSchema } from './oneCuestion';
import { arrowCuestionSchema } from './arrow.js';

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
    // Type of schemas:
    //  -> SECTION
    //  -> CHOOSE
    //  -> TRUEFALSE
    //  -> CHECK
    //  -> ONE
    //  -> ARROW
    type: String,
    choose: chooseCuestionSchema,
    truefalse: chooseCuestionSchema,
    check: chooseCuestionSchema,
    one: oneCuestionSchema,
    arrow: arrowCuestionSchema

});
