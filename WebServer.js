var MongoClient = require('mongodb').MongoClient;

// Connect to DB
MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });