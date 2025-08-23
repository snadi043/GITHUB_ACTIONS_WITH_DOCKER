// import { MongoClient, ServerApiVersion } from 'mongodb';

// Importing the installed MongoDB pacakge to use in the application to integrate with the database.
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient; //Configuring MongoClient to connect to mongoDB.

let _db;


// const connectionProtocol = process.env.MONGODB_CONNECTION_PROTOCOL;
// const dbName = process.env.MONGODB_DB_NAME;
// const clusterAddress = process.env.MONOGDB_CLUSTER_ADDRESS;
// const dbUser = process.env.MONGODB_USERNAME;
// const dbPassword = process.env.MONGODB_PASSWORD;

// Inorder to use the connection process as a reusable code, calling it with a method to export it and use in the application.
const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://snadi043:glC28pIZf3JtErdR@cluster0.ierxn0t.mongodb.net/github-actions-docker-container?retryWrites=true&w=majority') //shop is the database name.
  .then(client => {
    _db = client.db();
    callback();
    console.log('Connected!');
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
}

// Storing the access to the database to efficently use the database connection.
const getDb = () => {
  if(_db){
    return _db;
  }
  throw 'No database connection found';
}

// Exporting the connection process.
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

// const uri = `${connectionProtocol}://${dbUser}:${dbPassword}@${clusterAddress}/${dbName}?retryWrites=true&w=majority`
// const client = new MongoClient(uri, {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     });

// console.log('Trying to connect to db');

// try {
//   await client.connect();
//   await client.db(dbName).command({ ping: 1 });
//   console.log('Connected successfully to server');
// } catch (error) {
//   console.log('Connection failed.');
//   await client.close();
//   console.log('Connection closed.');
//   process.exit(1);
// }

// const database = client.db(dbName);

// export default database;

