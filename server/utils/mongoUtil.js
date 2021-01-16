const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb://localhost:27017";

let _db;

const connectToServer = () => {
  MongoClient.connect( url,  { useUnifiedTopology: true }, function( err, database ) {
    if (err) throw err;
    _db  = database.db("fadoni_tech_db");
    console.log("Error connecting to db", err);
  });
};

const getDb = () => {
  return _db;
};

module.exports = {
  getDb,
  connectToServer
};
