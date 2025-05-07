db = db.getSiblingDB('proddb');

db.createCollection('prodCollection');
db.prodCollection.insertOne({
  name: "Prod Data",
  env: "production"
});

