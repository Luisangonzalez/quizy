import mongoose from 'mongoose';
import {CuestionBase, cuestionBaseSchema} from './cuestionBase';

const Schema = mongoose.Schema;

export const chooseCuestionSchema = new Schema({
    cuestion: String,
    answers: [
        {
            answer: [{
                answer: String,
                isCorrect: Boolean
            }]

        }
    ]
});

// export const ChooseCuestion = CuestionBase.discriminator('CuestionChoose', chooseCuestionSchema);

export const CuestionModelChoose = mongoose.model('CuestionChoose', chooseCuestionSchema);
