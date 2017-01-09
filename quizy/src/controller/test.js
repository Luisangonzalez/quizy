import { Test } from '../models/models';

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

export const getOneTest = () => {
  return getOne(Test);
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
