import mongoose from 'mongoose';
import {User} from './models/user.js';
import {Test} from './models/test.js';
import {CuestionBase} from './models/cuestions/cuestionBase';
import {CuestionModelChoose, ChooseCuestion} from './models/cuestions/cuestionChoose';

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

let newcuestionBase = new CuestionBase({
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
    ]
});

let newCuestionChoose = new CuestionModelChoose({
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
    cuestion: '¿Cual es mi pueblo?',
    answers: [
        {
          answer: [{
              answer: 'Galvez',
              isCorrect: false
          },{
              answer: 'Menasalbas',
              isCorrect: true
          }]
        }
    ]

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
    cuestions: [newCuestionChoose, newCuestionChoose]
});

let db_host;

if (process.env.DB_HOST) {
    db_host = process.env.DB_HOST;
} else {
    db_host = 'localhost';
}

let db = mongoose.connection;
mongoose.connect('mongodb://' + db_host + ':27017/test');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connecto with mongoose');
});

newTest.save(function(err, newTest) {
    if (err)
        return console.error(err);
    console.log('Save Tests');
});
