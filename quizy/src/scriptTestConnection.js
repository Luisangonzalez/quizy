let db_host = 'localhost';

console.log('Hello node ;)');
console.log(process.env.DB_HOST);
if (process.env.DB_HOST) {
    db_host = process.env.DB_HOST;
}

const MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

MongoClient.connect('mongodb://' + db_host + ':27017/test', function(err, db) {
    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");
});
