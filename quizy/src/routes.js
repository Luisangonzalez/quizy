import { getOneTest } from './controller/test';

export let routes  = (app) => {

  app.get('/', (req, res) => {
    res.send('Hello :)');
});

  app.get('/alltest/:manolo', (req, res) => {
    console.log('req :', req.params);
    getOneTest().then((v) => {
      res.send(v);
    });
  });

};

// ES5
// module.exports = function(app) {
//   app.get('/', (req, res) => {
//     res.send('Hello !!');
//   });
// };
