import express from 'express';
import mongoose from 'mongoose';
import 'babel-polyfill';
import { routes } from './routes';
import { config } from 'dotenv';
// import co from 'co';

config();

process.env.DOCKER_DB ? process.env.MONGODB_DEV : process.env.DOCKE_DB;
process.env.DOCKER_WEB_PORT ? process.env.WEB_PORT : process.env.DOCKER_WEB_PORT;

console.log('ENV :', process.env.MONGODB_DEV, process.env.WEB_PORT);

export const app = express();

export const connect = () => {
    mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_DEV);
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', function() {
        console.log('Connecto with mongoose');
        app.listen(process.env.PORT || process.env.WEB_PORT, function() {
            console.log('Listening app');
        });

    });
};

connect();
routes(app);

// ES5 require('./routes.js')(app);
