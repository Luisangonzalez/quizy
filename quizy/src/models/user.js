import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema({
    username: String,
    name: String,
    LastName: String,
    email: String,
    url: String,
    image: String,
    socialNetwork: [
        {
            google: String,
            facebook: String,
            twitter: String,
            email: String
        }
    ]
});
