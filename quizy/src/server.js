import express from 'express';
import mongoose from 'mongoose';
import { Test } from './models/models';
import 'babel-polyfill';
// import co from 'co';


const app = express();
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

app.get('/', (req, res) => {
      res.send('Hello !!');
});

let getOne = (model) => {
  return new Promise(function (resolve, reject) {
    model.findOne().exec((err, model) => {
      if (err) {
        reject(err);
      } else {
        resolve(model);
      }
    });
  });
};

// Co
// let getOne = co.wrap(function* (model) {
//   console.log('getONe');
//   let m;
//   try {
//     m = yield model.find().exec();
//   } catch (e) {
//     console.error(e);
//   }
//   console.log(m);
//   return m;
// });

// basic ES5

// let query = Test.find();
// query.exec((err, test) => {
//   if (err) {
//     res.send(err);
//   } else {
//     res.json(test);
//   }
// });

app.get('/alltest/:manolo', (req, res) => {
  console.log('req :', req.params);

  getOne(Test).then((v) => {
    res.send(v);
  });

});
