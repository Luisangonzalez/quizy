import mongoose from 'mongoose';
import {userSchema} from './user';
import {cuestionBaseSchema} from './cuestions/cuestionBase';
import {chooseCuestionSchema, ChooseCuestion, CuestionModelChoose} from './cuestions/cuestionChoose';

const Schema = mongoose.Schema;

export const testSchema = new Schema({
    title: String,
    author: userSchema,
    category: String,
    isOrder: Boolean,
    askLater: Boolean,
    allowNotAsk: Boolean,
    statistics: [
        {
            passed: Number,
            nTimes: Number,
            volarations: Number,
            nShared: [
                {
                    google: Number,
                    facebook: Number,
                    twitter: Number,
                    email: Number
                }
            ]
        }
    ],
    dateCreation: Date,
    dataPublished: Date,
    timeToFinish: Date,
    private: [
        {
            users: [
                {
                    userId: String,
                    write: Boolean
                }
            ]
        }
    ],
    cuestions: [chooseCuestionSchema]
});

export const Test = mongoose.model('Test', testSchema);
