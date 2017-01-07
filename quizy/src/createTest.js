import { connect } from './server';
import 'babel-polyfill';
// import co from 'co';

import {
    Test,
    User,
    CuestionBase,
    ChooseCuestion,
    OneCuestion,
    ArrowCuestion
} from './models/models';

let newUser = new User({
    username: 'usernameString',
    name: 'nameString',
    LastName: 'lastNameString',
    email: 'emailString',
    url: 'urlString',
    image: 'imageString',
    socialNetwork: [
        {
            google: 'googleString',
            facebook: 'facebookString',
            twitter: 'twitterString',
            email: 'emailString'
        }
    ]
});

let newArrowCuestion = new ArrowCuestion({
    cuestion: 'Selecciona con flechas',
    columnA: [
        {
            phrase: 'leche',
            indexColumnB: [0, 1]
        }, {
            phrase: 'huevo',
            indexColumnB: [2]
        }, {
            phrase: 'plumas',
            indexColumnB: [2]
        }
    ],
    columnB: ['vaca', 'queso', 'gallina']
});

let newOneCuestion = new OneCuestion({
  cuestion: '¿De que color era el caballo blanco de Santiago?',
  answer: 'BLANCO'
});

let newChooseCuestion = new ChooseCuestion({
    cuestion: '¿Cual es mi pueblo?',
    answers: [
        {
            answer: 'Galvez',
            isCorrect: false
        }, {
            answer: 'Menasalbas',
            isCorrect: true
        }
    ]
});

let newCuestionChoose = new CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [
        {
            ok: 'mu bien',
            fail: 'mall',
            Join: 'ale'
        }
    ],
    type: 'CHOOSE',
    choose: newChooseCuestion
});

let newCuestionTrueFalse = new CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [
        {
            ok: 'mu bien',
            fail: 'mall',
            Join: 'ale'
        }
    ],
    type: 'TRUEFALSE',
    truefalse: newChooseCuestion
});

let newCuestionCheck = new CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [
        {
            ok: 'mu bien',
            fail: 'mall',
            Join: 'ale'
        }
    ],
    type: 'CHECK',
    check: newChooseCuestion
});

let newCuestionOne = new CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [
        {
            ok: 'mu bien',
            fail: 'mall',
            Join: 'ale'
        }
    ],
    type: 'ONE',
    one: newOneCuestion
});

let newCuestionArrow = new CuestionBase({
    image: 'noimage',
    youtube: 'noyoutbe',
    link: 'no link',
    description: 'description',
    comment: [
        {
            ok: 'mu bien',
            fail: 'mall',
            Join: 'ale'
        }
    ],
    type: 'ARROW',
    arrow: newArrowCuestion
});

let newCuestionSection = new CuestionBase({
  image: 'noimage',
  youtube: 'noyoutbe',
  link: 'no link',
  description: 'description',
  type: 'SECTION'
});

let newTest = new Test({
    title: 'title_String',
    author: newUser,
    category: 'category_String',
    order: true,
    askLater: true,
    allowNotAsk: true,
    statistics: [
        {
            passed: 5,
            nTimes: 2,
            volarations: 3,
            nShared: [
                {
                    google: 2,
                    facebook: 1,
                    twitter: 6,
                    email: 0
                }
            ]
        }
    ],
    dateCreation: Date.now(),
    dataPublished: Date.now(),
    timeToFinish: Date.now(),
    private: [
        {
            users: [
                {
                    userId: 'Manolo',
                    write: true
                }
            ]
        }
    ],
    cuestions: [
        newCuestionChoose,
        newCuestionTrueFalse,
        newCuestionOne,
        newCuestionCheck,
        newCuestionArrow,
        newCuestionSection
    ]
});


// const hostDB = () => {
//   let db_host;
//   if (process.env.DB_HOST) {
//     db_host = process.env.DB_HOST;
//   } else {
//     db_host = 'localhost';
//   }
// return db_host;
// };
//
// const connectDB = () => {
//   mongoose.connect('mongodb://' + hostDB() + ':27017/test');
//   mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
//   mongoose.connection.once('open', function () {
//     console.log('Connecto with mongoose');
//   });
// };
//
// connectDB();

connect();

// With ES6 Promise

// let saveDb = function async (newTest){
//   new Promise(function () {
//     try {
//       newTest.save();
//     } catch (e) {
//        console.error(e);
//     } finally {
//       console.log('Test Save');
//     }
//   });
// };
//
// saveDb(newTest);

// or

// newTest.save(()=>{
//   console.log('Test save');
//   })
//   .catch((err) => {
//     console.error('Error:');
//  });

// With co package

// co(function * () {
//   try {
//     yield newTest.save();
//   } catch (e) {
//     console.error(e);
//   }
// });

// ES7 async

let saveTest = async (newTest) => {
  try {
    newTest.save();
  } catch (e) {
     console.error(e);
  } finally {
    console.log('Test Save async');
  }
};

saveTest(newTest);
