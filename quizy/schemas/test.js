var mongoose = require('mongoose');

var Schema = mongoose.Schema;
let db_host = 'localhost';

console.log('Hello node');
console.log(process.env.DB_HOST);

if (process.env.DB_HOST) {
    db_host = process.env.DB_HOST;
}



var userSchema = new Schema({
  username: String,
  name: String,
  LastName: String,
  email: String,
  url: String,
  image: String,
  socialNetwork: [{
    google: String,
    facebook: String,
    twitter: String,
    email: String
  }]
});


var User = mongoose.model('User', userSchema);

var newUser = new User({
  username: 'usernameString',
  name: 'nameString',
  LastName: 'lastNameString',
  email: 'emailString',
  url: 'urlString',
  image: 'imageString',
  socialNetwork: [{
    google: 'googleString',
    facebook: 'facebookString',
    twitter: 'twitterString',
    email: 'emailString'
  }]
});









var testSchema = new Schema({
    title: String,
    author: userSchema,
    category: String,
    order: Boolean,
    askLater: Boolean,
    allowNotAsk: Boolean,
    statistics: [{
        passed: Number,
        nTimes: Number,
        volarations: Number,
        nShared: [{
            google: Number,
            facebook: Number,
            twitter: Number,
            email: Number
        }]
    }],
    dateCreation: Date,
    dataPublished: Date,
    timeToFinish: Date,
    private: [{
        users: [{
            userId: String,
            write: Boolean
        }]
    }]
});

var Test = mongoose.model('Test', testSchema);


// var newTest = new Test({
//     title: 'title_String',
//     author: 'author_String',
//     category: 'category_String',
//     order: true,
//     askLater: true,
//     allowNotAsk: true,
//     statistics: [{
//         passed: 5,
//         nTimes: 2,
//         volarations: 3,
//         nShared: [{
//             google: 2,
//             facebook: 1,
//             twitter: 6,
//             email: 0
//         }]
//     }],
//     dateCreation: Date.now(),
//     dataPublished: Date.now(),
//     timeToFinish: Date.now(),
//     private: [{
//         users: [{
//             userId: 'Manolo',
//             write: true
//         }]
//     }]
// });


var newTest = new Test({
    title: 'title_String',
    author: newUser,
    category: 'category_String',
    order: true,
    askLater: true,
    allowNotAsk: true,
    statistics: [{
        passed: 5,
        nTimes: 2,
        volarations: 3,
        nShared: [{
            google: 2,
            facebook: 1,
            twitter: 6,
            email: 0
        }]
    }],
    dateCreation: Date.now(),
    dataPublished: Date.now(),
    timeToFinish: Date.now(),
    private: [{
        users: [{
            userId: 'Manolo',
            write: true
        }]
    }]
});








newTest.save(function(err, newTest){
  if(err) return console.error(err);
  console.log('Save Test');
});






var db = mongoose.connection;
mongoose.connect('mongodb://' + db_host + ':27017/test');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connecto with mongoose');
});
