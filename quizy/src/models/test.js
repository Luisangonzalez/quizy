import mongoose from 'mongoose';
import { cuestionBaseSchema, userSchema } from './schemas';

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
    cuestions: [cuestionBaseSchema]
});
