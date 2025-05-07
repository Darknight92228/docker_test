db = db.getSiblingDB('testdb');

db.createCollection('testCollection');
db.testCollection.insertOne({
  name: "Test Data",
  env: "test"
});

