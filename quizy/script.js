let db_host = 'localhost';

console.log('Hello node');
console.log(process.env.DB_HOST);
if (process.env.DB_HOST) {
    db_host = process.env.DB_HOST;
}


var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


MongoClient.connect('mongodb://' + db_host + ':27017/manolo', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var query = {
        "category_code": "biotech"
    };

    db.collection('benito').find(query).toArray(function(err, docs) {

        assert.equal(err, null);
        assert.notEqual(docs.length, 0);

        docs.forEach(function(doc) {
            console.log( doc.name + " is a " + doc.category_code + " company." );
        });

        db.close();

    });

});
