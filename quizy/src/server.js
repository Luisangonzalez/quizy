import express from 'express';
import mongoose from 'mongoose';
import 'babel-polyfill';
import { routes } from './routes';
// import co from 'co';

export const app = express();

const hostDB = () => {
  let db_host;
  if (process.env.DB_HOST) {
    db_host = process.env.DB_HOST;
  } else {
    db_host = 'localhost';
  }
return db_host;
};

const portWeb = () => {
  let web_port;
  if (process.env.WEB_PORT) {
    web_port = process.env.WEB_PORT;
  } else {
    web_port = 8000;
  }
return web_port;

};

export const connect = () => {
  mongoose.connect('mongodb://' + hostDB() + ':27017/test');
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', function () {
    console.log('Connecto with mongoose');
    app.listen(portWeb(), function () {
      console.log('Example app listening on port: ' + portWeb());
    });

  });
};

connect();
routes(app);

// ES5
// require('./routes.js')(app);
